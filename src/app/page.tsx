import Contact from "@/components/Contact"; 
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import "./globals.css";

  export default function Home() {
    return <>
      <Tracks />
      <Ourteam/>
      <FAQ />
      <Contact />
    </>
}
