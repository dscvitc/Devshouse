import Image from "next/image";
type trackProp = {
  trackName: string;
  trackLogo: string;
  trackText: string;
  color: string;
};

export default function SpecialPrizeCardImage({ trackName, trackLogo, trackText, color }: trackProp) {
  return (
    <div className="w-screen flex flex-row justify-center justify-self-center text-center items-center lg:w-screen">
      <div className="w-[300px] h-[300px] mr-[-290px] backdrop-opacity-100 bg-neutral-200 rounded-[10.61px] flex flex-col justify-center  lg:w-[450px] lg:mr-[-440px] p-1 xl:w-[560px] xl:mr-[-547px]">
        <div className="flex flex-row justify-center items-center">
          <Image src={trackLogo} alt={``} width={200} height={100} />
        </div>
        <div className="w-full max-h-[75.26px] mt-4 text-center text-black text-[16px] font-bold font-['Product Sans'] xl:text-[21px]">
          {trackText}
        </div>
      </div>
      <div className="w-[300px] h-[300px] rounded-[10.61px] border-2 border-white lg:w-[450px] xl:w-[560px] mt-[24px]" />
    </div>
  );
}
