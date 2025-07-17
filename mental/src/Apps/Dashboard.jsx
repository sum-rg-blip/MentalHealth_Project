import React, { useEffect, useState } from "react";
import SidNavbar from "../Component/SidNavbar";
import Topbar from "../Component/Topbar";
import axios from "axios";
import {
  FaUserMd,
  FaCalendarAlt,
  FaTimesCircle,
  FaPlusCircle,
  FaUserPlus,
  FaInbox,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

// Count up animation hook
function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = Math.ceil(duration / 50);
    const increment = target / steps;
    let currentStep = 0;

    const counter = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps || start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
}

function Dashboard() {
  const [totalCounselingCount, setTotalCounselingCount] = useState(0);
  const [newAppointmentsCount, setNewAppointmentsCount] = useState(0);
  const [cancelAppointmentsCount, setCancelAppointmentsCount] = useState(0);

  const totalCounseling = useCountUp(totalCounselingCount);
  const newAppointments = useCountUp(newAppointmentsCount);
  const cancelAppointments = useCountUp(cancelAppointmentsCount);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [patientsRes, registerRes, cancelledRes] = await Promise.all([
          axios.get("http://localhost:5000/patients"),
          axios.get("http://localhost:5000/register/read"),
          axios.get("http://localhost:5000/cancelled"),
        ]);

        setTotalCounselingCount(patientsRes.data.length);
        setNewAppointmentsCount(registerRes.data.length);
        setCancelAppointmentsCount(cancelledRes.data.length);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };
    fetchData();
  }, []);

  // Dummy chart data
  const chartData = [
    { name: "Mon", Appointments: 5 },
    { name: "Tue", Appointments: 8 },
    { name: "Wed", Appointments: 4 },
    { name: "Thu", Appointments: 7 },
    { name: "Fri", Appointments: 6 },
    { name: "Sat", Appointments: 3 },
    { name: "Sun", Appointments: 2 },
  ];

  return (
    <div className=" overflow-hidden min-h-screen">
      <div className="flex flex-col w-full">
        <Topbar />
      </div>
      <SidNavbar />

      <div className="ml-60 mt-28 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <FaUserMd className="text-green-600 text-4xl" />
            <h3 className="text-xl font-semibold text-green-800">Total Counseling</h3>
          </div>
          <p className="text-5xl font-bold text-green-900 text-center">{totalCounseling}</p>
          <p className="text-center text-gray-600 mt-2">Patients Served</p>
        </div>

        <div className="rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <FaCalendarAlt className="text-green-600 text-4xl" />
            <h3 className="text-xl font-semibold text-green-800">New Appointments</h3>
          </div>
          <p className="text-5xl font-bold text-green-900 text-center">{newAppointments}</p>
          <p className="text-center text-gray-600 mt-2">Pending Approval</p>
        </div>

        <div className="rounded-2xl border border-green-100 shadow-md p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center space-x-4 mb-4">
            <FaTimesCircle className="text-green-600 text-4xl" />
            <h3 className="text-xl font-semibold text-green-800">Cancelled</h3>
          </div>
          <p className="text-5xl font-bold text-green-900 text-center">{cancelAppointments}</p>
          <p className="text-center text-gray-600 mt-2">Appointments</p>
        </div>
      </div>

      {/* Appointment Chart Section */}
      <div className="ml-60 mt-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Appointments This Week</h2>
        <div className="bg-white rounded-xl shadow-md p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Appointments"
                stroke="#38b000"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="ml-60 mt-12 px-6 max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link to="/Appointments">
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-4 px-16 rounded-xl shadow-md flex items-center justify-center gap-3 text-lg font-semibold">
            <FaPlusCircle />  Appointment
          </button>   
          </Link>
          <Link to="/Patients"> 
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-4 px-18 rounded-xl shadow-md flex items-center justify-center gap-3 text-lg font-semibold">
            <FaUserPlus /> Patient
          </button>
          </Link>

          <Link to="/Message">
          <button className="bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 text-white p-4 rounded-xl shadow-md flex items-center justify-center gap-3 text-lg font-semibold">
            <FaInbox /> Check Messages
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
