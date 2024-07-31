import React from "react";

import car1 from "../../assets/officeimage.jpg";
import car2 from "../../assets/office.jpg";
import car3 from "../../assets/groundImage.jpg";
import car4 from "../../assets/Carimage.jpg";
// import car5 from "../../assets/SchoolCar.jpg";

import car6 from "../../assets/ofiiceImage1.jpg";
const CarList = () => {
  return (
    <div>
      <div className="container " id="gallery">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            Gallery
          </h1>
        </div>

        {/* Car listing */}
        {/* <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 "></div> */}
        <section class="text-gray-400mt-20 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="object-cover rounded-2xl  hover:scale-110 transition duration-300 ease-in-out"
                    src={car1}
                  />
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="object-cover rounded-2xl  hover:scale-110 transition duration-300 ease-in-out"
                    src={car2}
                  />
                </div>
              </div>

              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="object-cover rounded-2xl  hover:scale-110 transition duration-300 ease-in-out"
                    src={car6}
                  />
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="object-cover rounded-2xl h-[330px]  hover:scale-110 transition duration-300 ease-in-out"
                    src={car3}
                  />
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="gallery"
                    class="object-cover rounded-2xl h-[330px]  hover:scale-110 transition duration-300 ease-in-out"
                    src={car4}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarList;
