import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { HeroBullets } from "@/components/Hero/HeroBullets";
import Ourteam from "@/components/Ourteam";
import Tracks from "@/components/Tracks";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";

import About2 from "@/components/About2";
import Footer2 from "@/components/Footer2";
import MarqueeLogo from "@/components/MarqueeLogo";
import Navbar from "@/components/NavBar";
import Sponsor from "@/components/Sponsor";



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
