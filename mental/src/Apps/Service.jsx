// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import {
//   FaStar,
//   FaMapMarkerAlt,
//   FaBrain,
//   FaRegSmile,
//   FaStethoscope,
//   FaComments,
//   FaUsers,
//   FaChild,
//   FaHeart,
//   FaMedkit,
// } from 'react-icons/fa';

// export const services = [
//   {
//     img: "https://www.shutterstock.com/image-photo/portrait-asian-businesswoman-sitting-working-260nw-2256422063.jpg",
//     title: "Depression",
//     description: "A persistent feeling of sadness and loss of interest.",
//     imgs: "https://img.freepik.com/premium-photo/man-lab-coat-stands-with-his-arms-crossed_1100672-10007.jpg",
//     name: "Dr. Layla Yusuf",
//     icon: <FaBrain className="text-green-600 text-lg" />,
// experience: "Dr. Layla Yusuf is a compassionate therapist with 7+ years of experience helping patients manage depression using CBT and supportive therapy.",  },
//   {
//     img: "https://image.shutterstock.com/image-photo/mental-health-care-therapy-concept-260nw-2452680387.jpg",
//     title: "Anxiety",
//     description: "Excessive worry and fear disrupting daily life.",
//     imgs: "https://img.freepik.com/premium-photo/african-american-physical-therapist-female-patient-rehabilitation-center_259150-83053.jpg",
//     name: "Dr. Amir Khalid",
//     icon: <FaRegSmile className="text-green-600 text-lg" />,
//     experience: "Dr. Amir Khalid has over 6 years of experience treating anxiety and panic disorders using evidence-based therapeutic approaches and mindfulness.",
//   },
//   {
//     img: "https://img.freepik.com/free-photo/authentic-scene-young-person-undergoing-psychological-therapy_23-2150161976.jpg",
//     title: "PTSD",
//     description: "Triggered by terrifying events like war or abuse.",
//     imgs: "https://images.pexels.com/photos/1853102/pexels-photo-1853102.jpeg",
//     name: "Dr. Samira Abdi",
//     icon: <FaStethoscope className="text-green-600 text-lg" />,
//     experience: "Dr. Samira Abdi is a trauma specialist with 8+ years of experience in PTSD recovery using EMDR and trauma-informed therapy.",
//   },
//   {
//     img: "https://image.shutterstock.com/image-photo/group-therapy-brings-people-together-260nw-1962672082.jpg",
//     title: "Social Anxiety",
//     description: "Fear of social judgment causing avoidance.",
//     imgs: "https://images.pexels.com/photos/2770965/pexels-photo-2770965.jpeg",
//     name: "Dr. Roda Hussein",
//     icon: <FaRegSmile className="text-green-600 text-lg" />,
//     experience: "Dr. Roda Hussein has helped over 100+ clients rebuild their confidence through behavioral therapy and exposure techniques.",
//   },
//   {
//     img: "https://image.shutterstock.com/image-photo/therapy-session-serious-family-couple-260nw-2488148277.jpg",
//     title: "Family Therapy",
//     description: "Improve relationships and resolve family issues.",
//     imgs: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
//     name: "Dr. Mohamud",
//     icon: <FaBrain className="text-green-600 text-lg" />,
//     experience: "Dr. Lul Mohamud is a family therapist with 7+ years of experience resolving relationship conflicts using systemic and communication-focused approaches.",
//   },
//   {
//     img: "https://img.freepik.com/free-photo/young-woman-during-her-therapy-session_23-2150161973.jpg",
//     title: "Self-Esteem",
//     description: "Building confidence and personal growth.",
//     imgs: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
//     name: "Dr . Shire",
//     icon: <FaRegSmile className="text-green-600 text-lg" />,
//     experience: "Dr. Zahra Shir supports clients facing identity crises and self-acceptance struggles, bringing 6+ years of experience in existential therapy.",
//   },
// ];

// export default function Service() {
//   const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();

//   if (selected) {
//     return (
//       <div className="min-h-screen flex items-center justify-center p-6">
//         <div className="rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-gray-200">
//           <button
//             onClick={() => setSelected(null)}
//             className="block px-6 py-3 text-green-600 hover:underline focus:outline-none"
//           >
//             ← Back to Services
//           </button>

//           <div className="flex flex-col md:flex-row">
//             {/* Left image */}
//             <img
//               src={selected.img}
//               alt={selected.title}
//               className="w-full md:w-1/2 h-80 object-cover rounded-l-3xl"
//             />

