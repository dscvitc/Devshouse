import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import FAQData from "./FAQData";
import { Space_Grotesk } from 'next/font/google';
import RedBubble from "../../public/green bubbles.svg";
import YellowBubble from "../../public/green bubbles (1).svg";
import BlueBubble from "../../public/green bubbles (2).svg";
import GreenBubble from "../../public/green bubbles (3).svg";

const Space = Space_Grotesk({ weight: "700", subsets: ["latin"] });

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
          <div className={`flex gap-4 ${Space.className} text-2xl items-center`}>
          <Image
            src={imageClasses[props.color as keyof typeof imageClasses]}
            alt="bubbles"
            className="border-bottom rounded-xl"
            />
          {props.question}
            </div>
        </AccordionTrigger>
        <AccordionContent className={`${colorClasses[props.color as keyof typeof colorClasses]} rounded-xl p-5`}>
          <p className={`${Space.className} pl-2 text-lg`}>{props.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ));

  return (
    <div id="faqs" className="flex justify-center items-center bg-bg-black pt-10">
      <div className="bg-bg-black w-[80%] h-auto">
      <h1 className={`text-5xl ${Space.className} text-white text-center mb-14`}>FAQs</h1>
          <Accordion type="single" className="space-y-4">
            {items}
          </Accordion>
      </div>
    </div>
  );
};

export default FAQ;