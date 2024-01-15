import React from "react";
import vitimage from "../../public/assets/images/col_img.svg";
import gdscimage from "../../public/assets/images/gdsc_img.svg";
import Image from "next/image";

export default function About2() {
  return (
    <div id="about" className="flex flex-col w-full items-center justify-evenly text-white font-spaceGrotesk pt-12">
      <div className="flex flex-row font-bold">
        <p className="text-8xl md:text-9xl mr-2">A</p>
        <div className="flex flex-col justify-end pb-1 md:pb-3">
          <p className="text-2xl md:text-4xl">bout the</p>
          <p className="text-2xl md:text-4xl">Community</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full px-8 md:px-28 items-center gap-12 m-12">
        <div className="flex flex-col md:w-1/2">
          <p className="text-3xl font-bold mb-4">ABOUT</p>
          <p className="text-6xl font-bold mb-8">VIT Chennai</p>
          <p className="text-2xl text-gray-400">
            Vellore Institute of Technology, founded in 1984 is one of the leading engineering colleges in India. It
            aims to provide a world-class education that not only polishes technical mastery and analytical skills but
            also imbibes strong ethical values in their students.
          </p>
        </div>
        <Image src={vitimage} alt={"VIT IMAGE"} className="md:w-1/2"></Image>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full items-center gap-12 px-8 md:px-24 m-12">
        <Image src={gdscimage} alt={"GDSC IMAGE"} className="md:w-1/2"></Image>
        <div className="flex flex-col md:w-1/2">
          <p className="text-3xl font-bold">ABOUT</p>
          <p className="text-4xl font-bold mb-8">Google Developer Student Club</p>
          <p className="text-2xl text-gray-400">
            GDSC VIT Chennai is a student run community group powered by Google Developers. We are a passionate group of
            budding developers who work together to build solutions for local businesses and communities with Google
            technology and promote healthy developer culture.
          </p>
        </div>
      </div>
    </div>
  );
}
