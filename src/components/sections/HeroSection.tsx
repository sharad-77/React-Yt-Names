import {
  HeroSectionCircularLine as HeroSectionCirculerLine,
  HeroSectionMain,
  HeroSectionMainBG,
  Like as LikeSVG,
  LoudSpeaker as LoudSpeakarSVG,
} from "../../assets";

import Button from "../ui/Button";

function HeroSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-4 py-5 md:px-6 md:py-10 lg:flex-row">
      {/*Content Div*/}
      <div className="flex w-full flex-col items-start gap-4 text-start md:gap-6 lg:w-5xl">
        <div className="flex">
          {/*Div For The Red Line With Pointer*/}
          <div className="relative flex items-center">
            <div className="h-0.5 w-12 bg-primary"></div>
            <div className="-ml-1 h-3 w-3 rounded-full bg-primary"></div>
          </div>

          <p className="text-primary border-primary w-60 pl-3 text-sm leading-relaxed md:w-full md:text-base">
            Gain The Fame With The Perfect Channel Name!
          </p>
        </div>

        <h1 className="text-[33px] leading-relaxed font-extrabold tracking-normal text-(--font-primary-color) sm:text-[48px] md:leading-none lg:text-[56px]">
          <span className="rounded-2xl md:shadow-[inset_0_-12px_0_52px_#D4DDFF]">
            YTNames.com
          </span>{" "}
          Your Edge in YouTube Success
        </h1>

        <p className="w-full text-sm leading-loose text-(--font-secondary-color) md:text-base md:leading-relaxed">
          Are you ready for a channel name that stands out, sparks curiosity,
          and sets you on a path to fame? Don’t settle for the generic output
          from bland AI name generators. At YTNames.com, we craft truly
          memorable channel names backed by strategic branding expertise—so your
          YouTube presence takes off from day one.
        </p>

        {/*Div For Buttons*/}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button variant={"secondry"}>Pricing Starts From ₹29K</Button>
          <Button variant={"primary"}>Why Your Name Matters</Button>
        </div>
      </div>

      {/*Images Div*/}
      <div className="relative flex h-full w-full flex-row justify-end">
        {/* First Div: Left background icon - Hidden on small screens */}
        <div className="relative hidden h-full w-[8%] pt-20 lg:block">
          <img
            src={LoudSpeakarSVG}
            alt="LoudSpeaker"
            className="animate-pulse-slow h-auto w-full object-contain"
          />
        </div>

        {/* Second Div: Main content - Centered and responsive */}
        <div className="relative h-75 w-full md:h-112 lg:h-125 lg:w-[70%]">
          <img
            src={HeroSectionMainBG}
            alt="BackgroundBlob"
            className="animate-pulse-slow absolute inset-0 h-full w-full object-contain"
            style={{ zIndex: 1 }}
          />
          <img
            src={HeroSectionCirculerLine}
            alt="BackgroundLine"
            className="absolute inset-0 h-full w-full object-contain"
            style={{ zIndex: 2 }}
          />
          <img
            src={HeroSectionMain}
            alt="MainGirlImage"
            className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
            style={{ zIndex: 3 }}
          />
        </div>

        {/* Third Div: Right background icon - Hidden on small screens */}
        <div className="relative hidden h-full w-[8%] pt-20 lg:block">
          <img
            src={LikeSVG}
            alt="LikeIcon"
            className="animate-pulse-slow h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
