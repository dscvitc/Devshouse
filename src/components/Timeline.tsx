"use client";

import React, { useState, useRef, useEffect } from "react";
import { Space_Grotesk } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";
import { Carousel } from "react-responsive-carousel";

import '../../public/css/base.css'
import '../../public/css/embla.css'

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const space_grotesk = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

const Timeline = () => {
  const OPTIONS: EmblaOptionsType = { dragFree: true }
  const SLIDE_COUNT = 16
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section id="timeline" className="relative sm:mb-[15rem] text-white pt-12">
      <h1 className={`text-4xl lg:text-6xl font-bold text-center ${space_grotesk.className}`}>
        Timeline
      </h1>
      <EmblaCarousel slides={[
        "/timeline/timeline1.png",
        "/timeline/timeline2.png",
        "/timeline/timeline3.png",
      ]} options={OPTIONS} />

    </section>
  );
};

export default Timeline;
