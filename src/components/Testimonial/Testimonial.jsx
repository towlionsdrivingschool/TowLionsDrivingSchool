import React from "react";
import Adithyan from "../../assets/Adithyan.png"
const testimonialData = [
  {
    name: "Adithyan Pb",
    image: Adithyan,
    description:
      "Learning to drive at Tow Lion driving school was an excellent experience. The instructors were patient and knowledgeable. I feel confident and prepared to drive on my own..",
    aosDelay: "0",
  },
  {
    name: "Jibin",
    image: "",
    description:
      "Two Lions Driving School I made learning to drive a . The instructors were patient and knowledgeable. Highly recommend.",
    aosDelay: "300",
  },
  {
    name: "Sabir",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src={skill.image}
                   alt="two lions driving school"
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
