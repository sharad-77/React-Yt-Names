import { TravelBlogger } from "../../assets";

function CTASection() {
    return (
        <div className="flex flex-col w-full max-h-100 lg:flex-row lg:items-center lg:justify-center md:my-10 md:mx-10 max-w-7xl">
            {/* Text content */}
            <div className="bg-tertiary flex flex-col gap-4 sm:gap-5 py-6 sm:py-8 pb-28 sm:pb-36 lg:pb-10 lg:py-12 xl:py-16 md:w-300 rounded-2xl lg:px-10 xl:px-14 md:max-w-[700px] p-3">
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-snug sm:p-2 md:p-4 lg:p-0 sm:text-center lg:text-left">
                  Affordable Packages Starting At Just{" "}
                  <span className="relative inline-block align-middle">
                    <span className="absolute inset-0 -rotate-6 rounded-md bg-secondary"></span>
                    <span className="relative inline-block rotate-3 rounded-md border-2 border-white bg-primary px-3 py-1.5 sm:px-4 sm:py-2 text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-white">₹29K/-</span>
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-normal leading-relaxed text-(--font-secondary-color) sm:px-5 lg:px-0">Invest in the right name that distinguishes you from the sea of creators. Don't let an unremarkable or forgettable title hold you back—launch with confidence knowing your channel name is poised to leave a lasting impact.</p>
              </div>
            </div>
            {/* Image */}
            <div className="w-full px-3 sm:px-6 -mt-20 sm:-mt-28 lg:mt-0 lg:w-125 lg:-ml-16 max-h-[580px]">
              <img src={TravelBlogger} alt="Travel Blogger" className="w-full h-auto object-cover rounded-2xl" />
            </div>
        </div>
    );
}

export default CTASection;

