import HeroSectionCirculerLine from '../../assets/HeroSectionCirculerLine.svg';
import HeroSectionMain from '../../assets/HeroSectionMain.svg';
import HeroSectionMainBG from '../../assets/HeroSectionMainBG.svg';
import LikeSVG from '../../assets/Like.svg';
import LoudSpeakarSVG from '../../assets/LoudSpeaker.svg';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-10 gap-12">
      <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-start">
        <p className="text-primary text-sm md:text-base font-semibold leading-none border-primary pl-3">
          Gain The Fame With The Perfect Channel Name!
        </p>

        <h1 className="text-[33px] md:text-[48px] lg:text-[56px] font-extrabold text-(--font-primary-color) leading-[1.1] tracking-tight">
          YTNames.com Your Edge in YouTube Success
        </h1>

        <p className="text-(--font-secondary-color) text-sm md:text-base leading-relaxed max-w-xl">
          Are you ready for a channel name that stands out, sparks curiosity, and sets you on a path
          to fame? Don't settle for the generic output from bland AI name generators. At
          YTNames.com, we craft truly memorable channel names backed by strategic branding
          expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
          <Button variant={'secondry'} size={'sm'} className="w-full sm:w-64 font-bold py-4">
            Pricing Starts From ₹29K
          </Button>
          <Button variant={'primary'} size={'sm'} className="w-full sm:w-64 font-bold py-4">
            Why Your Name Matters
          </Button>
        </div>
      </div>

      <div className="flex h-full w-full flex-row justify-center relative">
        {/* First Div: Left background icon - Hidden on small screens */}
        <div className="relative hidden lg:block h-full w-[8%] pt-20">
          <img
            src={LoudSpeakarSVG}
            alt="LoudSpeaker"
            className="w-full h-auto object-contain animate-pulse-slow"
          />
        </div>

        {/* Second Div: Main content - Centered and responsive */}
        <div className="relative w-full lg:w-[70%] h-75 md:h-112 lg:h-125">
          <img
            src={HeroSectionMainBG}
            alt="BackgroundBlob"
            className="absolute inset-0 w-full h-full object-contain animate-pulse-slow"
            style={{ zIndex: 1 }}
          />
          <img
            src={HeroSectionCirculerLine}
            alt="BackgroundLine"
            className="absolute inset-0 w-full h-full object-contain"
            style={{ zIndex: 2 }}
          />
          <img
            src={HeroSectionMain}
            alt="MainGirlImage"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            style={{ zIndex: 3 }}
          />
        </div>

        {/* Third Div: Right background icon - Hidden on small screens */}
        <div className="relative hidden lg:block h-full w-[8%] pt-20">
          <img
            src={LikeSVG}
            alt="LikeIcon"
            className="w-full h-auto object-contain animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
