import Contact from "@/components/Contact";
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";
import Timeline from "@/components/Timeline"; 

export default function Home() {
  return (
    <>
      <Tracks />
      <Prizes />
      <Timeline />
      <Ourteam />
      <FAQ />
      <Contact />
    </>
  )
}
