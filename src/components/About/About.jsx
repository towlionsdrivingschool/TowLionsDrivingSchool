import React from "react";
import CarPng from "../../assets/car1.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300" id="about">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt="two lions driving school"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us 
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Two Lions Driving School, where safety meets
                excellence in driver education. Our mission is to equip students
                with the knowledge, skills, and confidence they need to become
                responsible and proficient drivers.
              </p>

              <button data-aos="fade-up" className="button-outline">
              <a
                href="https://wa.me/+918848481408"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Book Now
              </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
