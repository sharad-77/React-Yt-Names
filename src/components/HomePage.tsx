import { LineWithStar as LineWithStarSVG, WavyLines as VectorSVG } from "../assets";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import Header from "./layout/Header";
import ClauserSection from "./sections/ClauserSection";
import CTASection from "./sections/CTASection";
import HeroSection from "./sections/HeroSection";
import ReasonsSection from "./sections/ReasonSection";

function HomePage() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        {/*Div For Header And HeroSection Along With Side SVGS*/}
        <div className="flex w-full flex-col bg-[#F0F5FF] lg:flex-row lg:items-start lg:justify-center ">
          <div className="mt-10 hidden h-150 w-[6%] flex-col items-center justify-between py-5 pl-5 lg:flex">
            <img
              src={VectorSVG}
              alt="LoudSpeaker"
              className="animate-pulse-slow h-auto w-full object-contain"
            />
            <img
              src={LineWithStarSVG}
              alt="LineWithStarSVG"
              className="animate-pulse-slow h-auto w-full object-contain"
            />
          </div>

          <div className="flex h-full w-full flex-col items-center justify-start gap-5 md:mt-4">
            <Header />
            <HeroSection />
          </div>

          {/* Right spacer to balance the left SVG column for perfect centering */}
          <div className="hidden w-[6%] lg:block" />
        </div>

        {/*Why Choose Seciton*/}
        <div className="flex h-full w-full items-center justify-center md:pr-4 lg:pt-12">
          <WhyChooseSection />
        </div>

        {/*Reasons why YouTube channel names section*/}
        <div className="mb-40 flex h-full w-full justify-center ">
          <ReasonsSection />
        </div>

        {/*Clauser */}
        <div className="xl:mt-40 flex h-full w-full justify-center ">
          <ClauserSection />
        </div>

        {/*CTA Section*/}
        <div className="xl:mt-40 flex h-full w-full justify-center ">
          <CTASection />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
