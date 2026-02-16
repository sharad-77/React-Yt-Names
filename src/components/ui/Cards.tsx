import { StarBadge } from "../../assets";
import type {
  ClauserCardProps,
  FeatureCardProps,
} from "../../interface/CardInterface";

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex w-full  flex-col items-start gap-2 py-2 md:flex-row md:items-center">
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
    <div className="md flex h-auto w-auto flex-col items-center justify-center gap-5 rounded-2xl bg-white p-5 md:h-92 md:w-92">
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

export const ClauserCard = ({
  svg,
  title,
  description,
  rating,
}: ClauserCardProps) => {
  return (
    <div className="relative flex md:h-88 max-h-88 min-h-80 w-auto max-w-125 min-w-80 flex-col rounded-3xl border border-[#E8EDF6] pt-12 md:pt-14">
      <div className="absolute top-0 left-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-x-4 border-t-4 border-b-0 border-[#AABCFF] md:h-24 md:w-24">
        <img
          src={svg}
          alt={title}
          className="h-full min-h-full w-full min-w-full scale-[2.2] pt-1 pl-1"
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 p-2 md:gap-5 md:px-4 md:py-4">
        <h3 className="w-full text-center text-xl font-bold text-(--font-primary-color) md:text-2xl">
          {title}
        </h3>

        <p className="text-center text-sm leading-relaxed text-(--font-secondary-color) md:text-base">
          {description}
        </p>

        <div className="flex flex-row gap-1">
          {Array.from({ length: rating }, (_, i) => (
            <img
              key={i}
              src={StarBadge}
              alt="star"
              className="h-6 w-6 md:h-7 md:w-7"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
