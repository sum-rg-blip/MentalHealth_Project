import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  CheckCircle,
  Clock,
  AlertCircle,
  X,
} from "lucide-react";
import SideBar from "../Component/SideBar";
import { Link } from "react-router-dom";

const appointmentsTimelineMock = [
  {
    id: 1,
    status: "past",
    hospital: "MindCare Hospital",
    doctor: "Dr. Rose Linda",
    specialty: "Cognitive Therapy",
    time: "12 June 2025 - 10:00 AM",
  },
  {
    id: 2,
    status: "missed",
    hospital: "HealNow Center",
    doctor: "Dr. Jordan Lee",
    specialty: "Trauma Counseling",
    time: "20 June 2025 - 02:00 PM",
  },
  {
    id: 3,
    status: "upcoming",
    hospital: "MindCare Hospital",
    doctor: "Dr. Emilia Winson",
    specialty: "Physiotherapy",
    time: "2 July 2025 - 09:00 AM",
  },
];

const remindersMock = {
  5: ["Meeting with Dr. Emilia at 9:00 AM", "Bring medical reports"],
  10: ["Annual health check-up"],
  15: ["Follow-up appointment"],
};

const getStatusUI = (status) => {
  switch (status) {
    case "past":
      return {
        icon: <CheckCircle className="text-green-500 w-5 h-5" />,
        label: "Completed",
        bgColor: "bg-green-100",
        textColor: "text-green-700",
      };
    case "missed":
      return {
        icon: <AlertCircle className="text-red-500 w-5 h-5" />,
        label: "Missed",
        bgColor: "bg-red-100",
        textColor: "text-red-700",
      };
    case "upcoming":
      return {
        icon: <Clock className="text-yellow-500 w-5 h-5" />,
        label: "Upcoming",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-700",
      };
    default:
      return {};
  }
};

