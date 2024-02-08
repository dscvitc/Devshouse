import Image from "next/image";
import React from "react";
import buildBox from "../../public/assets/images/icons8-buildbox 1.png";
import phCube from "../../public/assets/images/ph_cube.svg";
import phCubeEmerald from "../../public/assets/images/ph_cube_emerald.svg";
import phCubeTopaz from "../../public/assets/images/ph_cube_topaz.svg";
import comPart1 from "../../public/assets/images/comPart1.png";
import comPart2 from "../../public/assets/images/comPart2.png";
import build from "next/dist/build";

import polygonLogo from "public/sponsors/polygon.png";
import replitLogo from "public/sponsors/replit.png";
import skynyxLogo from "public/sponsors/skynyx.png";
import ZSecuritylogo from "public/sponsors/ZSecurity.png";
import wolframLogo from "public/sponsors/wolfram.png";
import esalesLogo from "public/sponsors/esales.png";
import IBLogo from "public/sponsors/iblogotransparent.png";
import devfolioLogo from "public/sponsors/devfolio.png";
import quillauditsLogo from "public/sponsors/quillaudits.png";
import nblogo from "public/sponsors/NB-2.0-logo-1.png";
import BeeCeptor from "public/sponsors/beeceptor.png";
import bergerpng from "public/sponsors/berger.png";
import Echo3d from "public/sponsors/echo3d.png";
import aops from "public/sponsors/aops.png";
import netweb from "public/sponsors/netweb.png";
import choice from "public/sponsors/choice.png";
import Cybrance from "public/sponsors/cybrance.png";
import Verbwire from "public/sponsors/verbwire.png";
import Solana from "public/sponsors/solana.png";
import Redbull from "public/sponsors/redbull.png";
import Superteam from "public/sponsors/superteam.png";
import Githb from "public/sponsors/github.png";
import integra from "public/sponsors/integra.png";
import sybgen from "public/sponsors/sybgen.png";
import axure from "public/sponsors/axure.png";


import "../app/globals.css";
import SponsorCard from "./SponsorCard";

