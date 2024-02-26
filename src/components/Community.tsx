import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import img1 from "../../public/comm/1.png";
// import img2 from "../../public/comm/2.jpg";
import img3 from "../../public/comm/3.png";
import img4 from "../../public/comm/4.png";
import img5 from "../../public/comm/5.png";
import img6 from "../../public/comm/6.png";
import img7 from "../../public/comm/7.png";
import img8 from "../../public/comm/8.png";
import img9 from "../../public/comm/9.png";
import img10 from "../../public/comm/10.png";
import img11 from "../../public/comm/11.png";
import img12 from "../../public/comm/12.png";
import img13 from "../../public/comm/13.png";
import img14 from "../../public/comm/14.png";

import img15 from "../../public/comm/15.png";
import img16 from "../../public/comm/16.png";
import img17 from "../../public/comm/17.png";
import img18 from "../../public/comm/18.png";
import img19 from "../../public/comm/19.png";
import img20 from "../../public/comm/20.png";

import img21 from "../../public/comm/21.png";
import img22 from "../../public/comm/22.png";
import img23 from "../../public/comm/23.png";
// import img24 from "../../public/comm/24.jpg";
import img25 from "../../public/comm/25.png";

import { Space_Grotesk } from "next/font/google";
const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });

export default function Community() {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-black w-full gap-12 my-12">
      <div className="w-[90%] md:w-[80%] h-auto">
        <h1 className={`text-5xl ${Space.className} text-white text-center mb-14`}>Community Partners</h1>
      </div>
      <Marquee>
        <Image src={img1} alt={"1"} height={200} width={300} className="mx-12"></Image>
        {/* <Image src={img2} alt={"1"} height={200} width={300} className="mx-12"></Image> */}
        <Image src={img3} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img4} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img5} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img6} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img7} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img8} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img9} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img10} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img11} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img12} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img13} alt={"1"} height={200} width={300} className="mx-12"></Image>
      </Marquee>
      <Marquee direction="right">
        <Image src={img14} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img15} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img16} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img17} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img18} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img19} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img20} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img21} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img22} alt={"1"} height={200} width={300} className="mx-12"></Image>
        <Image src={img23} alt={"1"} height={200} width={300} className="mx-12"></Image>
        {/* <Image src={img24} alt={"1"} height={200} width={300} className="mx-12"></Image> */}
        <Image src={img25} alt={"1"} height={200} width={300} className="mx-12"></Image>
      </Marquee>
    </div>
  );
}
