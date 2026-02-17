import {
  HandShake as HandShakeSVG,
  LineWithStar as LineWithStarSVG,
  SVGForGridLayout,
  SVGForSparkCard,
} from "../../assets/svgs";
import { YoutbeChannelNameReasonsCard } from "../ui/Cards";

export function ReasonsSection() {
  return (
    <div className="bg-bluewhitebg flex h-full max-h-550 w-full max-w-7xl flex-col items-center justify-center rounded-4xl sm:pt-10 xl:max-h-280 xl:pt-40">
      <div className="max:h-300 grid h-full w-full grid-cols-1 place-items-center gap-5 p-3 md:grid-cols-2 lg:p-20 xl:grid-cols-3 xl:gap-10">
        <div className="flex w-auto items-center p-3 py-5 text-3xl font-bold text-(--font-primary-color) sm:py-0 md:w-100 md:text-3xl xl:w-80 xl:text-4xl">
          Here are five top reasons why YouTube channel names matter
        </div>
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="Searchability & Discoverability"
          description="YouTube is the world’s second-largest search engine. A clear, memorable, and keyword-friendly name can improve visibility, making it easier for potential viewers to find and remember your channel. This is especially crucial if your channel’s content focuses on a particular niche or topic."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="Audience Connection"
          description="A name that resonates with your target audience encourages them to check out your content and become loyal subscribers. It sets the tone for the kind of community you want to build—whether it’s educational, entertaining, lifestyle-focused, or something else."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="Brand Consistency"
          description="An effective channel name aligns with your broader personal or business brand. Consistency across platforms (like your website, social media, and YouTube) fosters recognition and trust, helping viewers link all your content and services under one cohesive identity."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="Professionalism & Memorability"
          description="A well-chosen name creates an impression of professionalism and legitimacy. If people can easily remember and pronounce your channel name, they’re more likely to talk about it, share links, and recommend it to others—fueling organic growth and boosting your channel’s authority."
        />
      </div>

      <div className="flex flex-col sm:items-center sm:justify-center xl:flex-row">
        <div className="hidden xl:block xl:pb-30">
          <img src={LineWithStarSVG} alt="LineWithStarSVG" />
        </div>
        <div className="bg-secondary mx-3 mt-15 flex h-140 w-auto max-w-250 items-center justify-center rounded-4xl border-4 border-white p-5 text-white sm:m-5 sm:border-8 md:h-full md:w-full lg:mt-0 lg:px-15">
          <div className="relative flex flex-col items-center justify-center gap-5">
            <img
              src={SVGForSparkCard}
              alt="Background Line"
              className="absolute inset-0 z-0 h-full w-full object-contain opacity-100"
            />
            <p className="z-10 text-3xl font-bold text-[#F0F0F0] md:text-5xl">
              A Spark of Glory
            </p>

            <p className="z-10 text-center text-base leading-7 text-[#F0F0F0]">
              A seed of vision, a dream to proclaim, Your voice in thess making,
              ready to flame. A stage awaits, where you’ll rise to acclaim Gain
              the fame with the perfect channel name
            </p>

            <p className="z-10 text-center text-base leading-7 text-[#F0F0F0]">
              In endless scrolls of clicks and views, A single spark can banish
              the blues. We craft each word, we shape each vow, So brilliance
              shines upon you now.
            </p>

            <p className="z-10 text-center text-base leading-7 text-[#F0F0F0]">
              Let waves of watchers turn their gaze, As your chosen name carves
              brand-new ways. Seize your moment, claim your throne A perfect
              name to call your own.
            </p>
          </div>
        </div>
        <div className="hidden xl:block xl:pb-30">
          <img src={SVGForGridLayout} alt="GridSVG" />
        </div>
      </div>
    </div>
  );
}
