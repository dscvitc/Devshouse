import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const Space_grotesk = Space_Grotesk({ subsets: ["latin"] });

import boardMembers from "@/data/BoardMembres";
import linkedinlogo from "/public/Pasted_Graphic_3.png";

interface Props {
  name: String;
  role: String;
  img: StaticImageData;
  linkedin: string;
}

const Card = ({ name, role, img, linkedin }: Props) => {
  return (
    <div className="w-[220px] m-10 md:m-2 ">
      <div className="flex flex-col items-center justify-center gap-12">
        <div
          className={`card flex items-center justify-center relative
             `}
        >
          <Image
            src={img}
            alt="boardmembers"
            height={210}
            width={210}
            className="rounded-[45px] h-full w-full object-cover"
          />

          <Link href={linkedin} target="_blank">
            <Image
              src={linkedinlogo}
              alt="linkedin"
              width={60}
              height={60}
              className="absolute right-0 bottom-0 ml-10"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 gap-3 px-1 font-Space_grotesk">
          <h1 className="text-white text-2xl tracking-wide text-center whitespace-nowrap">{name}</h1>
          <p className="text-white text-xl font-light tracking-wide text-center">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Ourteam = () => {
  return (
    <div id="team" className="w-full h-auto bg-printedGraphic">
      <h1 className="text-white text-center text-5xl font-bold p-10">Our Team</h1>
      <div className="">
        <div className="overflow-x-auto flex no-scrollbar md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 justify-items-center ">
          {boardMembers.map((e) => (
            <Card name={e.name} role={e.role} img={e?.image} key={e.name} linkedin={e?.linkedIn} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
