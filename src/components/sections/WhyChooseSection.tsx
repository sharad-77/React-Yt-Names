import { FeatureCard } from "../ui/Cards";
import ThumbUp from "../../assets/ThumbUp.svg";
import GearInHand from "../../assets/GearInHand.svg";
import PersonWithStar from "../../assets/PersonWithStar.svg";
import Spekar from "../../assets/Speaker.svg";
import WhyChoosImage from "../others/WhyChoosImage";

function WhyChooseSection() {
  return (
    <div>
      <div className="flex h-full w-full max-w-7xl flex-col py-15 md:flex-row-reverse md:items-center">
        {/*Div For Contant*/}
        <div className="flex w-full flex-col gap-8 px-3 md:gap-4 lg:items-start">
          <p className="w-full text-start text-2xl font-bold text-(--font-primary-color) md:text-3xl">
            Why Choose a YouTube Channel Naming Consultant?
          </p>
          <div className="flex w-full flex-col gap-3 md:gap-0">
            <FeatureCard
              icon={ThumbUp}
              title="Impressive First Impression"
              description="Your channel name is the first thing viewers notice. Make it count."
            />
            <FeatureCard
              icon={Spekar}
              title="Strategic Branding"
              description="We blend creativity with onomastics (the science of naming) to deliver a name that resonates with your target audience"
            />
            <FeatureCard
              icon={GearInHand}
              title="Full Service Approach"
              description="From ensuring your chosen name is unique and memorable to securing a matching domain and trademarks , we cover every detail."
            />
            <FeatureCard
              icon={PersonWithStar}
              title="Proven Expertise"
              description="With over 5,000 real businesses named worldwide, our team has the insight and experience to give you a competitive edge."
            />
          </div>
        </div>

        {/*Div For Images*/}
        <div className="flex h-full w-full  pt-10 sm:pt-0">
          <WhyChoosImage />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSection;
