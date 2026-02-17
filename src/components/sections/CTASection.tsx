import { SendPinkIcon, TravelBlogger } from "../../assets/svgs";

export function CTASection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center lg:flex-row lg:justify-center lg:px-10">
      {/* 1. Text Content Card */}
      <div className="bg-tertiary flex flex-col gap-6 rounded-[30px] p-5 pt-10 pb-44 sm:pb-32 md:max-w-2xl md:items-center lg:w-auto lg:max-w-3xl lg:flex-row lg:px-12 lg:py-12">
        <div className="flex w-full flex-col lg:w-3/5 lg:justify-center">
          <div className="flex flex-col sm:px-10 lg:px-0">
            <h2 className="w-full text-left text-[26px] leading-tight font-bold sm:text-5xl lg:text-3xl">
              Affordable Packages Starting At Just{" "}
              <span className="relative ml-2 inline-block align-middle">
                <span className="bg-secondary absolute inset-0 -rotate-6 rounded-md"></span>
                <span className="bg-primary relative inline-block rotate-3 rounded-md border-2 border-white px-4 py-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                  ₹29K/-
                </span>
              </span>
            </h2>
          </div>

          {/* Description Paragraph */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-(--font-secondary-color) sm:pl-8 sm:text-lg lg:pl-0 lg:text-base xl:text-lg">
            Invest in the right name that distinguishes you from the sea of
            creators. Don&apos;t let an unremarkable or forgettable title hold
            you back—launch with confidence.
          </p>
        </div>

        {/* Desktop-only Icon */}
        <img
          src={SendPinkIcon}
          alt="Decoration"
          className="-mr-10 hidden lg:block xl:h-15 xl:w-15"
        />
      </div>

      {/* 2. Image Container */}
      <div className="-mt-35 w-full max-w-sm px-4 sm:-mt-24 md:max-w-md lg:mt-0 lg:-ml-54 lg:w-100">
        <img
          src={TravelBlogger}
          alt="Travel Blogger"
          className="h-auto w-full rounded-2xl object-cover shadow-xl"
        />
      </div>
    </div>
  );
}
