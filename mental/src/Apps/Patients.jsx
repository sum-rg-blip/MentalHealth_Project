import React from "react";
import SidNavbar from "../Component/SidNavbar";
import Topbar from "../Component/Topbar";
import { AiFillPhone, AiTwotoneVideoCamera, AiOutlineEye } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Patients() {
  const ViewBoxRef = useRef();
  const [isViewBoxOpen, setIsViewBoxOpen] = useState(false);
  const [doctorNote, setDoctorNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await axios.get("http://localhost:5000/patients");
        setPatients(res.data);
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };
    fetchPatients();
  }, []);

  const handleOpen = (patient) => {
    setSelectedPatient(patient);
    setIsViewBoxOpen(true);
    setDoctorNote("");
    setSavedNote("");
  };

  const handleClose = () => {
    setIsViewBoxOpen(false);
    setSelectedPatient(null);
    setDoctorNote("");
    setSavedNote("");
  };

  const handleSaveNote = () => {
    if (doctorNote.trim()) {
      setSavedNote(doctorNote);
      setDoctorNote("");
      alert("Note saved!");
    } else {
      alert("Please write something in the note.");
    }
  };

  const handleDeletePatient = async () => {
    if (!selectedPatient?._id) return alert("Invalid patient selected.");

    if (window.confirm(`Are you sure you want to delete ${selectedPatient.fullname}?`)) {
      try {
        await axios.delete(`http://localhost:5000/patients/${selectedPatient._id}`);
        setPatients((prev) => prev.filter((p) => p._id !== selectedPatient._id));
        setIsViewBoxOpen(false);
        alert("Patient deleted successfully.");
      } catch (err) {
        console.error("Failed to delete patient:", err);
        alert("Failed to delete patient. Try again later.");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ViewBoxRef.current && !ViewBoxRef.current.contains(e.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex overflow-x-hidden">
      <SidNavbar /> {/* Sidebar on the left */}

      {/* Main layout */}
      <div className="flex flex-col w-full min-h-screen ml-64 overflow-x-hidden">
        <Topbar />

        {/* Content Section */}
        <div className="relative w-full flex justify-center mt-24 px-4">
          <div className="w-full max-w-7xl overflow-x-auto bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-5 border-b pb-2">
              Accepted Patients List
            </h2>

            <table className="w-full table-auto text-sm text-left rounded-xl overflow-hidden shadow-md border border-gray-200">
              <thead className="bg-gradient-to-r from-[#b2d8d8] to-[#e6f2ff] text-gray-800 uppercase text-[13px]">
                <tr>
                  <th className="px-4 py-3 border">#</th>
                  <th className="px-4 py-3 border">Name</th>
                  <th className="px-4 py-3 border">Date & Time</th>
                  <th className="px-4 py-3 border">Type</th>
                  <th className="px-4 py-3 border">Phone</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Gender</th>
                  <th className="px-4 py-3 border">Service / Counseling</th>
                  <th className="px-4 py-3 border text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.length > 0 ? (
                  patients.map((patient, idx) => (
                    <tr
                      key={patient._id}
                      className={`${
                        idx % 2 === 0 ? "bg-[#f9fbfc]" : "bg-white"
                      } hover:bg-[#e6f7ff] transition duration-200`}
                    >
                      <td className="px-4 py-2 border text-gray-600">{idx + 1}</td>
                      <td className="px-4 py-2 border font-medium text-gray-800">{patient.fullname}</td>
                      <td className="px-4 py-2 border text-gray-600">{patient.date}</td>
                      <td className="px-4 py-2 border text-center">
                        {patient.type === "phonecall" ? (
                          <AiFillPhone className="text-green-500 inline-block" />
                        ) : (
                          <AiTwotoneVideoCamera className="text-blue-500 inline-block" />
                        )}
                      </td>
                      <td className="px-4 py-2 border text-gray-600">{patient.phonenumber}</td>
                      <td className="px-4 py-2 border text-gray-600">{patient.email}</td>
                      <td className="px-4 py-2 border text-gray-600">{patient.gender}</td>
                      <td className="px-4 py-2 border text-gray-700">
                        {patient.service || patient.counseling || "-"}
                      </td>
                      <td className="px-4 py-2 border flex justify-center items-center gap-2">
                        <AiOutlineEye
                          size={20}
                          className="cursor-pointer text-blue-600 hover:text-blue-800 hover:scale-110 transition"
                          onClick={() => handleOpen(patient)}
                          title="View Details"
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-gray-400 italic">
                      No accepted patients yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal View */}
        {isViewBoxOpen && selectedPatient && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-[#1b8e43] to-[#e3e6ec] bg-opacity-30 backdrop-blur-sm transition duration-300">
            <div
              ref={ViewBoxRef}
              className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto mx-4 bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 animate-fade-in"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
              >
                <MdOutlineClose size={26} />
              </button>

              <h2 className="text-2xl font-semibold text-black mb-6 text-center underline underline-offset-4">
                Patient Appointment Overview
              </h2>

              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-gray-700 text-[15px]">
                <p className="text-gray-500">Full Name</p>
                <p className="font-semibold text-gray-800">{selectedPatient.fullname}</p>

                <p className="text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">{selectedPatient.phonenumber}</p>

                <p className="text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">{selectedPatient.email}</p>

                <p className="text-gray-500">Gender</p>
                <p className="font-semibold text-gray-800">{selectedPatient.gender}</p>

                <p className="text-gray-500">Appointment Date</p>
                <p className="font-semibold text-gray-800">{selectedPatient.date}</p>

                <p className="text-gray-500">Type</p>
                <p className="font-semibold text-blue-600 flex items-center gap-2">
                  {selectedPatient.type === "phonecall" ? <AiFillPhone /> : <AiTwotoneVideoCamera />}
                  {selectedPatient.type}
                </p>

                <p className="text-gray-500">Service / Counseling</p>
                <p className="font-semibold text-gray-800">
                  {selectedPatient.service || selectedPatient.counseling || "-"}
                </p>

                <p className="text-gray-500">Notes</p>
                <p className="font-semibold text-gray-700 col-span-2">
                  {savedNote ||
                    "Patient is responding well to therapy. Weekly mindfulness practices are recommended."}
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <div className="w-full">
                  <label htmlFor="doctorNote" className="text-gray-600 font-medium mb-1 block">
                    Doctor’s Note
                  </label>
                  <textarea
                    id="doctorNote"
                    rows="3"
                    className="w-full border border-blue-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                    placeholder="Write your note or observation here..."
                    value={doctorNote}
                    onChange={(e) => setDoctorNote(e.target.value)}
                  ></textarea>
                  <button
                    onClick={handleSaveNote}
                    className="mt-3 ml-10 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
                  >
                    💾 Save Note
                  </button>

                  <button
                    onClick={handleDeletePatient}
                    className="self-end ml-[40%] sm:mt-6 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white text-center mt-10 px-4 py-4 rounded-full text-sm font-semibold shadow"
                    title="Delete patient"
                  >
                    🗑️ Delete Patient
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Patients;
