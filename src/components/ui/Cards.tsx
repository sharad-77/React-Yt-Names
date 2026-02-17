import { UpArrow, DownArrow, StarBadge } from "../../assets/svgs";
import type {
  ClauserCardPropsType,
  FeatureCardPropsType,
  QNACardPropsType,
} from "../../interface/CardInterface";

export const FeatureCard = ({
  icon,
  title,
  description,
}: FeatureCardPropsType) => {
  return (
    <div className="flex w-full flex-col items-start gap-3 lg:flex-row lg:items-center">
      <div className="bg-bluewhitebg flex h-15 w-15 shrink-0 items-center justify-center rounded-full sm:h-18 sm:w-18">
        <img
          src={icon}
          alt="Card_Icon_SVG"
          className="h-3/5 w-3/5 object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 lg:gap-1">
        <h3 className="text-[22px] font-bold text-(--font-primary-color) sm:text-[28px] lg:text-lg lg:text-[22px]">
          {title}
        </h3>

        <p className="font-utendo w-auto text-[16px] leading-7 text-(--font-secondary-color) sm:text-[18px] lg:text-sm lg:leading-snug">
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
}: FeatureCardPropsType) => {
  return (
    <div className="md flex h-auto w-auto flex-col gap-5 rounded-2xl bg-white p-5 shadow-xs md:h-92 md:w-92">
      <div className="flex flex-row items-center justify-start gap-4 md:flex-col md:items-start">
        <div className="bg-bluewhitebg flex h-14 w-14 shrink-0 items-center justify-center rounded-full p-3">
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <h3 className="w-46 text-xl leading-tight font-bold tracking-tight text-(--font-primary-color) sm:text-2xl md:w-80 lg:w-85">
          {title}
        </h3>
      </div>

      {/* Description: Removed the centering to keep it professional */}
      <div className="">
        <p className="font-utendo text-sm leading-relaxed text-(--font-primary-color) opacity-80 lg:text-base">
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
}: ClauserCardPropsType) => {
  return (
    <div className="relative flex max-h-90 min-h-80 w-auto min-w-80 flex-col rounded-3xl border border-[#E8EDF6] pt-10 shadow-sm md:h-88 md:pt-14">
      <div className="absolute top-0 left-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-x-4 border-t-4 border-b-0 border-[#AABCFF] md:h-24 md:w-24">
        <img
          src={svg}
          alt={title}
          className="h-full min-h-full w-full min-w-full scale-[2.2] pt-1 pl-1"
        />
      </div>

      <div className="flex w-full max-w-[490px] flex-col items-center justify-center gap-4 p-2 md:gap-5 md:px-4 md:py-4">
        <h3 className="font-utendo w-full text-center text-xl font-bold text-(--font-primary-color) md:text-2xl">
          {title}
        </h3>

        <p className="font-utendo w-[288px] max-w-112 text-center text-base leading-7 text-(--font-secondary-color) md:text-base">
          {description}
        </p>

        <div className="flex flex-row gap-1 pb-6">
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

export const QNACard = ({
  question,
  answer,
  isOpen,
  onToggle,
}: QNACardPropsType) => {
  return (
    <div
      onClick={onToggle}
      className={`flex w-full flex-col gap-4 rounded-2xl p-4 last:opacity-80 last:blur-[1px] sm:gap-5 sm:px-4 sm:pb-6 ${isOpen ? "bg-tertiary h-auto max-h-80 w-full" : "h-auto max-h-32 max-w-full bg-white"}`}
    >
      <div className="flex w-full items-center justify-center gap-2">
        <p className="mr-1 w-full text-base leading-7 font-semibold text-(--font-secondary-color) lg:text-lg xl:text-xl">
          {question}
        </p>
        <button
          className="flex w-auto shrink-0 cursor-pointer items-center justify-center px-1"
          onClick={onToggle}
        >
          <img
            src={`${isOpen ? UpArrow : DownArrow}`}
            alt="DownArrow"
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
        </button>
      </div>
      <div
        className={`${isOpen ? "flex h-full w-full transition-all duration-300" : "hidden"}`}
      >
        <p className="border-primary border-l-3 px-2 text-justify text-sm leading-6 font-normal text-(--font-secondary-color) sm:text-sm md:text-sm lg:text-base ">
          {answer}
        </p>
      </div>
    </div>
  );
};
