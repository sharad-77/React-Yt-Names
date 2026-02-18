import {
  HeroSectionCircularLine as HeroSectionCirculerLine,
  HeroSectionMain,
  HeroSectionMainBG,
  Like as LikeSVG,
  LineWithStar as LineWithStarSVG,
  LoudSpeaker as LoudSpeakarSVG,
  PlayButtonIcon2,
  SVGForGridLayout,
  WavyLines as VectorSVG,
} from '../../assets/svgs';

import Button from '../ui/Button';

export function HeroSection() {
  return (
    <section className="flex w-full lg:items-start lg:justify-center">
      {/* Left decorative SVGs */}
      <div className="mt-10 hidden h-150 w-[6%] flex-col items-center justify-between py-5 pl-5 lg:flex">
        <img
          src={VectorSVG}
          alt="WavyLines"
          className="animate-pulse-slow h-auto w-full object-contain"
        />
        <img
          src={LineWithStarSVG}
          alt="LineWithStar"
          className="animate-pulse-slow h-auto w-full object-contain"
        />
      </div>

      <div className="w-full px-4 py-8 sm:py-10 lg:px-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="flex w-full flex-col items-start gap-4 text-start md:items-center md:gap-6 md:text-center lg:w-1/2 lg:items-start lg:text-start">
            <div className="flex items-center md:text-center">
              <div className="relative flex items-center">
                <div className="bg-primary h-0.5 w-12"></div>
                <div className="bg-primary -ml-1 h-3 w-3 rounded-full"></div>
              </div>
              <p className="text-primary border-primary w-auto pl-3 text-base leading-relaxed">
                Gain The Fame With The Perfect Channel Name!
              </p>
            </div>

            <h1 className="w-auto text-[40px] leading-14 font-extrabold tracking-normal text-(--font-primary-color) sm:text-[48px] md:leading-none xl:text-[56px]">
              <span className="rounded-2xl md:shadow-[inset_0_-12px_0_52px_#D4DDFF]">
                YTNames.com
              </span>{' '}
              Your Edge in YouTube Success
            </h1>

            <p className="w-auto px-2 text-base leading-7.5 font-normal text-(--font-secondary-color) md:text-base md:leading-relaxed">
              Are you ready for a channel name that stands out, sparks curiosity, and sets you on a
              path to fame? Don&apos; t settle for the generic output from bland AI name generators.
              At YTNames.com, we craft truly memorable channel names backed by strategic branding
              expertise—so your YouTube presence takes off from day one.
            </p>

            <div className="mt-6 flex w-full flex-col justify-center gap-4 sm:flex-row md:mt-0 lg:justify-start">
              <Button variant={'secondry'}>Pricing Starts From ₹29K</Button>
              <Button variant={'primary'}>Why Your Name Matters</Button>
            </div>
          </div>

          <div className="relative flex w-full items-start justify-center pb-7 lg:w-1/2 lg:justify-end lg:pb-0">
            <div className="relative hidden w-[8%] shrink-0 pt-20 lg:block">
              <img
                src={LikeSVG}
                alt="LikeIcon"
                className="animate-pulse-slow h-auto w-full object-contain"
              />
              <div className="mt-50 -ml-10 h-36 w-36">
                <img src={SVGForGridLayout} alt="SVGForGridLayoutSVG" className="h-full w-full" />
              </div>
            </div>

            <div className="relative h-75 w-full md:h-112 lg:ml-10 lg:h-125 lg:w-[84%]">
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
              <div
                className="animate-pulse-slow absolute top-1/2 left-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-10 border-white/30 bg-white/30 shadow-2xl backdrop-blur-md transition-transform hover:scale-110 sm:h-28 sm:w-28"
                style={{ zIndex: 4 }}
              >
                <img
                  src={PlayButtonIcon2}
                  alt="PlayButtonIcon2"
                  className="h-6 w-6 sm:h-12 sm:w-12"
                />
              </div>
            </div>

            <div className="relative hidden w-[8%] shrink-0 pt-20 lg:block">
              <img
                src={LoudSpeakarSVG}
                alt="LoudSpeaker"
                className="animate-pulse-slow h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right spacer to balance the left SVG column */}
      <div className="hidden w-[6%] lg:block" />
    </section>
  );
}
