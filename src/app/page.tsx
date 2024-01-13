"use client"
import { HeroBullets } from "@/components/Hero/HeroBullets";
import Contact from "@/components/Contact";
import Ourteam from "@/components/Ourteam";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";
import Timeline from "@/components/Timeline";
import AboutPage from '@/components/About';
import Image from "next/image";
import Radium from 'radium'
import MarqueeLogo from "@/components/MarqueeLogo";
import Sponsor from "@/components/Sponsor";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <HeroBullets />
      <MarqueeLogo />
      <Radium.StyleRoot>
        <AboutPage />
      </Radium.StyleRoot>

      <Tracks />
      <Prizes />
      <Timeline />
      <Speakers />
      <Ourteam />
      <Sponsor />
      <FAQ />
      <Contact />

    </>
  );
}
