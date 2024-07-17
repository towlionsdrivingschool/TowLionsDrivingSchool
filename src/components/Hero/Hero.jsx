import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 " id="home">
      <div className="container min-h-[100vh] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2  place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt="two lions driving school"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Welcome To
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Two Lions Driving School
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              !We are dedicated to providing top-notch driving education with a
              focus on safety, skill, and confidence. Whether you're a beginner
              or looking to brush up on your skills, we have the right course
              for you.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              <a
                href="https://wa.me/+918848481408"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                Book Now
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/+918848481408"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Hero;