//             {/* Right content */}
//             <div className="p-8 flex flex-col justify-between flex-1">
//               <div>
//                 <h3 className="text-4xl font-extrabold text-green-900 mb-4">{selected.title}</h3>
//                 <p className="text-gray-700 leading-relaxed">{selected.description}</p>

//                 <div className="flex items-center gap-5 mt-8">
//                   <img
//                     src={selected.imgs}
//                     alt={selected.name}
//                     className="w-14 h-14 rounded-full border-2 border-green-600"
//                   />
//                   <div>
//                     <p className="text-lg font-semibold text-gray-900">{selected.name}</p>
//                     <p className="text-sm text-gray-500 mt-1">{selected.experience}</p>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate('/counseling')}
//                 className="mt-10 self-start px-8 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition"
//               >
//                 Counseling Options
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen py-12 px-4 md:px-16 text-[#0B141B] font-sans">
//       <h2 className="text-4xl font-bold text-center mb-4 text-green-800">Explore Our Services</h2>
//       <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
//         Personalized therapy options to support your emotional and mental well-being.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             onClick={() => setSelected(service)}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="rounded-2xl border border-green-100 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
//           >
//             <img src={service.img} alt={service.title} className="h-48 w-full object-cover rounded-t-2xl" />
//             <div className="p-5 space-y-3">
//               <div className="flex items-center justify-between">
//                 <h4 className="text-xl font-semibold text-green-800">{service.title}</h4>
//                 {service.icon}
//               </div>
//               <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
//               <div className="flex justify-between items-center pt-3 border-t">
//                 <div className="flex items-center gap-3">
//                   <img src={service.imgs} className="w-10 h-10 rounded-full" alt="doctor" />
//                   <div>
//                     <p className="text-sm font-medium">{service.name}</p>
//                     <div className="flex text-yellow-500 text-xs">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar key={i} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-xs text-green-700 flex items-center gap-1">
//                   <FaMapMarkerAlt /> {service.location}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


// Service.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaStar,
  FaMapMarkerAlt,
  FaBrain,
  FaRegSmile,
  FaStethoscope,
} from 'react-icons/fa';

