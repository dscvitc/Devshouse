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
import About2 from "@/components/About2";
import Footer2 from "@/components/Footer2";
export default function Home() {
  return (
    <div
      className={`flex flex-col`}
      style={{ backgroundImage: `url('/images/bgLayer.png')`, backgroundRepeat: "repeat-y", backgroundSize: "contain" }}
    >
      <Navbar />
      <HeroBullets />
      <MarqueeLogo />
      {/* <AboutPage /> */}
      <About2 />
      <Tracks />
      <Prizes />
      {/* <Timeline /> */}
      {/*Hide until confirmed*/}
      {/* <Speakers /> */}
      <Ourteam />
      <Sponsor />
      <FAQ />
      <Contact />
      <Footer2 />
    </div>
  );
}
