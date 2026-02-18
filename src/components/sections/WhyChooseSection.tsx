import { GearInHand, PersonWithStar, Speaker as Spekar, ThumbUp } from '../../assets/svgs';
import WhyChoosImage from '../others/WhyChoosImage';
import { FeatureCard } from '../ui/Cards';

export function WhyChooseSection() {
  return (
    <section className="w-full overflow-hidden py-5 sm:py-8 md:py-10">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-10">
        <div className="flex w-full justify-start lg:w-1/2">
          <div className="w-full max-w-160 px-4 sm:px-6 md:px-10 md:py-10">
            <p className="w-full text-start text-[30px] font-bold text-(--font-primary-color) md:text-3xl">
              Why Choose a YouTube Channel Naming Consultant?
            </p>
            <div className="mt-8 flex w-full flex-col gap-6 sm:gap-10">
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
        </div>

        <div className="mt-10 flex h-full w-full md:mt-15 lg:mt-0 lg:w-1/2">
          <WhyChoosImage />
        </div>
      </div>
    </section>
  );
}
