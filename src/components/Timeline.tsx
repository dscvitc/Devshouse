"use client";

import React, {useState, useRef, useEffect} from "react";
import { Space_Grotesk } from "next/font/google";
import { gsap } from 'gsap';
import Image from "next/image";



const space_grotesk = Space_Grotesk({
    weight: ["400", "700"],
    subsets: ["latin-ext"],
});
  

const Timeline = () => {
    const [part, setPart] = useState(1);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const calculateMovementAmount = () => {
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          return rect.width/2.9;
        }
        return 0;
    };
  
    const handleLeftClick = () => {
      if (part > 1) {
        setPart((prevPart) => prevPart - 1);
        gsap.to(containerRef.current, {
          x: `+=${calculateMovementAmount()}`,
          duration: 1,
        });
      }
    };
  
    const handleRightClick = () => {
      if (part < 3) {
        setPart((prevPart) => prevPart + 1);
        gsap.to(containerRef.current, {
          x: `-=${calculateMovementAmount()}`,
          duration: 1,
        });
      }
    };

    useEffect(() => {
        const handleResize = () => {
          gsap.set(containerRef.current, { x: `-${calculateMovementAmount() * (part - 1)}px` });
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [part]);

      

      const getTextForPart = (part: number) => {
        switch (part) {
          case 1:
            return "15 March '23";
          case 2:
            return "16 March '23";
          case 3:
            return "17 March '23";
          
        }
      };
  
    return (
      <section id="timeline" className="md:h-[60vh] lg:h-screen relative text-white mb-20">
        <h1 className={`${space_grotesk.className} text-center font-bold text-5xl mb-5`}>Timeline</h1>
        <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center">
                <div className="bg-white z-10 rounded-xl h-[2.5rem] min-w-[8rem] width-[max-content] text-black flex justify-center items-center font-spaceGrotesk font-bold"> 
                    <p className="px-3 text-lg">{getTextForPart(part)}</p> 
                </div>
                <div className="bg-black border-[#fff] border-2 -mt-[2rem] ml-3 rounded-xl h-[2.5rem] w-full"></div>
            </div>
        </div>
        <button onClick={handleLeftClick} className="absolute left-5 mt-[38%] sm:mt-[20%]">
            <Image src="/assets/images/arrow2.svg" alt="day1" className="w-[2rem] sm:w-[7.2rem]" width={500} height={500}/>
        </button>
        <button onClick={handleRightClick} className="absolute right-5 mt-[37%] sm:mt-[19%]">
            <Image src="/assets/images/arrow1.svg" alt="day2" className="w-[2rem] sm:w-[6.8rem]" width={500} height={500}/>
        </button>
        <div className="relative overflow-hidden  mx-14 sm:mx-36">
          <div
            ref={containerRef}
            className="flex overflow-hidden  mt-20 w-[300vw]"
          >
            <Image
              ref={imageRef}
              src="/assets/images/timeline.svg"
              alt="timeline"
              className="w-[260vw] sm:w-[160vw] object-cover object-left"
              width={500} height={500}
            />
          </div>
        </div>
      </section>
    );
  };

export default Timeline;