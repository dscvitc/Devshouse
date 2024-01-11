import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import FAQData from "./FAQData";
import { Button } from '@mantine/core';
import { Space_Grotesk } from 'next/font/google';
import RedBubble from "../../public/green bubbles.svg";
import YellowBubble from "../../public/green bubbles (1).svg";
import BlueBubble from "../../public/green bubbles (2).svg";
import GreenBubble from "../../public/green bubbles (3).svg";
import SponsorDecor from "../../public/Group 43.svg"

const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const Space400 = Space_Grotesk({ weight: "400", subsets: ["latin"] });

const FAQ = () => {
  const colorClasses = {
    red: "bg-red-300",
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
  };
  const imageClasses = {
    red: RedBubble,
    blue: BlueBubble,
    yellow: YellowBubble,
    green: GreenBubble,
  };
  const items = FAQData.map((props, i) => (
    <Accordion type='single' collapsible key={props.key}>
      <AccordionItem className="rounded-xl border-bottom bg-[#18191b]" value={props.question}>
        <AccordionTrigger className={`text-white text-left hover:bg-inherit`}>
          <div className={`flex  ${Space.className} md:text-2xl text-[0.8rem] items-center`}>
            <Image
              src={imageClasses[props.color as keyof typeof imageClasses]}
              alt="bubbles"
              className="border-bottom rounded-xl scale-75 origin-bottom-left"
            />
            {props.question}
          </div>
        </AccordionTrigger>
        <AccordionContent className={`${colorClasses[props.color as keyof typeof colorClasses]} rounded-xl p-5`}>
          <p className={`${Space.className} pl-2 md:text-lg text-[0.8rem] text-black`}>{props.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));

  return (
    <>
      <div id="faqs" className="flex justify-center bg-[url('../../public/bg-FAQ.svg')] items-center bg-bg-black pb-20 pt-10">
        <div className="w-[90%] md:w-[80%] h-auto">
          <h1 className={`text-5xl ${Space.className} text-white text-center mb-14`}>FAQs</h1>
          <Accordion type="single" className="space-y-4">
            {items}
          </Accordion>
        </div>
      </div>
      <div className={`bg-[url('../../public/bg-sponsor-us.svg')] md:p-14 p-8 md:pl-32 space-y-8 text-white text-left ${Space.className}`} id='sponsor-us'>
        <div className="flex">
        <h1 className="md:text-5xl text-2xl">Let&apos;s Host Together</h1>
        <Image
        src={SponsorDecor}
        alt="Sponsor Heading Decoration"
        className="-translate-y-7 md:scale-100 scale-75"
        />
        </div>
        <div className={`flex md:text-3xl  gap-12 ${Space400.className}`}>
          <div className="pr-6">
          <p>Elevate your brand, be part of the tech revolution!</p>
          <p>Write to <b>collaborate</b> with us at: sponsorship@devshouse.tech</p>
          </div>
          <Button size="xl" className="button-Sponsor">
             Sponsor Us
          </Button>
        </div>
      </div>
    </>
  );
};

export default FAQ;