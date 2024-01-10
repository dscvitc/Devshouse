import React from "react";
import Marquee from "react-fast-marquee";
import marquee from "@/app/DevsHouseMarquee.png";
import Image from "next/image";

const MarqueeLogo = () => (
  <div className="h-[200px] mt-[100px]">
    <div className="transform rotate-[5deg] absolute w-screen">
      <Marquee direction="right" className="bg-white p-2 border-black border-y-[8px]">
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
      </Marquee>
    </div>
    <div className="transform rotate-[-5deg] absolute w-screen">
      <Marquee className="bg-white p-2 border-black border-y-[8px]">
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
        <Image src={marquee} alt={"marquee"} className="mx-24"></Image>
      </Marquee>
    </div>
  </div>
);

export default MarqueeLogo;
