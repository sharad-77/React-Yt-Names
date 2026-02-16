import Button from "../ui/Button";
import { VectorLine12, AnalyticsIcon, SendBlueIcon ,SendIcon} from "../../assets";

export function Footer() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {/*Div For Card */}
      <div className="bg-primary relative z-10 -mb-30 flex h-165 w-[90%] max-w-300 flex-col items-center overflow-hidden rounded-[20px] border-6 border-white p-2 pt-10 text-center mt-20 sm:mt-0 text-white md:rounded-[30px] md:border-12 lg:h-140 lg:rounded-[60px] lg:border-30">
        <div className="z-10 flex h-full w-full max-w-200 flex-col items-center justify-between lg:pb-10">
          <p className="text-3xl font-bold">
            Ready to Make a Dent in the Universe?
          </p>
          <p className="relative z-20 text-base leading-relaxed font-normal">
            A solid start is half the battle won. Elevate your YouTube branding
            from day one with a name that captures attention and cements your
            identity. Hire a Channel Naming Consultant now and see the
            difference a professional touch can make.
          </p>

          <div className="flex w-full items-center justify-center pb-10">
            <Button variant={"primary"} className="relative z-20">
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
      <div className="flex md:h-full w-full flex-col items-center rounded-t-xl bg-[#030C30] pt-5 text-center lg:rounded-t-4xl">
        <div className="mb-20 flex w-full max-w-7xl flex-row items-center justify-center px-5 pt-40 text-left md:pt-60">
          <img
            src={SendBlueIcon}
            alt="Triangal Star"
            className="hidden lg:block"
          />
          <ul className="flex h-full w-full flex-col items-start justify-center gap-5 px-8 text-xl font-light text-white sm:text-2xl md:flex-row md:items-center lg:gap-10">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Why Choose Us</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">FAQ</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <img src={AnalyticsIcon} alt="Stars" className="hidden lg:block" />
        </div>
        <div className="flex h-full max-h-37.5 w-full flex-col items-center justify-between ">
          <p
            className="border-b-2 border-[#2A3972] bg-clip-text text-6xl font-bold text-transparent sm:text-7xl md:text-9xl lg:text-[160px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #2A3972 10.66%, rgba(3, 12, 48, 0) 69.59%)",
            }}
          >
            YTNAMES
          </p>
          <p className="my-10 text-white md:mt-15">
            © 2025 ytnames.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

