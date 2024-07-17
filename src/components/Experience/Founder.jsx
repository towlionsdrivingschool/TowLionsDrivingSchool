import React from "react";
import founder from "../../assets/Founter.jpg";
import founderMain from "../../assets/foundermain.jpg";
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
            <div class="grid gap-12 items-center md:grid-cols-3">
              <div class="space-y-4 text-center">
                <img
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
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
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
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
              {/* <div class="space-y-4 text-center">
                <img
                  class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                  src={founderMain}
                  alt="two lions driving school"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 class="text-2xl">Anabelle Doe</h4>
                  <span class="block text-sm text-gray-500">
                    Instructor
                   
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
