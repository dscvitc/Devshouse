"use client";

import { useState } from "react";

const Tracks = () => {
  const [hoverItem, sethoverItem] = useState(0);
  const buttonStyle =
    "relative flex items-center justify-center w-[199px] h-[67px] bg-[#161616] rounded-[10px] border-2 border-white text-lg text-center text-white mx-3  hover:border-black hover:text-black hover:bg-white tracking-wide px-3 ";
  const descStyle =
    "h-auto md:h-[100px] mx-auto mt-6 text-center px-4 md:px-[10vw] font-spaceGrotesk text-white text-xl md:text-3xl font-thin tracking-wide pb-6";
  const custEmphasis = "text-white font-bold";
  const deptDesc = [
    <div key="1" className={descStyle}>
      Embark on a journey where the{" "}
      <span className={custEmphasis}>boundaries</span> of possibility are pushed
      to new horizons.
    </div>,
    <div key="11" className={descStyle}>
      Develop innovative solutions for{" "}
      <span className={custEmphasis}>financial systems,</span> optimizing
      transactions, security, and user experience.
    </div>,
    <div key="2" className={descStyle}>
      Create tech solutions that{" "}
      <span className={custEmphasis}>promote eco-friendly practices,</span>{" "}
      energy efficiency, and environmental conservation.
    </div>,
    <div key="3" className={descStyle}>
      Build tools and applications to{" "}
      <span className={custEmphasis}>enhance developers&apos; efficiency,</span>
      collaboration, and overall workflow.
    </div>,
    <div key="4" className={descStyle}>
      Explore cutting-edge{" "}
      <span className={custEmphasis}>hardware innovations,</span> from IoT
      devices to embedded systems, pushing the boundaries of technology.
    </div>,
    <div key="5" className={descStyle}>
      <span className={custEmphasis}>Foster inclusivity </span>
      through technology, addressing challenges related to accessibility,
      representation, and diverse perspectives.
    </div>,
    <div key="6" className={descStyle}>
      Collaborate on projects that embrace{" "}
      <span className={custEmphasis}> open-source principles,</span> encouraging
      transparent and collaborative development within the tech community.
    </div>,
  ];

  return (
    <div
      id="theme"
      className=" w-full flex flex-col h-[100vh]"
      style={{
        backgroundImage: `url('/assets/images/trackbg.png')`,
      }}
    >
      <div
        style={{
          backgroundImage: `url('/assets/images/blend(${hoverItem}).png')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`flex flex-col h-full overflow-x-hidden`}
      >
        <div className="flex justify-center items-center">
          <div className="text-white p-4 text-[3em] max-md:text-2xl font-spaceGrotesk">
            Tracks
          </div>
        </div>
        {deptDesc[hoverItem]}
        <div className="flex justify-evenly flex-wrap h-[100%] content-around mb-30">
          <div
            onMouseEnter={() => {
              sethoverItem(1);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">Finance</p>
          </div>
          <div
            onMouseEnter={() => {
              sethoverItem(2);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">
              Environmental Sustainability
            </p>
          </div>
          <div
            onMouseEnter={() => {
              sethoverItem(3);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">
              Developer Productivity
            </p>
          </div>
          <div
            onMouseEnter={() => {
              sethoverItem(4);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">Hardware Track</p>
          </div>
          <div
            onMouseEnter={() => {
              sethoverItem(5);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">
              Diversity & Inclusion
            </p>
          </div>
          <div
            onMouseEnter={() => {
              sethoverItem(6);
            }}
            onMouseLeave={() => {
              sethoverItem(0);
            }}
            className={buttonStyle}
          >
            <p className=" font-medium font-spaceGrotesk">Open Innovation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
