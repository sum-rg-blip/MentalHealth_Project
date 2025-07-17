import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MentalHealthText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const rotatingTexts = [
    {
      image: "https://i.pinimg.com/736x/02/2b/38/022b388b2fdfac92649726993f0d4e9c.jpg",
      title: {
        en: "Mental Health Matters",
        so: "Caafimaadka Maskaxda Waa Muhiim"
      },
      description: {
        en: "Your mental health is just as important as your physical health. Take care of your mind.",
        so: "Caafimaadkaaga maskaxdu wuxuu muhiim u yahay sida jirkaaga. Daryeel maskaxdaada."
      }
    },
    {
      image: "https://media.istockphoto.com/id/1481631850/photo/counseling-child-and-psychologist-woman-talking-support-and-help-with-problem-mental-health.jpg?b=1&s=612x612&w=0&k=20&c=i1gk0UkJWFF-B8uTW8LT0-ka5_mTxPslREkFJzPCHkk=",
      title: {
        en: "Speak Up, Don’t Hide",
        so: "La Hadal, Ha Is Qarin"
      },
      description: {
        en: "Talking to someone is a brave first step to healing. You're not alone.",
        so: "La hadalka qof kale waa tallaabada koowaad ee bogsashada. Ma tihid kaligaa."
      }
    },
    {
      image:"https://i.pinimg.com/736x/1a/18/be/1a18be414ff29bc0560fab8df22f9f13.jpg",
      title: {
        en: "Self-care Is Strength",
        so: "Isdaryeelku Waa Xoog"
      },
      description: {
        en: "Taking breaks and focusing on yourself is not selfish—it's necessary.",
        so: "Nasashada iyo isdaryeelku maaha daciifnimo, waa baahi nololeed."
      }
    },
    {
      image: "https://i.pinimg.com/736x/c6/f6/3a/c6f63a7d20c9600da7cf52c17d1eb638.jpg",
      title: {
        en: "Break the Stigma",
        so: "Jebinta Cabsida Bulshada"
      },
      description: {
        en: "Mental health struggles are real. Let’s build a supportive society.",
        so: "Caafimaadka maskaxdu waa muhiim. Aan dhisno bulsho is-taageerta."
      }
    },

    {
      image: "https://i.pinimg.com/736x/39/4b/c8/394bc8ac703e200522ca7815ddf06e7c.jpg",
      title: {
        en: "Healing Takes Time",
        so: "Bogsashadu Waa Socod"
      },
      description: {
        en: "Recovery is a journey. Every step forward matters.",
        so: "Bogsashada waxay qaadataa waqti. Tallaabo walba waa horumar."
      }
    },
    {
  image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1350&q=80",
  title: { en: "Mental Health Matters", so: "Caafimaadka Maskaxda Waa Muhiim fadlan ku dadal" },
  description: {
    en: "Your mental health is just as important as your physical health. Take care of your mind.",
    so: "Caafimaadkaaga maskaxdu wuxuu muhiim u yahay sida jirkaaga. Daryeel  maskaxdaadacidna ma kala sooci karto caafimaadka maskaxda iyo jirka. Maskaxdaada daryeel."
  }
}

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="mentalhealth-hero"
      className="relative w-full h-[550px] bg-cover bg-center flex items-center px-6 md:px-12"
      style={{ backgroundImage: `url(${rotatingTexts[currentIndex].image})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#047857cc] to-transparent z-10" />

      {/* Text content */}
      <div
        className="relative z-20 max-w-xl text-white space-y-6 transition-opacity duration-500 ease-in-out"
        style={{ opacity: fade ? 1 : 0 }}
      >
        <p className="italic text-lg opacity-80 tracking-wide max-w-md">
          {rotatingTexts[currentIndex].description.en}
        </p>
        <h1 className="text-5xl font-extrabold leading-tight max-w-md">
          {rotatingTexts[currentIndex].title.en}
        </h1>
        <p className="text-lg max-w-md">
          {rotatingTexts[currentIndex].description.so}
        </p>
      
      </div>

      {/* Scroll down arrow */}
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
  );
}

export default MentalHealthText;