// export const services = [
//   {
//     img: "https://www.shutterstock.com/image-photo/portrait-asian-businesswoman-sitting-working-260nw-2256422063.jpg",
//     title: "Depression",
//     description: "A persistent feeling of sadness and loss of interest.",
//     imgs: "https://img.freepik.com/premium-photo/man-lab-coat-stands-with-his-arms-crossed_1100672-10007.jpg",
//     name: "Dr. Layla Yusuf",
//     icon: <FaBrain className="text-green-600 text-lg" />,
//     experience:
//       "Dr. Layla Yusuf is a compassionate therapist with 7+ years of experience helping patients manage depression using CBT and supportive therapy.",
//   },
//   {
//     img: "https://image.shutterstock.com/image-photo/mental-health-care-therapy-concept-260nw-2452680387.jpg",
//     title: "Anxiety",
//     description: "Excessive worry and fear disrupting daily life.",
//     imgs: "https://img.freepik.com/premium-photo/african-american-physical-therapist-female-patient-rehabilitation-center_259150-83053.jpg",
//     name: "Dr. Amir Khalid",
//     icon: <FaRegSmile className="text-green-600 text-lg" />,
//     experience:
//       "Dr. Amir Khalid has over 6 years of experience treating anxiety and panic disorders using evidence-based therapeutic approaches and mindfulness.",
//   },
//   {
//     img: "https://img.freepik.com/free-photo/authentic-scene-young-person-undergoing-psychological-therapy_23-2150161976.jpg",
//     title: "PTSD",
//     description: "Triggered by terrifying events like war or abuse.",
//     imgs: "https://images.pexels.com/photos/1853102/pexels-photo-1853102.jpeg",
//     name: "Dr. Samira Abdi",
//     icon: <FaStethoscope className="text-green-600 text-lg" />,
//     experience:
//       "Dr. Samira Abdi is a trauma specialist with 8+ years of experience in PTSD recovery using EMDR and trauma-informed therapy.",
//   },
// ];
export const services = [
  {
    img: "https://www.shutterstock.com/image-photo/portrait-asian-businesswoman-sitting-working-260nw-2256422063.jpg",
    title: "Depression",
    description: "A persistent feeling of sadness and loss of interest.",
    imgs: "https://img.freepik.com/premium-photo/man-lab-coat-stands-with-his-arms-crossed_1100672-10007.jpg",
    name: "Dr. Layla Yusuf",
    icon: <FaBrain className="text-green-600 text-lg" />,
experience: "Dr. Layla Yusuf is a compassionate therapist with 7+ years of experience helping patients manage depression using CBT and supportive therapy.",  },
  {
    img: "https://image.shutterstock.com/image-photo/mental-health-care-therapy-concept-260nw-2452680387.jpg",
    title: "Anxiety",
    description: "Excessive worry and fear disrupting daily life.",
    imgs: "https://img.freepik.com/premium-photo/african-american-physical-therapist-female-patient-rehabilitation-center_259150-83053.jpg",
    name: "Dr. Amir Khalid",
    icon: <FaRegSmile className="text-green-600 text-lg" />,
    experience: "Dr. Amir Khalid has over 6 years of experience treating anxiety and panic disorders using evidence-based therapeutic approaches and mindfulness.",
  },
  {
    img: "https://img.freepik.com/free-photo/authentic-scene-young-person-undergoing-psychological-therapy_23-2150161976.jpg",
    title: "PTSD",
    description: "Triggered by terrifying events like war or abuse.",
    imgs: "https://images.pexels.com/photos/1853102/pexels-photo-1853102.jpeg",
    name: "Dr. Samira Abdi",
    icon: <FaStethoscope className="text-green-600 text-lg" />,
    experience: "Dr. Samira Abdi is a trauma specialist with 8+ years of experience in PTSD recovery using EMDR and trauma-informed therapy.",
  },
  {
    img: "https://image.shutterstock.com/image-photo/group-therapy-brings-people-together-260nw-1962672082.jpg",
    title: "Social Anxiety",
    description: "Fear of social judgment causing avoidance.",
    imgs: "https://images.pexels.com/photos/2770965/pexels-photo-2770965.jpeg",
    name: "Dr. Roda Hussein",
    icon: <FaRegSmile className="text-green-600 text-lg" />,
    experience: "Dr. Roda Hussein has helped over 100+ clients rebuild their confidence through behavioral therapy and exposure techniques.",
  },
  {
    img: "https://image.shutterstock.com/image-photo/therapy-session-serious-family-couple-260nw-2488148277.jpg",
    title: "Family Therapy",
    description: "Improve relationships and resolve family issues.",
    imgs: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    name: "Dr. Mohamud",
    icon: <FaBrain className="text-green-600 text-lg" />,
    experience: "Dr. Lul Mohamud is a family therapist with 7+ years of experience resolving relationship conflicts using systemic and communication-focused approaches.",
  },
  {
    img: "https://img.freepik.com/free-photo/young-woman-during-her-therapy-session_23-2150161973.jpg",
    title: "Self-Esteem",
    description: "Building confidence and personal growth.",
    imgs: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    name: "Dr . Shire",
    icon: <FaRegSmile className="text-green-600 text-lg" />,
    experience: "Dr. Zahra Shir supports clients facing identity crises and self-acceptance struggles, bringing 6+ years of experience in existential therapy.",
  },
];
export default function Service() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  if (selected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-gray-200">
          <button
            onClick={() => setSelected(null)}
            className="block px-6 py-3 text-green-600 hover:underline focus:outline-none"
          >
            ← Back to Services
          </button>

          <div className="flex flex-col md:flex-row">
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full md:w-1/2 h-80 object-cover rounded-l-3xl"
            />

            <div className="p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-4xl font-extrabold text-green-900 mb-4">{selected.title}</h3>
                <p className="text-gray-700 leading-relaxed">{selected.description}</p>

                <div className="flex items-center gap-5 mt-8">
                  <img
                    src={selected.imgs}
                    alt={selected.name}
                    className="w-14 h-14 rounded-full border-2 border-green-600"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{selected.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{selected.experience}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  navigate('/counseling', {
                    state: { service: selected.title },
                  })
                }
                className="mt-10 self-start px-8 py-3 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition"
              >
                Counseling Options
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-16 text-[#0B141B] font-sans">
      <h2 className="text-4xl font-bold text-center mb-4 text-green-800">Explore Our Services</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Personalized therapy options to support your emotional and mental well-being.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onClick={() => setSelected(service)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl border border-green-100 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img src={service.img} alt={service.title} className="h-48 w-full object-cover rounded-t-2xl" />
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-green-800">{service.title}</h4>
                {service.icon}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
              <div className="flex justify-between items-center pt-3 border-t">
                <div className="flex items-center gap-3">
                  <img src={service.imgs} className="w-10 h-10 rounded-full" alt="doctor" />
                  <div>
                    <p className="text-sm font-medium">{service.name}</p>
                    <div className="flex text-yellow-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-green-700 flex items-center gap-1">
                  <FaMapMarkerAlt /> Somalia
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
