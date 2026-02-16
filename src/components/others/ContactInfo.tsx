import {
  LocationIcon,
  WhiteSmsIcon,
  CallIcon,
  TargetIcon,
  LinkedinIcon,
  CreativityIcon,
  SocialMediaIcon,
} from "../../assets";

const contactDetails = [
  {
    icon: LocationIcon,
    title: "Address",
    info: "www.SanskritNames.com",
  },
  {
    icon: WhiteSmsIcon,
    title: "Email",
    info: "hi@ytnames.com",
  },
  {
    icon: CallIcon,
    title: "Phone Number",
    info: "+91 85888 51555",
  },
];

const socialLinks = [
  { icon: TargetIcon, alt: "Instagram", link: "#" },
  { icon: LinkedinIcon, alt: "LinkedIn", link: "#" },
  { icon: CreativityIcon, alt: "Twitter", link: "#" },
  { icon: SocialMediaIcon, alt: "Facebook", link: "#" },
];

function ContactInfo() {
  return (
    <div className="flex h-full w-full flex-col gap-5 p-3 sm:gap-6 sm:p-4 md:gap-7 md:p-5  lg:gap-8 lg:p-6  xl:p-8">
      <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4">
        <h2 className="text-2xl font-bold text-(--font-primary-color) sm:text-3xl md:text-4xl lg:text-5xl">
          Get In Touch
        </h2>
        <p className="text-xs leading-relaxed text-(--font-secondary-color) sm:text-sm md:text-base max-w-md">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-3 sm:gap-4 md:gap-5">
            <div className="bg-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-105 sm:h-14 sm:w-14 md:h-16 md:w-16">
              <img
                src={detail.icon}
                alt={detail.title}
                className="h-auto w-auto"
              />
            </div>

            <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-1.5">
              <h3 className="text-base font-bold text-(--font-primary-color) sm:text-lg md:text-xl">
                {detail.title}
              </h3>
              <p className="wrap-break-words text-xs text-(--font-secondary-color) sm:text-sm md:text-base">
                {detail.info}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-1 border-t border-[#BFCAE0] sm:my-2" />

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <h3 className="text-xl font-bold text-(--font-primary-color) sm:text-2xl md:text-3xl lg:text-4xl">
          Follow Us
        </h3>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 md:gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="bg-secondary focus:ring-secondary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95 sm:h-12 sm:w-12 md:h-14 md:w-14"
              aria-label={social.alt}
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
