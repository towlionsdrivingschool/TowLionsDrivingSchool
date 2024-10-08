import React from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Our Services",
    link: "our Services",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-4">
          {/* company Details */}
          <div className=" py-8 px-4">
            <h1 className="sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Two Lions Driving School
            </h1>
            {/* <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p> */}
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p> Kunnumma, Kavalam, Alappuzha, Kerala 688506</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 8921905365</p>
            </div>
            {/* Social Handle */}

            <div className="flex items-center gap-3 mt-6">
              <a href="">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/share/uA1VuD8JGULbvrSt/?mibextid=qi2Omg">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className=""></div>
            <div className=""></div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span class="block  text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a class="hover:underline">Twolions Driving School/</a>
          All Rights Reserved.
        </span>
      </section>
    </div>
  );
};

export default Footer;
