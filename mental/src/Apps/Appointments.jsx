import React, { useState, useEffect } from "react";
import SidNavbar from "../Component/SidNavbar";
import Topbar from "../Component/Topbar";
import { AiFillPhone, AiTwotoneVideoCamera } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!isAdminLoggedIn) navigate("/admin");
  }, [navigate]);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/register/read");
      setAppointments(res.data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/register/delete/${id}`);
      setAppointments((prev) => prev.filter((app) => app._id !== id));
    } catch (err) {
      console.error("Error cancelling appointment:", err);
      alert("Failed to cancel appointment. Please try again.");
    }
  };

  const handleAccept = async (appointment) => {
    try {
      await axios.post("http://localhost:5000/patients/create", appointment);
      await handleCancel(appointment._id);
      navigate("/patients");
    } catch (err) {
      console.error("Error accepting appointment:", err);
      alert("Failed to accept appointment. Please try again.");
    }
  };

  return (
    <div className="flex h-screen text-white">
      {/* Sidebar fixed */}
      <div className="w-64 fixed h-full z-10">
        <SidNavbar />
      </div>

      {/* Main content area */}
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Topbar fixed */}
        <div className="fixed w-[calc(100%-16rem)] z-10">
          <Topbar />
        </div>

        {/* Scrollable appointments content */}
        <div className="mt-24 px-6 py-4 overflow-y-auto h-[calc(100vh-6rem)]">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-300 text-black">
            <h2 className="text-2xl font-bold text-blue-900 mb-5 border-b pb-2">
              Appointments List
            </h2>

            <table className="w-full table-auto text-sm text-left rounded-xl overflow-hidden shadow border border-gray-200">
              <thead className="bg-gradient-to-r from-[#cfe2f3] to-[#e3f0ff] text-gray-800 uppercase text-[13px]">
                <tr>
                  <th className="px-4 py-3 border">Full Name</th>
                  <th className="px-4 py-3 border">Phone Number</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Gender</th>
                  <th className="px-4 py-3 border">Service / Counseling</th>
                  <th className="px-4 py-3 border">Date & Time</th>
                  <th className="px-4 py-3 border">Contact</th>
                  <th className="px-4 py-3 border text-center">Cancel</th>
                  <th className="px-4 py-3 border text-center">Accept</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((app, index) => (
                    <tr
                      key={app._id}
                      className={`${
                        index % 2 === 0 ? "bg-[#f9fbfc]" : "bg-white"
                      } hover:bg-[#e6f7ff] transition duration-200`}
                    >
                      <td className="px-4 py-2 border text-gray-700 font-medium">
                        {app.fullname}
                      </td>
                      <td className="px-4 py-2 border text-gray-600">
                        {app.phonenumber}
                      </td>
                      <td className="px-4 py-2 border text-gray-600">
                        {app.email}
                      </td>
                      <td className="px-4 py-2 border capitalize text-gray-600">
                        {app.gender}
                      </td>
                      <td className="px-4 py-2 border text-gray-700">
                        {app.service || app.counseling || "-"}
                      </td>
                      <td className="px-4 py-2 border text-gray-600">
                        {app.date}
                      </td>
                      <td className="px-4 py-2 border flex items-center gap-1 text-gray-700">
                        {app.type === "phonecall" ? (
                          <>
                            <AiFillPhone className="text-green-600" />
                            <span>Phone</span>
                          </>
                        ) : (
                          <>
                            <AiTwotoneVideoCamera className="text-blue-600" />
                            <span>Video</span>
                          </>
                        )}
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <button
                          onClick={() => handleCancel(app._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-lg text-sm shadow transition"
                        >
                          Cancel
                        </button>
                      </td>
                      <td className="px-4 py-2 border text-center">
                        <button
                          onClick={() => handleAccept(app)}
                          className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-sm shadow transition"
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-6 text-gray-500 italic">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {appointments.length === 0 && (
              <div className="text-center mt-6 text-gray-700 font-medium">
                No appointments available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