const Sponsor = () => {
  return (
    <div id="sponsor" className=" flex justify-center items-center flex-col gap-8 pt-12 ">
      <span className="text-[#fff] font-bold text-[50px] font-spaceGrotesk max-xl:text-[3rem] max-lg:text-[3rem] max-mg:text-[3rem] max-sm:text-[3rem]">
        Sponsors
      </span>

      {/* TITLE SECTION */}

      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center w-full items-center ">
          <svg
            className="flex justify-end w-1/2"
            height="5"
            viewBox="0 0 633 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1875 5.78467H0V0.784668H13.1875V5.78467ZM65.9375 5.78467H39.5625V0.784668H65.9375V5.78467ZM118.688 5.78467H92.3125V0.784668H118.688V5.78467ZM171.438 5.78467H145.063V0.784668H171.438V5.78467ZM224.188 5.78467H197.813V0.784668H224.188V5.78467ZM276.938 5.78467H250.562V0.784668H276.938V5.78467ZM329.687 5.78467H303.312V0.784668H329.687V5.78467ZM382.437 5.78467H356.062V0.784668H382.437V5.78467ZM435.188 5.78467H408.812V0.784668H435.188V5.78467ZM487.938 5.78467H461.562V0.784668H487.938V5.78467ZM540.688 5.78467H514.313V0.784668H540.688V5.78467ZM593.438 5.78467H567.063V0.784668H593.438V5.78467ZM633 5.78467H619.813V0.784668H633V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#257e3b] mx-4 text-[25px] leading-normal font-bold px-1 font-spaceGrotesk max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Title
          </span>
          <svg
            className="flex justify-start w-1/2"
            height="5"
            viewBox="0 0 629 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1042 5.78467H0V0.784668H13.1042V5.78467ZM65.5208 5.78467H39.3125V0.784668H65.5208V5.78467ZM117.938 5.78467H91.7292V0.784668H117.938V5.78467ZM170.354 5.78467H144.146V0.784668H170.354V5.78467ZM222.771 5.78467H196.563V0.784668H222.771V5.78467ZM275.188 5.78467H248.979V0.784668H275.188V5.78467ZM327.604 5.78467H301.396V0.784668H327.604V5.78467ZM380.021 5.78467H353.812V0.784668H380.021V5.78467ZM432.438 5.78467H406.229V0.784668H432.438V5.78467ZM484.854 5.78467H458.646V0.784668H484.854V5.78467ZM537.271 5.78467H511.063V0.784668H537.271V5.78467ZM589.688 5.78467H563.479V0.784668H589.688V5.78467ZM629 5.78467H615.896V0.784668H629V5.78467Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center">
            <a href="https://www.redbull.com/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center ">
                  <Image 
                  src={Redbull} 
                  alt={"REDBULL LOGO"} 
                  
                  />
                </div>
              </div>
            </a>

          

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          </div>
      </div>

      {/* RUBY SECTION */}

      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex justify-center w-full items-center ">
          <svg
            className="flex justify-end w-1/2"
            height="5"
            viewBox="0 0 633 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1875 5.78467H0V0.784668H13.1875V5.78467ZM65.9375 5.78467H39.5625V0.784668H65.9375V5.78467ZM118.688 5.78467H92.3125V0.784668H118.688V5.78467ZM171.438 5.78467H145.063V0.784668H171.438V5.78467ZM224.188 5.78467H197.813V0.784668H224.188V5.78467ZM276.938 5.78467H250.562V0.784668H276.938V5.78467ZM329.687 5.78467H303.312V0.784668H329.687V5.78467ZM382.437 5.78467H356.062V0.784668H382.437V5.78467ZM435.188 5.78467H408.812V0.784668H435.188V5.78467ZM487.938 5.78467H461.562V0.784668H487.938V5.78467ZM540.688 5.78467H514.313V0.784668H540.688V5.78467ZM593.438 5.78467H567.063V0.784668H593.438V5.78467ZM633 5.78467H619.813V0.784668H633V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#FF5A4C] mx-4 text-[25px] leading-normal font-bold px-1 font-spaceGrotesk max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Ruby
          </span>
          <svg
            className="flex justify-start w-1/2"
            height="5"
            viewBox="0 0 629 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1042 5.78467H0V0.784668H13.1042V5.78467ZM65.5208 5.78467H39.3125V0.784668H65.5208V5.78467ZM117.938 5.78467H91.7292V0.784668H117.938V5.78467ZM170.354 5.78467H144.146V0.784668H170.354V5.78467ZM222.771 5.78467H196.563V0.784668H222.771V5.78467ZM275.188 5.78467H248.979V0.784668H275.188V5.78467ZM327.604 5.78467H301.396V0.784668H327.604V5.78467ZM380.021 5.78467H353.812V0.784668H380.021V5.78467ZM432.438 5.78467H406.229V0.784668H432.438V5.78467ZM484.854 5.78467H458.646V0.784668H484.854V5.78467ZM537.271 5.78467H511.063V0.784668H537.271V5.78467ZM589.688 5.78467H563.479V0.784668H589.688V5.78467ZM629 5.78467H615.896V0.784668H629V5.78467Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://www.quillaudits.com/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={quillauditsLogo} alt={"QUILLAUDITS LOGO"} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://polygon.technology/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={polygonLogo} alt={"POLYGON LOGO"} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>


        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://superteam.fun/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={Superteam} alt={"SuperTeam LOGO"} width={300} height={250} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://solana.com/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={Solana} alt={"Solana LOGO"} width={500} height={250} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://github.com/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={Githb} alt={"GITHUB LOGO"} width={500} height={250} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>
      </div>

      {/* SAPPHIRE SECTION */}

      <div className="flex flex-col items-center w-full justify-center mt-20">
        <div className="flex justify-center w-full items-center">
          <svg
            className="flex justify-end "
            height="5"
            viewBox="0 0 593 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3542 5.78467H0V0.784668H12.3542V5.78467ZM61.7708 5.78467H37.0625V0.784668H61.7708V5.78467ZM111.188 5.78467H86.4792V0.784668H111.188V5.78467ZM160.604 5.78467H135.896V0.784668H160.604V5.78467ZM210.021 5.78467H185.313V0.784668H210.021V5.78467ZM259.438 5.78467H234.729V0.784668H259.438V5.78467ZM308.854 5.78467H284.146V0.784668H308.854V5.78467ZM358.271 5.78467H333.562V0.784668H358.271V5.78467ZM407.688 5.78467H382.979V0.784668H407.688V5.78467ZM457.104 5.78467H432.396V0.784668H457.104V5.78467ZM506.521 5.78467H481.813V0.784668H506.521V5.78467ZM555.938 5.78467H531.229V0.784668H555.938V5.78467ZM593 5.78467H580.646V0.784668H593V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#5293FF] mx-4 text-[25px] leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Sapphire
          </span>
          <svg
            className="flex justify-start "
            height="5"
            viewBox="0 0 592 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 5.78467H0V0.784668H12.3333V5.78467ZM61.6667 5.78467H37V0.784668H61.6667V5.78467ZM111 5.78467H86.3333V0.784668H111V5.78467ZM160.333 5.78467H135.667V0.784668H160.333V5.78467ZM209.667 5.78467H185V0.784668H209.667V5.78467ZM259 5.78467H234.333V0.784668H259V5.78467ZM308.333 5.78467H283.667V0.784668H308.333V5.78467ZM357.667 5.78467H333V0.784668H357.667V5.78467ZM407 5.78467H382.333V0.784668H407V5.78467ZM456.333 5.78467H431.667V0.784668H456.333V5.78467ZM505.667 5.78467H481V0.784668H505.667V5.78467ZM555 5.78467H530.333V0.784668H555V5.78467ZM592 5.78467H579.667V0.784668H592V5.78467Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-40">
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://replit.com/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center p-18">
                  <Image src={replitLogo} alt={"REPLIT LOGO"} width={350} />
                </div>
              </div>
            </a>

            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center ">
            <a href="https://skynyx.in/" target="_blank">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center p-18">
                  <Image src={skynyxLogo} alt={"SKYNYX LOGO"} height={175} />
                </div>
              </div>
            </a>
            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div>
      </div>

      {/* EMERALD SECTION */}

      <div className="flex flex-col items-center justify-center w-full">
        {/* <div className="flex justify-center items-center w-full">
          <svg
            className="flex justify-end "
            height="5"
            viewBox="0 0 593 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3542 5.78467H0V0.784668H12.3542V5.78467ZM61.7708 5.78467H37.0625V0.784668H61.7708V5.78467ZM111.188 5.78467H86.4792V0.784668H111.188V5.78467ZM160.604 5.78467H135.896V0.784668H160.604V5.78467ZM210.021 5.78467H185.313V0.784668H210.021V5.78467ZM259.438 5.78467H234.729V0.784668H259.438V5.78467ZM308.854 5.78467H284.146V0.784668H308.854V5.78467ZM358.271 5.78467H333.562V0.784668H358.271V5.78467ZM407.688 5.78467H382.979V0.784668H407.688V5.78467ZM457.104 5.78467H432.396V0.784668H457.104V5.78467ZM506.521 5.78467H481.813V0.784668H506.521V5.78467ZM555.938 5.78467H531.229V0.784668H555.938V5.78467ZM593 5.78467H580.646V0.784668H593V5.78467Z"
              fill="white"
            />
          </svg>
          <span className="text-[#44A777] mx-4 text-[25px] leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
            Emerald
          </span>
          <svg
            className="flex justify-start "
            height="5"
            viewBox="0 0 592 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.3333 5.78467H0V0.784668H12.3333V5.78467ZM61.6667 5.78467H37V0.784668H61.6667V5.78467ZM111 5.78467H86.3333V0.784668H111V5.78467ZM160.333 5.78467H135.667V0.784668H160.333V5.78467ZM209.667 5.78467H185V0.784668H209.667V5.78467ZM259 5.78467H234.333V0.784668H259V5.78467ZM308.333 5.78467H283.667V0.784668H308.333V5.78467ZM357.667 5.78467H333V0.784668H357.667V5.78467ZM407 5.78467H382.333V0.784668H407V5.78467ZM456.333 5.78467H431.667V0.784668H456.333V5.78467ZM505.667 5.78467H481V0.784668H505.667V5.78467ZM555 5.78467H530.333V0.784668H555V5.78467ZM592 5.78467H579.667V0.784668H592V5.78467Z"
              fill="white"
            />
          </svg>
        </div> */}
        {/* <div className="flex flex-col gap-12 mt-20 justify-center items-center">
          <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
            <div className="flex flex-row justify-center justify-self-center text-center items-center">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={phCubeEmerald} alt={``} width={47} height={47} />
                  <div
                    className={`text-[30px] font-bold font-['Space Grotesk'] xl:text-[42px]`}
                    style={{ color: "#44A777" }}
                  >
                    Company D
                  </div>
                </div>
              </div>
              <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
            </div>
            <div className="flex flex-row justify-center justify-self-center text-center items-center">
              <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                <div className="flex flex-row justify-center items-center">
                  <Image src={phCubeEmerald} alt={``} width={47} height={47} />
                  <div
                    className={`text-[30px] font-bold font-['Space Grotesk'] xl:text-[42px]`}
                    style={{ color: "#44A777" }}
                  >
                    Company E
                  </div>
                </div>
              </div>
              <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
            </div>
          </div>
          <div className="flex flex-row justify-center justify-self-center text-center items-center">
            <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
              <div className="flex flex-row justify-center items-center">
                <Image src={phCubeEmerald} alt={``} width={47} height={47} />
                <div
                  className={`text-[30px] font-bold font-['Space Grotesk'] xl:text-[42px]`}
                  style={{ color: "#44A777" }}
                >
                  Company F
                </div>
              </div>
            </div>
            <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
          </div>
        </div> */}

        {/* TOPAZ SECTION */}
        <div className="flex flex-col items-center justify-center mt-20 w-full">
          <div className="flex justify-center items-center">
            <svg
              className="flex justify-end w-1/2"
              height="5"
              viewBox="0 0 592 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3333 5.78467H0V0.784668H12.3333V5.78467ZM61.6667 5.78467H37V0.784668H61.6667V5.78467ZM111 5.78467H86.3333V0.784668H111V5.78467ZM160.333 5.78467H135.667V0.784668H160.333V5.78467ZM209.667 5.78467H185V0.784668H209.667V5.78467ZM259 5.78467H234.333V0.784668H259V5.78467ZM308.333 5.78467H283.667V0.784668H308.333V5.78467ZM357.667 5.78467H333V0.784668H357.667V5.78467ZM407 5.78467H382.333V0.784668H407V5.78467ZM456.333 5.78467H431.667V0.784668H456.333V5.78467ZM505.667 5.78467H481V0.784668H505.667V5.78467ZM555 5.78467H530.333V0.784668H555V5.78467ZM592 5.78467H579.667V0.784668H592V5.78467Z"
                fill="white"
              />
            </svg>
            <span className="text-[#FCCF4B] mx-4 text-[25px] leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
              Topaz
            </span>
            <svg
              className="flex justify-start w-1/2"
              height="5"
              viewBox="0 0 629 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.1042 5.78467H0V0.784668H13.1042V5.78467ZM65.5208 5.78467H39.3125V0.784668H65.5208V5.78467ZM117.938 5.78467H91.7292V0.784668H117.938V5.78467ZM170.354 5.78467H144.146V0.784668H170.354V5.78467ZM222.771 5.78467H196.563V0.784668H222.771V5.78467ZM275.188 5.78467H248.979V0.784668H275.188V5.78467ZM327.604 5.78467H301.396V0.784668H327.604V5.78467ZM380.021 5.78467H353.812V0.784668H380.021V5.78467ZM432.438 5.78467H406.229V0.784668H432.438V5.78467ZM484.854 5.78467H458.646V0.784668H484.854V5.78467ZM537.271 5.78467H511.063V0.784668H537.271V5.78467ZM589.688 5.78467H563.479V0.784668H589.688V5.78467ZM629 5.78467H615.896V0.784668H629V5.78467Z"
                fill="white"
              />
            </svg>
          </div>
          {/* company section */}
          <div className="flex flex-col gap-12 mt-20 justify-center items-center">
            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://zsecurity.org/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={ZSecuritylogo} alt="ZSECURITY LOGO" width={300} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>


              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://wolfram.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={wolframLogo} alt={``} width={350} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>


            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://www.esales.in/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={esalesLogo} alt={"ESALES LOGO"} width={150} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://interviewbuddy.net/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={IBLogo} alt={"IB LOGO"} width={350} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

            
            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://beeceptor.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={BeeCeptor} alt={"Beeceptor"} width={250} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://echo3d.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={Echo3d} alt={"Echo3D"} width={350} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://cybrancee.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={Cybrance} alt={"Cybrance"} width={250} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://www.verbwire.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={Verbwire} alt={"Verbwire"} width={350} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://artofproblemsolving.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={aops} alt={"AOPS LOGO"} width={250} />
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://www.bergerpaints.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={bergerpng} alt={"BERGER LOGO"} width={250}/>
                    </div>
                  </div>
                </a>
                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://netwebindia.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={netweb} alt={"NETWEB LOGO"} width={250} />
                    </div>
                  </div>
                </a>
                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>

              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://choiceindia.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={choice} alt={"Choice LOGO"} width={350} />
                    </div>
                  </div>
                </a>
                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

            
            <div className="flex gap-60 max-lg:flex-col max-lg:gap-20">
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://www.integra.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={integra} alt={"INTEGRA LOGO"} width={250}/>
                    </div>
                  </div>
                </a>

                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            
              {/* <div className="flex gap-60 max-lg:flex-col max-lg:gap-20"> */}
              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://sybgen.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={sybgen} alt={"SYBGEN LOGO"} width={250} />
                    </div>
                  </div>
                </a>
                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>

              <div className="flex flex-row justify-center justify-self-center text-center items-center">
                <a href="https://axure.com/" target="_blank">
                  <div className="w-[300px] h-[190px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={axure} alt={"AXURE LOGO"} width={350} />
                    </div>
                  </div>
                </a>
                <div className="w-[300px] h-[190px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
              </div>
            </div>
          </div>
        </div>
        {/* COM PARTNERS SECTION */}

        <div className="flex flex-col items-center justify-center mt-20 w-full">
          <div className="flex justify-center items-center w-full">
            <svg
              className="flex justify-end "
              height="5"
              viewBox="0 0 521 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8542 5.78467H0V0.784668H10.8542V5.78467ZM54.2708 5.78467H32.5625V0.784668H54.2708V5.78467ZM97.6875 5.78467H75.9792V0.784668H97.6875V5.78467ZM141.104 5.78467H119.396V0.784668H141.104V5.78467ZM184.521 5.78467H162.813V0.784668H184.521V5.78467ZM227.938 5.78467H206.229V0.784668H227.938V5.78467ZM271.354 5.78467H249.646V0.784668H271.354V5.78467ZM314.771 5.78467H293.062V0.784668H314.771V5.78467ZM358.188 5.78467H336.479V0.784668H358.188V5.78467ZM401.604 5.78467H379.896V0.784668H401.604V5.78467ZM445.021 5.78467H423.313V0.784668H445.021V5.78467ZM488.438 5.78467H466.729V0.784668H488.438V5.78467ZM521 5.78467H510.146V0.784668H521V5.78467Z"
                fill="white"
              />
            </svg>
            <span className="text-[#EB81C1] text-[25px] mx-4 leading-normal font-bold font-spaceGrotesk  max-xl:text-[25px] max-lg:text-[20px] max-mg:text-[15px] max-sm:text-[15px]">
              Media Partner
            </span>
            <svg
              className="flex justify-start "
              height="5"
              viewBox="0 0 521 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8542 5.78467H0V0.784668H10.8542V5.78467ZM54.2708 5.78467H32.5625V0.784668H54.2708V5.78467ZM97.6875 5.78467H75.9792V0.784668H97.6875V5.78467ZM141.104 5.78467H119.396V0.784668H141.104V5.78467ZM184.521 5.78467H162.813V0.784668H184.521V5.78467ZM227.938 5.78467H206.229V0.784668H227.938V5.78467ZM271.354 5.78467H249.646V0.784668H271.354V5.78467ZM314.771 5.78467H293.062V0.784668H314.771V5.78467ZM358.188 5.78467H336.479V0.784668H358.188V5.78467ZM401.604 5.78467H379.896V0.784668H401.604V5.78467ZM445.021 5.78467H423.313V0.784668H445.021V5.78467ZM488.438 5.78467H466.729V0.784668H488.438V5.78467ZM521 5.78467H510.146V0.784668H521V5.78467Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex gap-60 my-20 max-lg:flex-col max-lg:gap-20">
            <a href="https://noticebard.com/" target="_blank">
              <SponsorCard
                cardWidth={"300px"}
                cardHeight={"124.878px"}
                img={nblogo}
                imgWidth={250}
                imgAlt={"noticebard"}
                color={"#FCCF4B"}
                backgroundMt={"-7.5rem"}
                backgroundMl={"0.2rem"}
              />
            </a>
            {/* OTHER SPONSORS */}
            {/* COPY PASTE BELOW CODE */}
            {/* <a href="https://noticebard.com/" target="_blank">
              <SponsorCard
                cardWidth={"300px"}
                cardHeight={"124.878px"}
                img={nblogo}
                imgWidth={250}
                imgAlt={"noticebard"}
                color={"#FCCF4B"}
                backgroundMt={"-7.5rem"}
                backgroundMl={"0.2rem"}
              />
            </a> */}
          </div>
        </div>
      </div>
    
  );
};

export default Sponsor;
