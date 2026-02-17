import {
  AnalyticsIcon,
  SendBlueIcon,
  SendIcon,
  VectorLine12,
} from "../../assets/svgs";
import Button from "../ui/Button";

export function Footer() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/*Div For Card */}
      <div className="bg-primary relative z-10 mt-10 -mb-30 flex h-[500px] w-[90%] max-w-300 flex-col items-center justify-center overflow-hidden rounded-[20px] border-4 border-white px-4 py-10 text-center text-white sm:mt-0 md:rounded-[30px] md:border-8 md:px-8 lg:max-h-[400px] lg:max-w-[1200px] lg:border-16 lg:px-10 lg:py-16">
        <div className="z-10 flex h-full w-full max-w-200 flex-col items-center justify-evenly gap-6 lg:gap-8">
          <p className="w-[320px] text-3xl font-bold sm:w-full lg:w-[962px] xl:text-5xl">
            Ready to Make a Dent in the Universe?
          </p>
          <p className="relative z-20 max-w-lg text-base leading-7 font-normal sm:text-base lg:max-w-[962px] xl:text-xl">
            A solid start is half the battle won. Elevate your YouTube branding
            from day one with a name that captures attention and cements your
            identity. Hire a Channel Naming Consultant now and see the
            difference a professional touch can make.
          </p>

          <div className="flex w-full items-center justify-center">
            <Button variant={"primary"} className="relative z-20 font-bold">
              Book a Free Consultation
            </Button>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-2 left-0 z-0 flex h-auto w-full items-center justify-center">
          <img
            src={SendIcon}
            alt="SendIcon"
            className="hidden object-cover lg:block"
          />
          <img
            src={VectorLine12}
            alt="VectorLine12"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/*Div For Footer */}
      <div className="flex w-full flex-col items-center rounded-t-xl bg-[#030C30] pt-5 text-center md:h-full lg:rounded-t-2xl">
        <div className="mb-16 flex w-full max-w-7xl flex-row items-center justify-center px-5 pt-36 text-left sm:mb-20 md:pt-52 lg:mb-0 lg:pt-22">
          <img
            src={SendBlueIcon}
            alt="Triangal Star"
            className="hidden lg:block"
          />
          <ul className="flex h-full w-full flex-col items-start justify-center gap-8 text-xl font-light text-[#F2F2F2] sm:text-2xl md:flex-row md:items-center lg:gap-10 lg:text-xl">
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white hover:underline hover:underline-offset-4">
              Home
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white hover:underline hover:underline-offset-4">
              Why Choose Us
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white hover:underline hover:underline-offset-4">
              Testimonials
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white hover:underline hover:underline-offset-4">
              FAQ
            </li>
            <li className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-white hover:underline hover:underline-offset-4">
              Contact
            </li>
          </ul>
          <img src={AnalyticsIcon} alt="Stars" className="hidden lg:block" />
        </div>
        <div className="flex w-full flex-col items-center overflow-hidden">
          <p
            className="font-utendo border-b-2 border-[#2A3972] bg-clip-text text-7xl font-bold text-transparent sm:text-7xl md:text-9xl lg:text-[200px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #2A3972 10.66%, rgba(3, 12, 48, 0) 69.59%)",
            }}
          >
            YTNAMES
          </p>
          <p className="my-8 text-[#F2F2F2] md:mt-10">
            © 2025 ytnames.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
