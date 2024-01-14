import { HeroBullets } from "@/components/Hero/HeroBullets";
import Contact from "@/components/Contact";
import Ourteam from "@/components/Ourteam";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";
import Timeline from "@/components/Timeline";
import AboutPage from "@/components/About";
import Image from "next/image";

import MarqueeLogo from "@/components/MarqueeLogo";
import Sponsor from "@/components/Sponsor";
import Speakers from "@/components/Speakers";
import Navbar from "@/components/NavBar";
import background from "../../public/images/bgLayer.png";

export default function Home() {
  return (
    <div className={`flex flex-col bg-[${background}]`}>
      <Navbar />
      <HeroBullets />
      <MarqueeLogo />
      <AboutPage />
      <Tracks />
      <Prizes />
      <Timeline />
      <Speakers />
      <Ourteam />
      <Sponsor />
      <FAQ />
      <Contact />
    </div>
  );
}
