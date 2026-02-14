import TopActor from "../../assets/TopActor.svg";
import BottomActor from "../../assets/BottomActor.svg";
import MainActor from "../../assets/MainActor.svg";

const WhyChoosImage = () => {
  return (
    <div className="relative flex aspect-square h-70 w-70 max-w-130 items-center justify-center rounded-r-full bg-[#FFE8E9] md:h-100 md:w-100 lg:h-105 lg:w-105 xl:h-120 xl:w-120">
      <div className="absolute top-1/2 -z-10 h-[90%] w-[80%] -translate-y-1/2 rounded-r-[100px]" />

      <div className="relative aspect-square h-64 w-64 overflow-hidden rounded-full border border-white shadow-xl md:h-85 md:w-85 lg:h-95 lg:w-95 xl:h-100 xl:w-100">
        <img
          src={MainActor}
          alt="Main Professional"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-2 aspect-square h-24 w-24 translate-x-4 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-32 sm:w-32 md:h-36 md:w-36">
        <img
          src={TopActor}
          alt="Top Creator"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute right-0 bottom-4 aspect-square h-24 w-24 translate-x-4 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-32 sm:w-32 md:h-36 md:w-36">
        <img
          src={BottomActor}
          alt="Bottom Creator"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute top-20 left-10 -rotate-12 transform text-pink-300 opacity-50 md:scale-150 lg:scale-[2]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12c3 0 3-4 6-4s3 4 6 4 3-4 6-4" />
        </svg>
      </div>
    </div>
  );
};

export default WhyChoosImage;
