import Divider from "./Divider";
import MainPrize from "./MainPrizeCard";
import SpecialPrize from "./SpecialPrizeCard";
export default function Prizes() {
  const PrizeInfo = [
    //Gold, silver and bronze images
    {
      src: "/images/prizes/silver.png",
      width: 329,
      height: 329,
      price: "To be announced...",
      alt: "2nd",
    },
    {
      src: "/images/prizes/gold.png",
      width: 485,
      height: 485,
      price: "To be announced...",
      alt: "1st",
    },
    {
      src: "/images/prizes/bronze.png",
      width: 312,
      height: 312,
      price: "To be announced...",
      alt: "3rd",
    },
  ];
  const tracks = [
    //Individual prize tracks
    {
      trackName: "Company A",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Innovative financial system solutions earn premium plans from Company A.",
      color: "#C10929",
    },
    {
      trackName: "Company B",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Leading eco-friendly tech solutions win a 1-year Wolfram|Alpha Pro subscription.",
      color: "#FF5B62",
    },
    {
      trackName: "Company C",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Winning team for efficient developer tools gets 90-day unrestricted Balsamic Cloud access.",
      color: "#98098A",
    },
    {
      trackName: "Company D",
      trackLogo: "/images/icons-track-prize.png",
      trackText:
        "Cutting-edge hardware innovations, from IoT to embedded systems, pushing tech boundaries: Prize - INR 5,000.",
      color: "#42000A",
    },
    {
      trackName: "Company E",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Project promoting inclusivity through tech wins free therapist sessions from BetterHelp.",
      color: "#374391",
    },
    {
      trackName: "Company F",
      trackLogo: "/images/icons-track-prize.png",
      trackText: "Top open-source projects fostering transparent and collaborative tech development win INR 10,000.",
      color: "#07A158",
    },
  ];
  return (
    <section
      className="w-screen flex flex-col justify-center items-center overflow-hidden mb-8"
      style={{ backgroundImage: `url('/images/bgLayer.png')` }}
    >
      <h1 className="text-white text-[35px] font-bold font-['Space Grotesk'] mt-6 sm:text-[40px] md:txt[45px] lg:[54px]">
        Prizes
      </h1>
      <Divider heading="Top 3 Overall" mt="50px" mb="20px" />
      <div className="flex flex-row justify-center">
        {PrizeInfo.map((info) => (
          <MainPrize
            key={info.price}
            src={info.src}
            width={info.width}
            height={info.height}
            price={info.price}
            alt={info.alt}
          />
        ))}
      </div>
      <Divider heading="Special Track Prizes" mt="70px" mb="70px" />
      <div className="grid grid-cols-1 grid-rows-6 gap-7 mb-4 justify-center items-center sm:grid-cols-2 sm:grid-rows-3">
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
    </section>
  );
}
