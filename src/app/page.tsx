import { HeroBullets } from '@/components/Hero/HeroBullets';
import Contact from "@/components/Contact"; 
import Ourteam from '@/components/Ourteam';
import Tracks from "@/components/Tracks";
import "./globals.css";
import Image from 'next/image';

  export default function Home() {
    return <>
      <HeroBullets />
      <Tracks />
      <Ourteam/>
      <Contact />
    </>
}

