import React from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiReceiveMoney } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiTestcafe } from "react-icons/si";
const skillsData = [
  {
    name: "Safety First",
    icon: (
      <AiOutlineSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "We prioritize safety in all our lessons, teaching you how to handle various driving situations responsibly.",
    aosDelay: "0",
  },
  {
    name: "Affordable Rates",
    icon: (
      <GiReceiveMoney className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Quality driving instruction should be accessible to everyone, which is why we offer competitive pricing and package deals.",
    aosDelay: "500",
  },
  {
    name: "Flexible Scheduling",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "We offer a variety of lesson times to fit your busy schedule, including evenings and weekends.",
    aosDelay: "1000",
  },
  {
    name: "Professional Instructors",
    icon: (
      <FaChalkboardTeacher className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      " we take pride in our team of professional instructors who are dedicated to providing the highest quality driver education. Our instructors are.",
    aosDelay: "1000",
  },
  {
    name: "Pick And Drop At Your Doorstep",
    icon: (
      <FaMapMarkedAlt className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Our instructors pick you up and drop you off, fitting lessons into your busy schedule for maximum convenience.",
    aosDelay: "1000",
  },
  {
    name: "8 and H Test Practice",
    icon: (
      <SiTestcafe className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Prepare for the essential 8 and H driving tests with our specialized training sessions. Our practice sessions will help you master the skills and techniques needed to pass confidently and successfully.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <div
        className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center"
        id="our Services"
      >
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
