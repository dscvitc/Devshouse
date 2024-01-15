import React from "react";
import Image from "next/image";
import devshouseTicket from "../../public/assets/images/devshouseticket.svg";

import { IconBrandDiscordFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function Footer2() {
  return (
    <div className="w-full p-12 font-spaceGrotesk grid grid-cols-1 md:grid-cols-3 gap-12">
      <Image src={devshouseTicket} alt="Devshouse Ticket" className="self-center"></Image>
      <div className="flex flex-col gap-4 justify-start">
        <div>
          <p className="text-2xl font-bold">QuickLinks</p>
        </div>
        <div className="flex flex-col">
          <a className="text-lg" href="#about">
            About
          </a>
          <a className="text-lg" href="#tracks">
            Theme
          </a>
          <a className="text-lg" href="#timeline">
            Timeline
          </a>
          <a className="text-lg" href="#team">
            Team
          </a>
          <a className="text-lg" href="#sponsors">
            Sponsors
          </a>
          <a className="text-lg" href="#faqs">
            FAQs
          </a>
          <a className="text-lg" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start">
        <div>
          <p className="text-2xl font-bold">Join us</p>
        </div>
        <div className="flex flex-col">
          <a href="https://github.com/dscvitc/dscvitchennai" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandGithubFilled /> <p>Github</p>
            </span>
          </a>
          <a href="" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandDiscordFilled /> <p>Discord</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
