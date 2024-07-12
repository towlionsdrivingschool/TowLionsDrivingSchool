import React from "react";

import { GiScooter } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
const Contact = () => {
  const skillsDataData = [
    {
      name1: " Gearless Motorcycle Training",
      icon1: (
        <GiScooter className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link1: "#",
      description1:
        "Perfect for beginners who want to learn how to ride gearless scooters or motorcycles. This course covers basic riding skills, balance, and maneuvering techniques to ensure you feel comfortable and safe on the road.",
      aosDelay1: "0",
    },
    {
      name1: "Manual Car Training",
      icon1: (
        <FaCarAlt className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link1: "#",
      description1:
        "Specifically designed for those who want to master driving a manual transmission vehicle. This course covers clutch control, gear shifting techniques, and handling various driving situations in a manual car. Gain confidence and skill with our expert instruction.",
      aosDelay1: "0",
    },
    {
      name1: "Motorcycle With Gear Training",
      icon1: (
        <FaMotorcycle className="text-5xl text-primary group-hover:text-black duration-300" />
      ),
      link1: "#",
      description1:
        "Designed for those who want to learn how to ride motorcycles with gears. This course includes instruction on gear shifting, clutch control, and handling different road conditions. Our experienced instructors will help you develop the skills needed to ride confidently and safely.",
      aosDelay1: "0",
    },
  ];
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
              Our Services
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsDataData.map((skill) => (
              <div
                key={skill.name1}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay1}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon1}</div>
                <h1 className="text-2xl font-bold">{skill.name1}</h1>
                <p>{skill.description1}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
