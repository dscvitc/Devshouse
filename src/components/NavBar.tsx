"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import logo from "/public/gdsc logo text.svg";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <nav
      className="w-full px-5 gap-3 h-20 shadow fixed z-[100] flex items-center justify-between  md:flex md:justify-between md:items-center"
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
    >
      <span className="cursor-pointer md:w-60 md-ml-5  m m-3 w-64 flex items-center">
        <Link href="/">
          <Image src={logo} alt="gdsc logo" />
        </Link>
      </span>

      <div
        className="text-5xl cursor-pointer mx-2 md:hidden flex h-10 w-7 items-center stroke-white"
        onClick={onClickHandler}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#FFFFFF"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>

      <ul
        className={`md:flex md:items-center -z-50 bg-black  md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  mt-0 transition-all ease-in duration-500 ${
          !navbar && "opacity-0 top-[-400px]"
        } ${navbar && "opacity-100 top-20"}`}
      >
        <li className="mx-4 mb-6 md:my-0">
          <a href="#" className="text-white">
            About
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#themes" className="text-white">
            Themes
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#timeline" className="text-white">
            Timeline
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#team" className="text-white">
            Team
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#sponsor" className="text-white">
            Sponsors
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#faq" className="text-white">
            FAQs
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#contact" className="text-white">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
