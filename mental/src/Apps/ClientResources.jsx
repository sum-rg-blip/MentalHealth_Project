import React from "react";
import { motion } from "framer-motion";
import SideBar from "../Component/SideBar";

const resources = [
  {
    id: 1,
    title: "Managing Stress Effectively",
    description: "Tips and techniques to help you cope with and manage stress in daily life.",
    type: "PDF",
    link: "/img/resources/stress-guide.pdf",
  },
  {
    id: 2,
    title: "5‑Minute Relaxation Meditation",
    description: "A calm audio session to help you relax and reset your mind.",
    type: "Audio",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Worksheet: Challenging Negative Thoughts",
    description: "A guided worksheet to help identify and reframe negative thinking patterns.",
    type: "Document",
    link: "img/resources/challenging_your_negative_thinking_en-us-2.pdf",
  },
  {
    id: 4,
    title: "Audio: Nourishing Your Mental Health",
    description: "An encouraging message to help you regain emotional and mental energy.",
    type: "Audio",
    link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 5,
    title: "E-Book: Introduction to Psychology",
    description: "A simple guide to understanding human emotions, thoughts, and behaviors.",
    type: "Book",
    link: "img/resources/psy110-80_nemeroff.pdf",
  },
  {
    id: 6,
    title: "Soothing Medical Background Music",
    description: "Gentle background music often used in therapy and wellness clinics.",
    type: "Audio",
    link: "img/resources/medical-background-music-doctor-clinic-health-pharmacy-intro-theme-292495.mp3",
  },
];

const icons = {
  PDF: "📄",
  Audio: "🎧",
  Document: "📄",
  Book: "📘",
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

function ClientResources() {
  return (
    <div className="flex h-screen ">
      <SideBar />
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto text-green-900">
          <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">
            📚 Mental Health Resources
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, i) => (
              <motion.div
                key={res.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ scale: 1.04 }}
                className="p-6 backdrop-blur-sm bg-white/90 border border-green-200 shadow-xl rounded-2xl flex flex-col justify-between transition duration-300 hover:shadow-2xl"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <span>{icons[res.type] || "📁"}</span> {res.title}
                  </h2>
                  <p className="text-sm mb-4 line-clamp-4">{res.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-4">
                    {res.type}
                  </span>
                </div>

                {res.type === "Audio" ? (
                  <div className="mt-auto">
                    <audio controls className="w-full rounded-md bg-green-100 mb-3">
                      <source src={res.link} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <a
                      href={res.link}
                      download
                      className="w-full block text-center py-2 rounded-md font-semibold bg-green-200 hover:bg-green-300 transition text-green-900"
                    >
                      ⬇️ Download Audio
                    </a>
                  </div>
                ) : (
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-md font-semibold bg-green-200 hover:bg-green-300 transition text-green-900"
                    >
                      👁️ View
                    </a>
                    <a
                      href={res.link}
                      download
                      className="flex-1 text-center py-2 rounded-md font-semibold bg-green-200 hover:bg-green-300 transition text-green-900"
                    >
                      ⬇️ Download
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ClientResources;
