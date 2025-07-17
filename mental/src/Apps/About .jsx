import React, { useEffect, useState } from "react";
import {
  FaGlobe,
  FaUserInjured,
  FaUserMd,
  FaSmile,
  FaBrain,
  FaLinkedin,
  FaGithub,
  FaCrown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import confetti from "canvas-confetti";
import MentalHealthHero from "./MentalHealthText";
// Hook for count-up animation
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const textSectionVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const icons = [
  { icon: <FaUserMd className="w-10 h-10" />, label: "Expert Care" },
  { icon: <FaSmile className="w-10 h-10" />, label: "Emotional Support" },
  { icon: <FaUserInjured className="w-10 h-10" />, label: "Patient Focus" },
  { icon: <FaBrain className="w-10 h-10" />, label: "Mind Wellness" },
];

const teamMembers = [
  {
    name: "Mandeeq Ali",
    role: "Team Leader",
    photo: "https://i.pinimg.com/736x/4d/11/4c/4d114ceecac7b3851be1a698eca11a3a.jpg",
    bio: "An experienced mental health advocate and team coordinator.",
    linkedin: "https://linkedin.com/in/mandeeq",
    github: "https://github.com/mandeeq",
  },
  {
    name: "Sumaya Mohamed",
    role: "Participant",
    photo: "https://images.pexels.com/photos/8525735/pexels-photo-8525735.jpeg",
    bio: "Dedicated to supporting young adults through mental health education.",
    linkedin: "https://linkedin.com/in/sumaya",
    github: "",
  },
  {
    name: "Fatima Qasim",
    role: "Participant",
    photo: "https://images.pexels.com/photos/11156567/pexels-photo-11156567.jpeg",
    bio: "Community outreach specialist focused on women's mental health.",
    linkedin: "",
    github: "https://github.com/fatimaqasim",
  },
  {
    name: "Deeqa Hussein",
    role: "Participant",
    photo: "https://images.pexels.com/photos/15381197/pexels-photo-15381197.jpeg",
    bio: "Organizes wellness events and peer support groups.",
    linkedin: "",
    github: "",
  },
  {
    name: "Najma Muhudiin",
    role: "Participant",
    photo: "https://images.pexels.com/photos/8911439/pexels-photo-8911439.jpeg",
    bio: "Specialist in digital wellness and therapy tech tools.",
    linkedin: "https://linkedin.com/in/najmamuhudiin",
    github: "",
  },
];

function TeamModal({ member, onClose }) {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.4 },
    });
  }, []);

  if (!member) return null;
  return (
    <div className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
          aria-label="Close modal"
        >
          ✖
        </button>
        <img
          src={member.photo}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-500"
        />
        <h2 className="text-xl font-bold text-center text-green-800 flex items-center justify-center gap-2">
          {member.name}
          {member.role === "Team Leader" && (
            <FaCrown className="text-yellow-500 animate-bounce" />
          )}
        </h2>
        <p className="text-sm text-center text-gray-600 mb-2">{member.role}</p>
        <p className="text-gray-700 text-sm text-center mb-4">{member.bio}</p>
        <div className="flex justify-center gap-4">
          {member.linkedin && (
            <Tippy content="LinkedIn">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="text-blue-600 text-xl hover:text-blue-800" />
              </a>
            </Tippy>
          )}
          {member.github && (
            <Tippy content="GitHub">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub className="text-gray-700 text-xl hover:text-black" />
              </a>
            </Tippy>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const patientsServed = useCountUp(1700);
  const professionals = useCountUp(800);
  const satisfaction = useCountUp(98);

  const filteredMembers =
    filter === "All" ? teamMembers : teamMembers.filter((m) => m.role === filter);

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "role") return a.role.localeCompare(b.role);
    return 0;
  });

  return (
    <div className="min-h-screen px-4 py-8 ">
      {/* Hero Section */}
      <MentalHealthHero />
      <div className="text-center mt-14 mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-900 mb-3">
          Talking to someone is a brave first step to healing. You're not alone.
        </h1>
        <p className="text-lg text-green-700 font-semibold">
          Speak Up, Don’t Hide
          <br />
          La hadalka qof kale waa tallaabada koowaad ee bogsashada. Ma tihid kaligaa.
        </p>
      </div>
    {/* Our Impact Section */}
      <div className="flex flex-col gap-20 md:flex-row md:space-x-10 mb-16 max-w-5xl mx-auto p-8">
        <div className="md:w-2/3 text-gray-600 font-bold text-base leading-relaxed space-y-5">
          <p>
            Welcome to <span className="text-green-800 font-bold">MindCare</span>, your trusted destination for mental health support.
          </p>
          <p>
            We offer services like counseling and therapy, using <span className="font-medium text-green-600">evidence-based methods</span>.
          </p>
          <p>
            At MindCare, empathy and respect drive us to build <span className="font-semibold text-green-700">lasting resilience</span>.
          </p>
          <p>
            Your well-being is our mission — we listen, understand, and guide you toward hope and healing.
          </p>
        </div>

        <div className="md:w-1/3 mt-10 md:mt-0 p-6 rounded-2xl border border-green-100 shadow-md space-y-6 max-h-80 overflow-auto bg-white">
          <h3 className="text-xl font-semibold text-green-800 text-center">
            Our Impact
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <FaUserInjured className="text-green-600 text-2xl" />
              <div>
                <div className="text-xl font-bold text-green-900">
                  {patientsServed.toLocaleString()}+
                </div>
                <div className="text-gray-600">Patients Served</div>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <FaUserMd className="text-green-600 text-2xl" />
              <div>
                <div className="text-xl font-bold text-green-900">
                  {professionals}+
                </div>
                <div className="text-gray-600">Professionals</div>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <FaSmile className="text-green-600 text-2xl" />
              <div>
                <div className="text-xl font-bold text-green-900">
                  {satisfaction}%
                </div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* About Us Section */}
      <div className="text-center mb-16 bg-green-200/30 py-10 rounded-2xl shadow-md max-w-5xl mx-auto px-4">
        <div className="flex justify-center font-semibold mb-4">
          <FaGlobe className="text-green-700 w-12 h-12" />
        </div>
        <h2 className="text-5xl font-bold text-green-800 mb-6">About Us</h2>
        <p className="text-gray-500 font-bold text-lg max-w-3xl mx-auto leading-relaxed">
          Mental health is an essential part of our overall well-being, affecting how we think, feel, and act every day.
          At MindCare, we understand the importance of emotional resilience and psychological balance in facing life’s challenges.
          Our dedicated team works tirelessly to provide compassionate support through counseling, therapy, and education tailored to individual needs.
          We believe mental wellness fosters stronger communities and healthier relationships.
          Stigma around mental health often prevents people from seeking help — we are committed to breaking these barriers with awareness and empathy.
          Through evidence-based methods and personalized care, we empower individuals to regain control, find hope, and achieve lasting recovery.
          Your mental health journey is unique, and at MindCare, you are never alone in this process.
          We offer safe, confidential, and professional services to nurture your mind and spirit.
          Together, we build resilience, reduce anxiety and depression, and promote positive mental well-being.
          Join us in creating a world where mental health is prioritized, understood, and celebrated.
        </p>
      </div>
      {/* Mental Health Matters Section */}
      <div className="mb-20 max-w-5xl mx-auto">
        <div className="flex justify-center font-semibold mb-4">
          <FaBrain className="text-green-700 w-16 h-16" />
        </div>
        <h2 className="text-4xl font-bold text-green-800 mb-2 text-center">
          Mental Health Matters
        </h2>
        <p className="text-gray-500 font-bold text-lg text-center max-w-3xl mx-auto mb-10">
          Supporting minds and empowering lives through compassion, knowledge, and dedicated care.
        </p>

        <motion.div
          className="flex items-start gap-8 bg-green-50 p-8 rounded-xl shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Icons column */}
          <div className="flex flex-col space-y-6">
            {icons.map(({ icon, label }, i) => (
              <motion.div
                key={label}
                custom={i}
                variants={iconVariants}
                className="flex flex-col items-center text-green-700"
              >
                {icon}
                <span className="text-xs mt-2 font-semibold">{label}</span>
              </motion.div>
            ))}
          </div>

          {/* Text column */}
          <motion.div
            className="text-gray-700 font-semibold text-lg leading-relaxed max-w-3xl"
            variants={textSectionVariants}
          >
            <p>
              Mental health is a vital part of our overall wellness, shaping how we think, feel, and act every day. At MindCare, we believe in nurturing the whole person, fostering environments where healing and growth can flourish. Our dedicated team is committed to providing compassionate care that empowers individuals to overcome challenges and build resilience. Through education, support, and evidence-based practices, we aim to break down stigma and open doors to meaningful conversations. We recognize the unique journey of each individual and strive to tailor our services to meet diverse needs. Together, we create a safe space for self-discovery and empowerment. Our mission extends beyond treatment — it’s about building lasting well-being and hope for a brighter future. Join us in championing mental wellness as a community priority.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 mb-4">Our Dedicated Team</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Passionate professionals building mental health awareness and support solutions together.
        </p>

        {/* Filter & Sort */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {["All", "Team Leader", "Participant"].map((role) => (
            <motion.button
              key={role}
              onClick={() => setFilter(role)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition shadow-sm ${
                filter === role
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-800 border border-green-200"
              }`}
            >
              {role}
            </motion.button>
          ))}
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 text-sm border border-green-200 rounded-full text-green-800"
            aria-label="Sort team members"
          >
            <option value="name">Sort: Name</option>
            <option value="role">Sort: Role</option>
          </select>
        </div>

        {/* Team Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-5"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {sortedMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer w-[220px] h-[300px] rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-green-100 shadow-md hover:shadow-green-300 hover:scale-105 transition duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelectedMember(member);
              }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-[180px] object-cover"
              />
              <div className="px-3 py-2 text-center flex flex-col justify-between h-[120px]">
                <h4 className="text-md font-semibold text-green-900 flex items-center justify-center gap-1">
                  {member.name}
                  {member.role === "Team Leader" && (
                    <FaCrown className="text-yellow-500" />
                  )}
                </h4>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fun Fact Section */}
      <div className="mt-20 text-center py-10 bg-gradient-to-br from-green-200 via-white to-green-100 rounded-xl shadow-inner max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-green-700 mb-3">Did You Know? 🌿</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Laughter boosts your mood, strengthens your immune system, and reduces stress. Even a simple smile can trigger joy hormones in your brain!
        </p>
      </div>

      {/* Team Modal */}
      <AnimatePresence>
        {selectedMember && (
          <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
