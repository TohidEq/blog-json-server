import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="page">
      <h2 className="text-center">About us</h2>

      <p className="paragraph max-w-md mx-auto py-3 pt-5 px-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus rerum
        amet nostrum dicta ab quod veritatis facere velit voluptatem nisi.
        Officia blanditiis nihil ratione? Nostrum, similique autem. Nobis, eum
        delectus.
        <div className="about-links flex justify-center py-5 gap-4">
          <Link to="/" className="block text-center pt-2  w-8 h-8 ">
            <FaTwitter className="w-full h-full " />
          </Link>

          <Link to="/" className="block text-center pt-2  w-8 h-8 ">
            <FaInstagram className="w-full h-full " />
          </Link>

          <Link to="/" className="block text-center pt-2  w-8 h-8 ">
            <FaFacebook className="w-full h-full " />
          </Link>
          <Link to="/" className="block text-center pt-2  w-8 h-8 ">
            <FaTelegram className="w-full h-full " />
          </Link>
        </div>
      </p>
    </div>
  );
}

export default AboutUs;
