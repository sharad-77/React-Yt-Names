import {
  HandShake as HandShakeSVG,
  LineWithStar as LineWithStarSVG,
  SVGForGridLayout,
  SVGForSparkCard,
} from "../../assets";
import { YoutbeChannelNameReasonsCard } from "../ui/Cards";

export function ReasonsSection() {
  return (
    <div className="flex h-full max-h-550 w-full max-w-7xl flex-col items-center justify-center rounded-4xl bg-[#F0F5FF] xl:max-h-280 xl:pt-60">
      <div className="max:h-300 grid h-full w-full grid-cols-1 place-items-center gap-3 p-3 md:grid-cols-2 md:gap-8 md:p-5 lg:p-20 xl:grid-cols-3">
        <div className="flex w-auto items-center p-3 text-3xl font-bold text-(--font-primary-color) md:w-100 md:text-3xl">
          Here are five top reasons why YouTube channel names matter
        </div>
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
        <YoutbeChannelNameReasonsCard
          icon={HandShakeSVG}
          title="First Impression & Brand Identity"
          description="A channel name often serves as the very first touchpoint for viewers. It instantly communicates what your channel is about, conveying your brand’s identity, tone, and value proposition. This helps your channel stand out among millions of others on the platform."
        />
      </div>
      <div className="flex flex-col xl:flex-row sm:justify-center sm:items-center">
        <div className="hidden xl:block xl:pb-30">
          <img src={LineWithStarSVG} alt="LineWithStarSVG" />
        </div>
        <div className="bg-secondary mx-3 flex h-140 w-auto max-w-250 items-center justify-center rounded-4xl border-8 border-white p-5 text-white sm:m-5 md:h-full md:w-full lg:px-15">
          <div className="relative flex flex-col items-center justify-center gap-5">
            <img
              src={SVGForSparkCard}
              alt="Background Line"
              className="absolute inset-0 z-0 h-full w-full object-contain opacity-100"
            />
            <p className="z-10 text-2xl font-bold md:text-5xl">
              A Spark of Glory
            </p>

            <p className="z-10 text-center text-base">
              A seed of vision, a dream to proclaim, Your voice in the making,
              ready to flame. A stage awaits, where you’ll rise to acclaim Gain
              the fame with the perfect channel name
            </p>

            <p className="z-10 text-center text-base">
              In endless scrolls of clicks and views, A single spark can banish
              the blues. We craft each word, we shape each vow, So brilliance
              shines upon you now.
            </p>

            <p className="z-10 text-center text-base">
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
