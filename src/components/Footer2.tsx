import React from "react";
import Image from "next/image";
import devshouseTicket from "../../public/assets/images/devshouseticket.svg";

import { IconBrandDiscordFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandX } from "@tabler/icons-react";

export default function Footer2() {
  return (
    <div className="w-full p-12 font-spaceGrotesk gap-4 grid grid-cols-1 md:grid-cols-4 justify-center  ">
      <Image src={devshouseTicket} alt="Devshouse Ticket" className="self-center"></Image>
      <div className="flex flex-col gap-4 justify-start px-12 m-2">
        <div>
          <p className="text-2xl font-bold">Quick Links</p>
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
      <div className="flex flex-col gap-4 justify-start px-12 m-2">
        <div>
          <p className="text-2xl font-bold">Join us</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="https://github.com/dscvitc/dscvitchennai" target="_blank" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandGithubFilled /> <p>Github</p>
            </span>
          </a>
          <a href="https://discord.com/invite/UFfPjTtzh7" target="_blank" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandDiscordFilled /> <p>Discord</p>
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start px-12">
        <p className="text-2xl font-bold">Follow us</p>
        <p className="text-xl text-gray-500">Connect. Learn. Grow.</p>
        <span className="flex flex-row py-2 gap-4 m-2">
          <a href="https://www.instagram.com/devshouse.tech" target="_blank" className="hover:scale-125">
            <IconBrandInstagram />
          </a>
          <a href="https://www.linkedin.com/company/devshouse/" target="_blank" className="hover:scale-125">
            <IconBrandLinkedin />
          </a>
          <a href="https://twitter.com/devshouse_tech" target="_blank" className="hover:scale-125">
            <IconBrandX />
          </a>
        </span>
      </div>
    </div>
  );
}
