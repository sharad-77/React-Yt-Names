import {
  BottomActor,
  LeafDecoration,
  MainActor,
  TopActor,
} from "../../assets/svgs";

const WhyChoosImage = () => {
  return (
    <div className="bg-tertiary relative flex h-70 w-[95%] items-center justify-end rounded-r-full pr-6 sm:h-90 sm:pr-10 md:h-100 md:pr-12 lg:h-120 lg:w-full lg:pr-8">
      <div className="relative flex aspect-square h-[90%] items-center justify-center">
        <div className="relative aspect-square h-full overflow-hidden rounded-full border border-white shadow-xl">
          <img
            src={MainActor}
            alt="Main Professional"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -top-[3%] -right-[3%] aspect-square h-[35%] overflow-hidden rounded-full border-2 border-white shadow-lg sm:border-4">
          <img
            src={TopActor}
            alt="Top Creator"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -right-[3%] -bottom-[3%] aspect-square h-[35%] overflow-hidden rounded-full border-2 border-white shadow-lg sm:border-4">
          <img
            src={BottomActor}
            alt="Bottom Creator"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -top-[5%] -left-[20%] -rotate-12 transform sm:-left-[25%]">
          <img
            src={LeafDecoration}
            alt="Leaf"
            className="w-10 opacity-80 drop-shadow-md sm:w-14 md:w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoosImage;
