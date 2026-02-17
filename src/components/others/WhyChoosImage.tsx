import {
  BottomActor,
  MainActor,
  TopActor,
  LeafDecoration,
} from "../../assets/svgs";

const WhyChoosImage = () => {
  return (
    <div className="bg-tertiary relative flex h-70 w-[95%] items-center justify-end rounded-r-full pr-4 sm:h-90 sm:pr-8 md:h-100 lg:h-120 lg:w-full lg:pr-4">
      <div className="relative flex aspect-square h-[85%] items-center justify-center">
        <div className="relative aspect-square h-full overflow-hidden rounded-full border border-white shadow-xl">
          <img
            src={MainActor}
            alt="Main Professional"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -top-[5%] -right-[5%] aspect-square h-[35%] overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img
            src={TopActor}
            alt="Top Creator"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -right-[5%] -bottom-[5%] aspect-square h-[35%] overflow-hidden rounded-full border-4 border-white shadow-lg">
          <img
            src={BottomActor}
            alt="Bottom Creator"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -top-[5%] -left-[30%] -rotate-12 transform">
          <img
            src={LeafDecoration}
            alt="Leaf"
            className="w-12 opacity-80 drop-shadow-md sm:w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoosImage;
