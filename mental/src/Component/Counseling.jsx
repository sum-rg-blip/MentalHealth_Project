// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaBrain, FaComments, FaUsers, FaChild, FaHeart, FaMedkit } from 'react-icons/fa';

// const counselingServices = [
//   {
//     title: 'Individual Therapy',
//     description: 'One-on-one sessions to help individuals manage stress, anxiety, and depression.',
//     image: 'https://img.freepik.com/free-photo/psychologist-taking-notes-therapy-session_23-2148753524.jpg',
//     icon: <FaBrain className="text-green-700 text-3xl" />,
//   },
//   {
//     title: 'Couples Counseling',
//     description: 'Helping couples communicate better and resolve conflicts.',
//     image: 'https://img.freepik.com/free-photo/couple-therapy-session-psychologist-office_23-2149311072.jpg',
//     icon: <FaComments className="text-green-700 text-3xl" />,
//   },
//   {
//     title: 'Group Therapy',
//     description: 'Supportive group sessions guided by licensed professionals.',
//     image: 'https://img.freepik.com/free-photo/people-therapy-session_23-2148688047.jpg',
//     icon: <FaUsers className="text-green-700 text-3xl" />,
//   },
//   {
//     title: 'Child & Adolescent Therapy',
//     description: 'Tailored sessions for young individuals dealing with emotional challenges.',
//     image: 'https://img.freepik.com/free-photo/child-psychologist-talking-with-young-patient_23-2149311015.jpg',
//     icon: <FaChild className="text-green-700 text-3xl" />,
//   },
//   {
//     title: 'Trauma Counseling',
//     description: 'Safe space to heal from past traumatic experiences.',
//     image: 'https://img.freepik.com/free-photo/woman-therapy-session-clinical-setting_23-2149310995.jpg',
//     icon: <FaHeart className="text-green-700 text-3xl" />,
//   },
//   {
//     title: 'Crisis Intervention',
//     description: 'Immediate support during critical emotional or psychological situations.',
//     image: 'https://img.freepik.com/free-photo/psychologist-patient-support-session_23-2149310978.jpg',
//     icon: <FaMedkit className="text-green-700 text-3xl" />,
//   },
// ];

// export default function Counseling() {
//   const [selectedCounseling, setSelectedCounseling] = useState(null);
//   const navigate = useNavigate();

//   if (selectedCounseling) {
//     return (
//       <div className="min-h-screen py-12 px-4 flex flex-col items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6"
//         >
//           <img
//             src={selectedCounseling.image}
//             alt={selectedCounseling.title}
//             className="w-full h-56 object-cover rounded-xl mb-6"
//           />
//           <div className="flex items-center gap-3 mb-4">
//             {selectedCounseling.icon}
//             <h2 className="text-3xl font-bold text-green-900">{selectedCounseling.title}</h2>
//           </div>
//           <p className="text-green-700 mb-6">{selectedCounseling.description}</p>

//           <div className="flex gap-4">
//             <button
//               onClick={() => setSelectedCounseling(null)}
//               className="px-4 py-2 bg-green-100  text-green-800 rounded-lg hover:bg-green-200 transition"
//             >
//               ← Back
//             </button>
//             <button
//               onClick={() =>
//                 navigate('/appointment', {
//                   state: {
//                     type: 'Counseling',
//                     counselingType: selectedCounseling.title,
//                   },
//                 })
//               }
//               className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
//             >
//               Book Now
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-12 px-4">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-6 text-green-700 hover:underline transition"
//       >
//         ← Back to Services
//       </button>
//       <h2 className="text-4xl font-bold text-green-900 mb-10 text-center">Counseling Types</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {counselingServices.map((service, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => setSelectedCounseling(service)}
//             className="cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition border border-green-100"
//           >
//             <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-t-2xl" />
//             <div className="p-6 space-y-4">
//               <div className="flex items-center gap-3">
//                 {service.icon}
//                 <h3 className="text-xl font-semibold text-green-800">{service.title}</h3>
//               </div>
//               <p className="text-green-700 text-sm">{service.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Counseling.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain, FaComments, FaUsers, FaChild, FaHeart, FaMedkit } from 'react-icons/fa';

const counselingServices = [
  {
    title: 'Individual Therapy',
    description: 'One-on-one sessions to help individuals manage stress, anxiety, and depression.',
    image: 'https://img.freepik.com/free-photo/psychologist-taking-notes-therapy-session_23-2148753524.jpg',
    icon: <FaBrain className="text-green-700 text-3xl" />,
  },
  {
    title: 'Couples Counseling',
    description: 'Helping couples communicate better and resolve conflicts.',
    image: 'https://img.freepik.com/free-photo/couple-therapy-session-psychologist-office_23-2149311072.jpg',
    icon: <FaComments className="text-green-700 text-3xl" />,
  },
  {
    title: 'Group Therapy',
    description: 'Supportive group sessions guided by licensed professionals.',
    image: 'https://img.freepik.com/free-photo/people-therapy-session_23-2148688047.jpg',
    icon: <FaUsers className="text-green-700 text-3xl" />,
  },
  {
    title: 'Child & Adolescent Therapy',
    description: 'Tailored sessions for young individuals dealing with emotional challenges.',
    image: 'https://img.freepik.com/free-photo/child-psychologist-talking-with-young-patient_23-2149311015.jpg',
    icon: <FaChild className="text-green-700 text-3xl" />,
  },
  {
    title: 'Trauma Counseling',
    description: 'Safe space to heal from past traumatic experiences.',
    image: 'https://img.freepik.com/free-photo/woman-therapy-session-clinical-setting_23-2149310995.jpg',
    icon: <FaHeart className="text-green-700 text-3xl" />,
  },
  {
    title: 'Crisis Intervention',
    description: 'Immediate support during critical emotional or psychological situations.',
    image: 'https://img.freepik.com/free-photo/psychologist-patient-support-session_23-2149310978.jpg',
    icon: <FaMedkit className="text-green-700 text-3xl" />,
  },
];

export default function Counseling() {
  const [selectedCounseling, setSelectedCounseling] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { service } = location.state || {};

  if (selectedCounseling) {
    return (
      <div className="min-h-screen py-12 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6"
        >
          <img
            src={selectedCounseling.image}
            alt={selectedCounseling.title}
            className="w-full h-56 object-cover rounded-xl mb-6"
          />
          <div className="flex items-center gap-3 mb-4">
            {selectedCounseling.icon}
            <h2 className="text-3xl font-bold text-green-900">{selectedCounseling.title}</h2>
          </div>
          <p className="text-green-700 mb-6">{selectedCounseling.description}</p>

          <div className="flex gap-4">
            <button
              onClick={() => setSelectedCounseling(null)}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition"
            >
              ← Back
            </button>
            <button
              onClick={() =>
                navigate('/appointment', {
                  state: {
                    type: service || 'Counseling',
                    counselingType: selectedCounseling.title,
                  },
                })
              }
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-green-700 hover:underline transition"
      >
        ← Back to Services
      </button>
      <h2 className="text-4xl font-bold text-green-900 mb-10 text-center">Counseling Types</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {counselingServices.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedCounseling(service)}
            className="cursor-pointer rounded-2xl shadow-md hover:shadow-xl transition border border-green-100"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="text-xl font-semibold text-green-800">{service.title}</h3>
              </div>
              <p className="text-green-700 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
