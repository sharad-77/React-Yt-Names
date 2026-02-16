import { TravelBlogger, SendPinkIcon } from "../../assets";

export function CTASection() {
  return (
    <div className="flex max-h-100 w-full max-w-7xl flex-col md:mx-10 md:my-10 lg:flex-row lg:items-center lg:justify-center">
      {/* Text content */}
      <div className="bg-tertiary flex flex-col gap-4 rounded-2xl p-3 py-6 pb-28 sm:gap-5 sm:py-8 sm:pb-36 md:w-300 md:max-w-180 lg:px-10 lg:py-12 lg:pb-10 xl:px-14 xl:py-16">
        <div className="w-full lg:flex lg:flex-row">
          <p className="text-3xl leading-snug font-bold sm:p-2 sm:text-center sm:text-4xl md:p-4 md:text-5xl lg:p-0 lg:text-left lg:text-4xl xl:text-5xl">
            Affordable Packages Starting At Just{" "}
            <span className="relative inline-block align-middle">
              <span className="bg-secondary absolute inset-0 -rotate-6 rounded-md"></span>
              <span className="bg-primary relative inline-block rotate-3 rounded-md border-2 border-white px-3 py-1.5 text-xl font-bold text-white sm:px-4 sm:py-2 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                ₹29K/-
              </span>
            </span>
          </p>
          <img src={SendPinkIcon} alt="SendPinkIcon" className="h-20 w-20 hidden lg:block " />
        </div>
        <div>
          <p className="text-sm leading-relaxed font-normal text-(--font-secondary-color) sm:px-5 sm:text-base md:text-lg lg:px-0 lg:text-base xl:w-150 xl:text-lg">
            Invest in the right name that distinguishes you from the sea of
            creators. Don't let an unremarkable or forgettable title hold you
            back—launch with confidence knowing your channel name is poised to
            leave a lasting impact.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="-mt-15 max-h-145 w-full px-3 sm:-mt-28 sm:px-6 lg:mt-0 lg:-ml-16 lg:w-125">
        <img
          src={TravelBlogger}
          alt="Travel Blogger"
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}


