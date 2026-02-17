import {
  LineWithStar as LineWithStarSVG,
  WavyLines as VectorSVG,
} from "../assets/svgs";
import { Header, Footer } from "./layout";
import {
  WhyChooseSection,
  ClauserSection,
  CTASection,
  HeroSection,
  ReasonsSection,
  QNASection,
  ContactSection,
} from "./sections";

function HomePage() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        {/*Div For Header And HeroSection Along With Side SVGS*/}
        <div className="bg-bluewhitebg flex w-full flex-col lg:flex-row lg:items-start lg:justify-center">
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

          <div className="flex h-full w-full flex-col items-center justify-start gap-5 lg:mt-4">
            <Header />
            <HeroSection />
          </div>

          {/* Right spacer to balance the left SVG column for perfect centering */}
          <div className="hidden w-[6%] lg:block" />
        </div>

        {/*Why Choose Seciton*/}
        <div className="flex h-full w-full items-center justify-center md:pr-4">
          <WhyChooseSection />
        </div>

        {/*Reasons why YouTube channel names section*/}
        <div className="mt-10 mb-20 flex h-full w-full justify-center md:mt-0 lg:mb-40">
          <ReasonsSection />
        </div>

        {/*Clauser */}
        <div className="flex h-full w-full justify-center xl:mt-40">
          <ClauserSection />
        </div>

        {/*CTA Section*/}
        <div className="flex h-full w-full justify-center lg:mt-10 lg:mb-20">
          <CTASection />
        </div>

        {/*QNA Section */}
        <div className="mt-20 flex h-full w-full flex-col justify-center sm:items-center sm:px-5 lg:mt-0">
          <QNASection />
        </div>

        {/*Contact Section */}
        <div className="flex h-full w-full flex-col justify-center sm:items-center sm:px-5 lg:py-10">
          <ContactSection />
        </div>

        {/*Footer Section*/}
        <div className="flex h-full w-full items-center justify-center md:mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
