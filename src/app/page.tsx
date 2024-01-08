import Contact from "@/components/Contact";
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import Prizes from '@/components/Prizes';
import "./globals.css";

export default function Home() {
  return (
    <>
      <Tracks />
      <Prizes />
      <Ourteam />
      <Contact />
    </>
  )
}
