import Contact from "@/components/Contact";
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import Prizes from "@/components/prizes/Prizes";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Tracks />
      <Prizes />
      <Ourteam />
      <FAQ />
      <Contact />
    </>
  )
}
