"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import marquee from "@/app/DevsHouseMarquee.png";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimension";

const MarqueeLogo = () => {
  const [size, setSize] = useState(50);
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    if (!windowDimensions || !windowDimensions.width) {
      return;
    }
    if (windowDimensions.width < 640) {
      setSize(25);
    } else {
      setSize(50);
    }
  }, [windowDimensions]);

  return (
    <div className="h-[50px] sm:h-[200px] sm:mt-[50px]">
      <div className="transform rotate-[5deg] absolute w-screen">
        <Marquee direction="right" className="bg-white p-2 border-black border-y-[8px]">
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
        </Marquee>
      </div>
      <div className="transform rotate-[-5deg] absolute w-screen">
        <Marquee className="bg-white p-2 border-black border-y-[8px]">
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
          <Image src={marquee} alt={"marquee"} height={size} className="mx-24"></Image>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeLogo;
