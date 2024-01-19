import React from "react";
import Image from "next/image";
import timelineonline from "../../public/TIMELINEONLINE.svg";
export default function TimelineOnline() {
  return (
    <div id="timeline" className="flex flex-col items-center justify-center w-full my-8">
      <h1 className="text-white text-center text-5xl font-bold px-10">Timeline</h1>
      <div className="flex h-1/2">
        <Image src={timelineonline} alt="timeline" className="w-full" width={1000} height={1000} />
      </div>
    </div>
  );
}
