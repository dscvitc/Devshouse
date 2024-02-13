import Divider from "./Divider";
import MainPrize from "./MainPrizeCard";
import SpecialPrize from "./SpecialPrizeCardImage";
import Image from "next/image";
import cybrance from "../../../public/sponsors/cybrance.png";
import replit from "../../../public/sponsors/replit.png";
import wolfram from "../../../public/sponsors/wolfram.png";
import polygon from "../../../public/sponsors/polygon.png";
import iblogo from "../../../public/sponsors/iblogotransparent.png";
import bestgirls from "../../../public/images/prizes/best_all_girls_team.svg";
import bestfresher from "../../../public/images/prizes/best_fresher_team.svg";
import solana from "../../../public/sponsors/solana.png";
import quillAudits from "../../../public/sponsors/quillaudits.png";
import beeceptor from "../../../public/sponsors/beeceptor.png";
import echo3D from "../../../public/sponsors/echo3d.png";
import verbwire from "../../../public/sponsors/verbwire.png";
import aops from "../../../public/sponsors/aops.png";
export default function Prizes() {
  const PrizeInfo = [
    //Gold, silver and bronze images
    {
      src: "/images/prizes/gold.png",
      width: 485,
      height: 485,
      price: "₹ 25,000",
      alt: "1st",
    },
    {
      src: "/images/prizes/silver.png",
      width: 329,
      height: 329,
      price: "₹ 15,000",
      alt: "2nd",
    },
    {
      src: "/images/prizes/bronze.png",
      width: 312,
      height: 312,
      price: "₹ 10,000",
      alt: "3rd",
    },
  ];
  // const tracks = [
  //   //Individual prize tracks
  //   {
  //     trackName: "Company A",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText: "Innovative financial system solutions earn premium plans from Company A.",
  //     color: "#C10929",
  //   },
  //   {
  //     trackName: "Company B",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText: "Leading eco-friendly tech solutions win a 1-year Wolfram|Alpha Pro subscription.",
  //     color: "#FF5B62",
  //   },
  //   {
  //     trackName: "Company C",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText: "Winning team for efficient developer tools gets 90-day unrestricted Balsamic Cloud access.",
  //     color: "#98098A",
  //   },
  //   {
  //     trackName: "Company D",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText:
  //       "Cutting-edge hardware innovations, from IoT to embedded systems, pushing tech boundaries: Prize - INR 5,000.",
  //     color: "#42000A",
  //   },
  //   {
  //     trackName: "Company E",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText: "Project promoting inclusivity through tech wins free therapist sessions from BetterHelp.",
  //     color: "#374391",
  //   },
  //   {
  //     trackName: "Company F",
  //     trackLogo: "/images/icons-track-prize.png",
  //     trackText: "Top open-source projects fostering transparent and collaborative tech development win INR 10,000.",
  //     color: "#07A158",
  //   },
  // ];
  const tracks: any[] = [

    {
      trackName: "Polygon",
      trackLogo: polygon,
      trackText: "Best hack built on Ethereum: $150 & \nEthereum + Polygon: $200",
      color: "#07A158",
    },
    {
      trackName: "Solana",
      trackLogo: solana,
      trackText: "$100 for best beginners project, $250 for best intermediate project, $500 for the best advanced project",
      color: "#07A158",
    },
    
{
    trackName: "QuillAudits",
    trackLogo: quillAudits,
    trackText: "Wagsi grants worth $1500, Schwags for top developers using Quillcheck API/Quillai API, Best projects can pitch their projects to our incubator.",
    color: "#07A158",
  },

    {
      trackName: "Replit",
      trackLogo: replit,
      trackText: "Winning Project deployed on Replit: $50",
    },
    {
      trackName: "Wolfram",
      trackLogo: wolfram,
      trackText:
        "Top 6 teams receive One Year subscription to Wolfram|One Personal Edition & Wolfram|Alpha Pro each worth $375, 1 Month Trial for Wolfram|One worth $25.00 for all participants ",
      color: "#07A158",
    },
    {
      trackName: "IB",
      trackLogo: iblogo,
      trackText:
        "VOUCHERS WORTH - 100% off to winners and runner-up, 90% off to participants",
      color: "#07A158",
    },
    {
      trackName: "Beeceptor",
      trackLogo: beeceptor,
      trackText:
        "Free 1 year Team Plan for winning team. All participants get $25 credit to subscribe to the Team plan.",
      color: "#07A158",
    },
    {
      trackName: "echo3D",
      trackLogo: echo3D,
      trackText:"1-month Pro tier subscription as a free resource to all participants ($99 value per sign up)",
      color: "#07A158",
    },
    {
      trackName: "Cybrance",
      trackLogo: cybrance,
      trackText: "1 month free web hosting for all participants.",
      color: "#07A158",
    },

    {
      trackName: "Verbwire",
      trackLogo: verbwire,
      trackText: "Up to $5,000 in Premium API Credits for Most Innovative Use Of Verbwire API up to 20 teams.One-month free Verbwire Starter Subscription to all participants.",
      color: "#07A158",
    },
    
    {
      trackName: "Art of Problem Solving",
      trackLogo: aops,
      trackText: "Top team get $25 coupons",
      color: "#07A158",
    },

  ];
  return (
    <section
      id="prizes"
      className="w-full flex flex-col justify-center items-center overflow-hidden mb-8"
    >
      <h1 className="text-white text-[35px] font-bold font-['Space Grotesk'] mt-6 sm:text-[40px] md:txt[45px] lg:[54px]">
        Prizes
      </h1>
      <Divider heading="Top 3 Overall" mt="50px" mb="20px" />
      <div className="flex flex-row justify-center items-end md:px-12 md:gap-4">
        <div className="w-[35%]">
          <MainPrize
            src={PrizeInfo[1].src} // Gold prize
            width={PrizeInfo[1].width}
            height={PrizeInfo[1].height}
            price={PrizeInfo[1].price}
            alt={PrizeInfo[1].alt}
          />
        </div>
        <div className="w-[40%]">
          <MainPrize
            src={PrizeInfo[0].src} // Silver prize
            width={PrizeInfo[0].width}
            height={PrizeInfo[0].height}
            price={PrizeInfo[0].price}
            alt={PrizeInfo[0].alt}
          />
        </div>
        <div className="w-[30%]">
          <MainPrize
            src={PrizeInfo[2].src} // Bronze prize
            width={PrizeInfo[2].width}
            height={PrizeInfo[2].height}
            price={PrizeInfo[2].price}
            alt={PrizeInfo[2].alt}
          />
        </div>
      </div>
      <Divider heading="Exclusive Swag Pack" mt="70px" mb="70px" />
      <div className="flex flex-col  sm:flex-row justify-evenly itmes-center  ">
        {/* <div className="w-[90%] md:w-[35%] m-auto">
          <Image
            src={bestgirls}
            width={702}
            height={445}
            alt="Girls best team"
          />
        </div> */}
        <div className="max-w-96">
          <Image
            src={bestfresher}
            width={702}
            height={445}
            alt="Fresher best team"
          />
        </div>
      </div>

      {tracks.length > 0 ? (
        <>
          <Divider heading="Special Track Prizes" mt="70px" mb="70px" />
          <div className="w-full px-12 grid grid-cols-1 gap-7 mb-4 justify-center items-center sm:grid-cols-2 sm:grid-rows-3">
            {tracks.map((track) => (
              <SpecialPrize
                key={track.trackName}
                trackName={track.trackName}
                trackLogo={track.trackLogo}
                trackText={track.trackText}
                color={track.color}
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
