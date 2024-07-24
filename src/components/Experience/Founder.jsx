import React from "react";
import founder from "../../assets/about.jpg";
import founderMain from "../../assets/foundermain.jpg";
import Instuctor from "../../assets/instructotr.jpg";
const Founder = () => {
  return (
    <div className="dark:bg-black  dark:text-white py-14">
      <div className="container">
        <div>
          <div class="container mx-auto px-6 md:px-12 xl:px-32">
            <div class="mb-16 text-center">
              <h1
                data-aos="fade-up"
                className="text-3xl font-semibold text-center sm:text-4xl font-serif"
              >
                Our Team
              </h1>
            </div>
            <div class="grid gap-12 items-center md:grid-cols-3 ">
              <div class="space-y-4 text-center ">
                <img
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64  aspect-square group  hover:scale-110 transition duration-300 ease-in-out"
                  src={founderMain}
                  alt="two lions driving school"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 class="text-2xl"> Martin joseph</h4>
                  <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
              </div>
              <div class="space-y-4 text-center">
                <img
                  class=" background background--zoom background--1 w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80 hover:scale-110 transition duration-300 ease-in-out"
                  src={founder}
                  alt="two lions driving school"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 class="text-2xl"> Elsy Varghese</h4>
                  <span class="block text-sm text-gray-500">
                    {/* Chief Technical Officer */}

                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                  </span>
                </div>
              </div>
              <div class="space-y-4 text-center">
                <img
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64 hover:scale-110 transition duration-300 ease-in-out"
                  src={Instuctor}
                  alt="two lions driving school"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 class="text-2xl">Anu M Pulluvellil</h4>
                  <span class="block text-sm text-gray-500">Instructor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