function ClientDashboard() {
  const [progress, setProgress] = useState(75);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState("Monthly"); // Monthly or Daily view for calendar

  // Static stats from mock data
  const completedSessions = appointmentsTimelineMock.filter(a => a.status === "past").length;
  const upcomingAppointments = appointmentsTimelineMock.filter(a => a.status === "upcoming").length;
  const missedAppointments = appointmentsTimelineMock.filter(a => a.status === "missed").length;

  useEffect(() => {
    // Simulate daily progress change randomly every 5 sec (for demo)
    const interval = setInterval(() => {
      setProgress((prev) => {
        let next = prev + (Math.random() * 10 - 5);
        if(next > 100) next = 100;
        if(next < 0) next = 0;
        return Math.round(next);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDate(null);
  };

  return (
    <div className="flex h-screen ">
      <SideBar />
      <main className="flex-1 p-6 ml-30 overflow-y-auto">
        {/* Motivational quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-green-100 text-green-800 italic font-semibold text-center p-3 rounded-lg mb-6 shadow-sm"
        >
          "Your mental health matters. Take small steps daily for a healthier mind."
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left side */}
          <section className="md:col-span-2 space-y-6">
            {/* Welcome */}
            <div className="bg-white p-6 rounded-3xl shadow border border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-2">Welcome Back 👋</h2>
              <p className="text-green-700 mb-6">
                Glad to see you! Focus on your wellbeing and keep progressing.
              </p>

              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center shadow hover:scale-105 transform transition cursor-default">
                  <CheckCircle className="mx-auto text-green-500 w-8 h-8 mb-2" />
                  <p className="text-green-700 font-bold text-lg">{completedSessions}</p>
                  <p className="text-green-600 text-sm">Completed Sessions</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center shadow hover:scale-105 transform transition cursor-default">
                  <Clock className="mx-auto text-yellow-500 w-8 h-8 mb-2" />
                  <p className="text-yellow-700 font-bold text-lg">{upcomingAppointments}</p>
                  <p className="text-yellow-600 text-sm">Upcoming Appointments</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center shadow hover:scale-105 transform transition cursor-default">
                  <AlertCircle className="mx-auto text-red-500 w-8 h-8 mb-2" />
                  <p className="text-red-700 font-bold text-lg">{missedAppointments}</p>
                  <p className="text-red-600 text-sm">Missed Appointments</p>
                </div>
              </div>

              {/* Book Appointment Button */}
              <Link to="/service">
              <button
                onClick={() => alert("Booking feature will be available soon!")}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow transition"
              >
                Book New Appointment
              </button>
</Link>
              {/* Progress & Virtual Sessions info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                  <CheckCircle className="text-green-500 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-green-800">Track Your Progress</p>
                    <p className="text-sm text-green-600">Stay updated with your sessions and milestones.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-4">
                  <Video className="text-green-500 w-6 h-6" />
                  <div>
                    <p className="font-semibold text-green-800">Easy Virtual Sessions</p>
                    <p className="text-sm text-green-600">Attend appointments via video calls.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapist Tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-green-50 border border-green-300 rounded-xl p-4 italic text-green-700 shadow-sm mt-6"
            >
              <p>🧠 <strong>Tip of the day:</strong> Practice deep breathing for 5 minutes daily to reduce stress and improve focus.</p>
            </motion.div>

            {/* Appointments Timeline */}
            <div className="bg-white p-6 rounded-3xl shadow border border-green-200 mt-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Appointments Timeline</h3>
              <div className="space-y-4">
                {appointmentsTimelineMock.map((appt) => {
                  const { icon, label, bgColor, textColor } = getStatusUI(appt.status);
                  return (
                    <motion.div
                      key={appt.id}
                      whileHover={{ scale: 1.03 }}
                      className={`flex items-start justify-between p-4 rounded-xl border ${bgColor} ${textColor} shadow-sm cursor-default`}
                    >
                      <div className="flex gap-3 items-center">
                        <div className="bg-white rounded-full p-1 shadow">{icon}</div>
                        <div>
                          <p className="font-medium">{appt.hospital}</p>
                          <p className="text-sm">{appt.doctor} — {appt.specialty}</p>
                          <p className="text-xs text-green-600">{appt.time}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide">{label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Right side */}
          <section className="space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-3xl p-4 shadow border border-green-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-green-900">Appointments</h2>
                <select
                  value={viewMode}
                  onChange={e => setViewMode(e.target.value)}
                  className="text-sm px-2 py-1 border border-green-300 rounded-md"
                >
                  <option>Monthly</option>
                  <option>Daily</option>
                </select>
              </div>
              <div className="text-center text-sm font-medium text-green-700 mb-2">July 2025</div>
              <div className="grid grid-cols-7 gap-2 text-xs text-green-800">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div key={day} className="text-green-400">{day}</div>
                ))}
                {Array.from({ length: 30 }, (_, i) => {
                  const day = i + 1;
                  const isToday = day === 5;
                  const isSelected = day === selectedDate;
                  return (
                    <motion.div
                      key={i}
                      onClick={() => handleDateClick(day)}
                      whileHover={{ scale: 1.1 }}
                      className={`rounded-full py-1 text-center cursor-pointer transition ${
                        isSelected
                          ? "bg-green-700 text-white font-bold shadow"
                          : isToday
                          ? "bg-green-400 text-white"
                          : "hover:bg-green-100"
                      }`}
                    >
                      {day}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Daily Progress */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-3xl text-center shadow border border-green-200"
            >
              <h3 className="font-semibold text-green-900 mb-3">Daily Progress</h3>
              <motion.div
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative w-28 h-28 mx-auto my-4"
              >
                <div className="absolute inset-0 border-[10px] border-green-400 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-green-700">
                  {progress}%
                </div>
              </motion.div>
              <p className="text-sm text-green-600">Keep improving your health quality!</p>
            </motion.div>
          </section>
        </div>

        {/* Reminders Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl max-w-sm p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-green-700 hover:text-green-900"
                >
                  <X className="w-5 h-5" />
                </button>
                <h4 className="text-lg font-bold text-green-900 mb-4">Reminders for {selectedDate}</h4>
                <ul className="list-disc list-inside text-green-700">
                  {remindersMock[selectedDate] ? (
                    remindersMock[selectedDate].map((reminder, idx) => (
                      <li key={idx}>{reminder}</li>
                    ))
                  ) : (
                    <li>No reminders for this day.</li>
                  )}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default ClientDashboard;
