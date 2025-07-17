// Home.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CalendarIcon,
  HeartIcon,
  SparklesIcon,
  CheckCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";

export default function Home() {

  
  const icons = [
    <ShieldCheckIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
    <UserGroupIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
    <GlobeAltIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
    <CalendarIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
    <HeartIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
    <SparklesIcon className="h-10 w-10 text-green-600 mb-3 animate-pop-in" />,
  ];

  const [flipped, setFlipped] = useState(Array(6).fill(false));
  const timeoutRefs = useRef(Array(6).fill(null));

  function handleFlip(index, value) {
    clearTimeout(timeoutRefs.current[index]);
    if (value) {
      timeoutRefs.current[index] = setTimeout(() => {
        setFlipped((prev) => {
          const newFlipped = [...prev];
          newFlipped[index] = true;
          return newFlipped;
        });
      }, 300);
    } else {
      setFlipped((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = false;
        return newFlipped;
      });
    }
  }

  function handleKeyDown(index, e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = !newFlipped[index];
        return newFlipped;
      });
    }
  }

  const cards = [
    {
      title: "Safe & Secure Space",
      desc:
        "We provide a deeply private, judgment-free environment where you can truly open up and feel safe.",
      quote: "Healing begins when you feel seen, heard, and held — without judgment.",
    },
    {
      title: "Expert, Caring Therapists",
      desc:
        "Our licensed counselors are experienced in a wide range of specialties and care deeply about your healing.",
      quote: "Empathy is the most powerful form of connection — and we lead with it.",
    },
    {
      title: "Whole-Person Approach",
      desc:
        "We go beyond symptoms. Our holistic model supports your mental, emotional, and spiritual growth.",
      quote: "The journey inward is the beginning of every great transformation.",
    },
    {
      title: "Flexible Support System",
      desc:
        "Whether virtual or in-person, our sessions adapt to your lifestyle and schedule.",
      quote:
        "Healing doesn’t have to wait for the perfect time — it starts when you’re ready.",
    },
    {
      title: "Compassionate Care",
      desc:
        "Our team treats every individual with kindness, respect, and unwavering support throughout your journey.",
      quote:
        "Compassion is the heart of healing — we walk beside you every step of the way.",
    },
    {
      title: "Transformative Results",
      desc:
        "Our therapy fosters lasting change, helping you unlock your full potential and live your best life.",
      quote:
        "Transformation is possible when courage meets guidance and support.",
    },
  ];

  const journeySteps = [
    {
      title: "Reach Out",
      desc: "Take the courageous first step and contact us to start your path to healing.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Personalized Care",
      desc: "We'll tailor your therapy plan specifically to your unique needs and goals.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Growth & Insight",
      desc: "Experience transformational sessions that empower emotional and mental growth.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Thrive",
      desc: "Step into your best self with ongoing support and tools to sustain your wellness.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Maintain",
      desc: "Keep up your progress with personalized strategies and check-ins.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Flourish",
      desc: "Live fully and confidently, empowered by your healing journey.",
      icon: <CheckCircleIcon className="h-10 w-10 text-green-600" />,
    },
  ];

  function playHoverSound() {
    const audio = new Audio("/sound/click.mp3");
    audio.volume = 0.2;
    audio.play().catch(() => {});
  }

  return (
    <div className=" text-[#0B141B] font-sans min-h-screen relative">
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative w-full h-[600px] bg-cover bg-center flex items-center px-6 md:px-12"
        style={{ backgroundImage: "url('/img/sawir2.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#047857cc] to-transparent z-10" />
        <div className="relative z-20 max-w-xl text-white space-y-6">
          <p className="italic text-lg opacity-80 tracking-wide max-w-md">
            “Healing is not a destination, but a journey of growth and hope.”
          </p>
          <h1 className="text-5xl font-extrabold leading-tight max-w-md">
            Counseling & Therapy Services
          </h1>
          <p className="text-lg max-w-md">
            Compassionate care tailored for your unique healing journey.
          </p>
          <div className="flex gap-4 mt-6">
            <Link to="/about">
            <button className="bg-white text-[#047857] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Learn More
            </button></Link>
            <Link to="/service" tabIndex={0}>
              <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#047857] transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Book a Session
              </button>
            </Link>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>
      {/* YOUR JOURNEY SECTION - glowing vertical section */}
      <section
        id="journey"
        className="relative  py-28 overflow-hidden px-6 max-w-7xl mx-auto rounded-xl shadow-lg"
      >
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-green-300/60 via-transparent to-transparent rounded-full filter blur-3xl animate-fade-in-slow pointer-events-none" />
        <div className="absolute bottom-20 right-0 w-[300px] h-[300px] bg-gradient-to-l from-teal-300/50 via-transparent to-transparent rounded-full filter blur-2xl animate-pulse-slower pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
          <div className="space-y-10 animate-fade-in-up">
            <h2 className="text-5xl font-extrabold text-green-900 max-w-lg leading-tight relative inline-block">
              Your Journey to Inner Peace Starts Here
              <span className="block h-1 w-28 mt-3 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-green-800 max-w-md leading-relaxed tracking-wide font-light">
              Whether you’re navigating anxiety, relationship challenges, or simply seeking support, our compassionate therapists are ready to guide you gently and skillfully toward healing and growth.
            </p>

            <ul className="space-y-6 text-green-900">
              {["A safe and confidential environment for you to express freely", "Therapy personalized for your unique needs and goals", "Flexible virtual and in-person sessions tailored to your schedule", "Tools and strategies that empower lasting positive change"].map((point, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-semibold">
                  <CheckCircleIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/service" tabIndex={0}>
              <button className="mt-8 bg-gradient-to-r from-green-600 to-teal-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 transform animate-pulse-slow cursor-pointer">
                Start Your Healing Journey
              </button>
            </Link>
          </div>

          <div className="animate-fade-in-up max-w-md max-h-[600px] overflow-y-auto pr-6">
            <ol className="relative border-l-4 border-green-300 pl-8 space-y-10">
              {journeySteps.map(({ icon, title, desc }, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-10 top-1 bg-white rounded-full p-1 shadow-md border border-green-300">
                    {icon}
                  </span>
                  <h3 className="text-xl font-semibold text-green-900 mb-1">{title}</h3>
                  <p className="text-green-800 leading-relaxed">{desc}</p>
                  {idx !== journeySteps.length - 1 && (
                    <span className="absolute left-0 top-10 w-3 h-3 bg-green-400 rounded-full shadow-md animate-pulse"></span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        id="why-choose-us"
        className="py-28 relative overflow-hidden animate-fade-in-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-20 text-green-900 animate-slide-up cursor-default select-none">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {cards.map((card, i) => (
              <div
                key={i}
                tabIndex={0}
                role="button"
                aria-pressed={flipped[i]}
                onMouseEnter={() => handleFlip(i, true)}
                onMouseLeave={() => handleFlip(i, false)}
                onFocus={() => handleFlip(i, true)}
                onBlur={() => handleFlip(i, false)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className={`relative w-72 sm:w-80 h-80 group perspective cursor-pointer transition-shadow duration-300
                  ${flipped[i] ? "shadow-green-400/70 shadow-lg" : "shadow-md hover:shadow-green-300/50"}
                  ${flipped[i] ? "animate-pulse" : "hover:animate-pulse"}`}
                style={{ willChange: "transform" }}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${flipped[i] ? "rotate-y-180" : ""}`}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full rounded-3xl bg-white/20 backdrop-blur-xl shadow-xl border border-white/40 p-6 backface-hidden flex flex-col justify-center items-center text-center hover:cursor-pointer"
                    style={{ userSelect: "none" }}
                  >
                    {React.cloneElement(icons[i], {
                      className: "h-10 w-10 text-green-600 mb-3 animate-pop-in",
                    })}
                    <div className="h-2 w-full rounded-full bg-gradient-to-r from-green-400 to-emerald-600 mb-3" />
                    <h3 className="text-xl font-bold text-green-900 mb-3 animate-pop-in">
                      {card.title}
                    </h3>
                    <p className="text-gray-800 text-sm mb-6">{card.desc}</p>
                    <Link to="/getstarted" tabIndex={-1}>
                      <button
                        onMouseEnter={playHoverSound}
                        className="mt-auto text-xs bg-green-700 text-white px-4 py-2 rounded-full hover:scale-110 hover:bg-green-800 transition-transform duration-300 animate-pulse cursor-pointer"
                      >
                        Start Now
                      </button>
                    </Link>
                    
                  </div>
                  {/* Back */}
                  <div
                    className="absolute w-full h-full rotate-y-180 rounded-3xl bg-gradient-to-br from-emerald-700 to-green-600 text-white p-6 backface-hidden flex items-center justify-center text-center shadow-xl border border-white/20 select-none"
                    style={{ userSelect: "none" }}
                  >
                    <p className="italic text-lg leading-relaxed font-medium">
                      “{card.quote}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-72 h-72 bg-gradient-to-tr from-green-300 to-emerald-400 rounded-full blur-3xl opacity-30 animate-bounce-slow top-10 -left-24 z-0" />
        <div className="absolute w-60 h-60 bg-gradient-to-br from-teal-300 to-green-400 rounded-full blur-2xl opacity-20 animate-pulse-slow bottom-10 -right-20 z-0" />
        <div className="absolute w-48 h-48 bg-gradient-to-bl from-green-200 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse-slower top-40 left-1/2 -translate-x-1/2 z-0" />
        <div className="absolute w-52 h-52 bg-gradient-to-tr from-emerald-300 to-green-500 rounded-full blur-3xl opacity-20 animate-bounce-slower bottom-20 left-10 z-0" />
      </section>

      {/* WHAT OUR CLIENTS SAY SECTION */}
      <section className="py-24 px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-center text-green-900 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-green-50 p-6 rounded-xl shadow-md transition-transform hover:scale-105 duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://images.pexels.com/photos/8525735/pexels-photo-8525735.jpeg" className="w-12 h-12 rounded-full" alt="Amina" />
              <p className="text-green-800 font-semibold">Amina</p>
            </div>
            <p className="italic text-gray-700">
              “I never felt so safe opening up. My therapist helped me rediscover my strength.”
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-md transition-transform hover:scale-105 duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://images.pexels.com/photos/8367238/pexels-photo-8367238.jpeg" className="w-12 h-12 rounded-full" alt="Yusuf" />
              <p className="text-green-800 font-semibold">Yusuf</p>
            </div>
            <p className="italic text-gray-700">
              “Flexible sessions and truly compassionate care. This team changed my life.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
