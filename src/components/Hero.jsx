import React from "react";
import instagram from "../assets/instagram.png";
import git from "../assets/git.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import hero2 from "../assets/hero2.png";
import hii from "../assets/hii.png";
import { DownloadIcon, Mail, Calendar } from "lucide-react";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icons: instagram, alt: "Instagram" },
    { icons: facebook, alt: "facebook" },
    { icons: git, alt: "git" },
    { icons: twitter, alt: "twitter" },
  ];

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-200",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    buttonSecondary:
      "text-gray-900 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-20 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14">
          
          {/* LEFT SIDE */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">

            <div className="flex justify-center lg:justify-start gap-4 mb-6 w-full">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icons}
                    alt={social.alt}
                    className={`w-8 h-8 object-contain ${
                      darkMode ? "" : "filter brightness-75"
                    }`}
                  />
                </a>
              ))}
            </div>

            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
            >
              Hi, I'm Ankita
            </h1>

            <p
              className={`mb-6 leading-relaxed max-w-md ${theme.textSecondary}`}
            >
              I am a passionate Front-End Developer skilled in HTML, CSS, JavaScript, React JS,
              Bootstrap, and Tailwind CSS. I enjoy building responsive and user-friendly
              web applications and continuously improving my skills through real-world projects.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-row justify-center lg:justify-start gap-2 mt-4">

              {/* View CV */}
              <a
                href="https://drive.google.com/file/d/1rWMOHnUF92sS1o3rzalAD6fTqAVts6ik/preview"
                target="_blank"
                rel="noreferrer"
              >
                <button className="inline-flex items-center text-white bg-gradient-to-r from-orange-500 to-amber-500 py-2 px-5 rounded-full text-sm font-semibold">
                  <DownloadIcon className="w-4 h-4 mr-1" />
                  View CV
                </button>
              </a>

              {/* Contact Me */}
              <a href="#contact">
                <button className={`inline-flex items-center ${theme.buttonSecondary} py-2 px-5 rounded-full text-sm font-semibold`}>
                  <Mail className="w-4 h-4 mr-1" />
                  Contact Me
                </button>
              </a>

              {/* Schedule Meeting */}
              <a
                href="https://calendly.com/ankitayadav476076/30min"
                target="_blank"
                rel="noreferrer"
              >
                <button className={`inline-flex items-center ${theme.buttonSecondary} py-2 px-5 rounded-full text-sm font-semibold`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule
                </button>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero2}
                  alt="Hero"
                  className="w-full h-auto object-cover"
                />
              </div>

              <img
                src={hii}
                alt="Hi Icon"
                className="absolute top-4 left-16 w-16 h-16 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>

          <div className={`absolute -top-20 -left-20 w-40 h-40 ${theme.decorativeCircle} rounded-full blur-3xl hidden sm:block`}></div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
