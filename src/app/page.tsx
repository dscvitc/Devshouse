import { HeroBullets } from '@/components/Hero/HeroBullets';
import Contact from "@/components/Contact";
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";
import Timeline from "@/components/Timeline";
import AboutPage from '@/components/About';

import "./globals.css"


export default function Home() {
  return (
    <>
      <HeroBullets />
      <AboutPage />
      <Tracks />
      <Prizes />
      <Timeline />
      <Ourteam />
      <FAQ />
      <Contact />

      <Ourteam />

    </>
  )
}

