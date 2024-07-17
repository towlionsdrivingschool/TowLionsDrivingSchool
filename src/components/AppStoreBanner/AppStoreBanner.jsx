import React from "react";
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";
import pattern from "../../assets/website/pattern.jpeg";

const AppStoreBanner = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4fc26bf9-f295-4942-8c53-45c3b009573b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="dark:bg-black  dark:text-white py-14">
      <div classNameName="container" id="contact us">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-serif"
          >
            Contact Us
          </h1>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-14 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.4252670463943!2d76.4533391!3d9.4716888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0882a0ea3d6f1b%3A0x6880e602aed19a3c!2sTwo%20Lions%20Driving%20School!5e0!3m2!1sen!2sin!4v1720416979933!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 mt-20 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">East Kunnumma, Kunnumma, Kerala 688506</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    href="mailto:twolionsdrivingschool@gmail.com"
                    className="text-red-500 leading-relaxed"
                  >
                    twolionsdrivingschool@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91 8848481408</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <form
                onSubmit={onSubmit}
                class="p-6 flex flex-col justify-center"
              >
                <h2 className=" text-lg mb-1 font-medium title-font">
                  Get In Touch
                </h2>

                <div className="relative mb-4">
                  <div class="flex flex-col">
                    <label for="name" class="hidden">
                      Full Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      placeholder=" Name"
                      required
                      class="w-100 mt-2 py-3 px-3 rounded-lg  dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-600 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="relative mb-4">
                  <div class="flex flex-col mt-2">
                    <label for="email" class="hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-600 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="relative mb-4">
                  <div class="flex flex-col mt-2">
                    <label for="tel" class="hidden">
                      Number
                    </label>
                    <input
                      type="number"
                      name="tel"
                      id="tel"
                      placeholder="Mobile Number"
                      required
                      class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-600 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="md:w-32 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-lg mt-3"
                >
                  Submit
                </button>
              </form>
              {/* <button className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black">
                Button
              </button> */}
              <span className="text-xs text-gray-500 mt-3">{result}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppStoreBanner;
