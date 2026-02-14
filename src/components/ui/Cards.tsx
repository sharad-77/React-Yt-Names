import type { FeatureCardProps } from "../../interface/CardInterface";

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-2 py-2 md:flex-row md:items-center">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F0F5FF] sm:h-16 sm:w-16">
        <img
          src={icon}
          alt="Card_Icon_SVG"
          className="h-3/5 w-3/5 object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 lg:gap-1">
        <h3 className="text-[20px] leading-tight font-bold text-(--font-primary-color) md:text-lg lg:text-[22px]">
          {title}
        </h3>

        <p className="w-auto text-justify text-xs leading-relaxed text-(--font-secondary-color) lg:text-sm lg:leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export const YoutbeChannelNameReasonsCard = ({
  icon,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 h-auto w-auto md:h-92 md:w-92 md justify-center items-center">
      <div className="flex flex-row items-start gap-4 md:flex-col">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F0F5FF] p-3">
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="text-xl leading-tight font-bold tracking-tight text-(--font-primary-color) sm:text-2xl">
          {title}
        </h3>
      </div>

      {/* Description: Removed the centering to keep it professional */}
      <div className="">
        <p className="text-sm leading-relaxed text-(--font-secondary-color) opacity-80 lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};
