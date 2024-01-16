import React from "react";
import Image from "next/image";
import devshouseTicket from "../../public/assets/images/devshouseticket.png";
import devshouseTicket1 from "../../public/assets/images/devshouseticket1.png";
import {
  IconBrandDiscordFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-12 font-spaceGrotesk">
      <div className="relative col-span-2">
        <div className="relative">
          <a href="https://devshouse-1.devfolio.co/" target="_blank">
            <Image
              src={devshouseTicket}
              alt="Devshouse Ticket"
              className="hover:opacity-0 absolute w-full h-full object-cover transition-opacity duration-500"
            ></Image>
            <Image
              src={devshouseTicket1}
              alt="Devshouse Ticket"
              className="w-full object-cover transition-opacity duration-500"
            ></Image>
          </a>
        </div>
      </div>
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
          <a className="text-lg" href="#prizes">
            Prizes
          </a>
          <a className="text-lg" href="#timeline">
            Timeline
          </a>
          <a className="text-lg" href="#team">
            Team
          </a>
          <a className="text-lg" href="#sponsor">
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
          <Link target="_blank" href="https://github.com/dscvitc/dscvitchennai" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandGithubFilled /> <p>Github</p>
            </span>
          </Link>
          <Link target="_blank" href="https://discord.gg/UFfPjTtzh7" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandDiscordFilled /> <p>Discord</p>
            </span>
          </Link>
          <Link target="_blank" href="http://linkedin.com/company/devshouse" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandLinkedin /> <p>LinkedIn</p>
            </span>
          </Link>
          <Link target="_blank" href="http://instagram.com/devshouse.tech" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandInstagram /> <p>Instagram</p>
            </span>
          </Link>
          <Link target="_blank" href="http://x.com/devshouse_tech" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandTwitterFilled /> <p>Twitter</p>
            </span>
          </Link>
          <Link target="_blank" href="https://chat.whatsapp.com/EMSTDGhpsLgFQi6sXLPEQj" className="text-xl">
            <span className="flex flex-row px-2 gap-4">
              <IconBrandWhatsapp /> <p>Whatsapp</p>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
