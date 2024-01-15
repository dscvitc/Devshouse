import React from "react";
import Image from "next/image";
import devshouseTicket from "../../public/assets/images/devshouseticket.svg";

import { IconBrandDiscordFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function Footer2() {
  return (
    <div className="w-full flex flex-row p-12 font-spaceGrotesk gap-12">
      <Image src={devshouseTicket} alt="Devshouse Ticket" className="flex flex-1"></Image>
      <div className="flex flex-col flex-1 gap-4 justify-start">
        <div>
          <p className="text-2xl font-bold">QuickLinks</p>
        </div>
        <div className="flex flex-col">
          <a className="text-lg">About</a>
          <a className="text-lg">Theme</a>
          <a className="text-lg">Timeline</a>
          <a className="text-lg">Team</a>
          <a className="text-lg">Sponsors</a>
          <a className="text-lg">FAQs</a>
          <a className="text-lg">Contact Us</a>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4 justify-start">
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
