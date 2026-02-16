import { useState } from "react";
import { QuestionMarkIllustration } from "../../assets";
import { QNACard } from "../ui/Cards";

const QNAData = [
  {
    question: "How is this different from using a free AI name generator?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question:
      "Why should I invest in a professional YouTube channel name instead of just thinking one up myself?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question: "Can the right name really help my channel grow?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question: "Do you ensure the .COM domain is available for my chosen name?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
];

export function QNASection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <div className="bg-bluewhitebg flex h-full max-h-280 w-full max-w-7xl flex-col gap-10 overflow-hidden rounded-4xl px-4 pt-10 sm:mt-80 lg:mt-0 lg:flex-row">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 lg:w-125 lg:p-15">
        <p className="text-3xl leading-normal font-bold lg:w-115 lg:text-[50px]">
          Frequently Answer Questions
        </p>
        <p className="ml-2 w-full text-base leading-relaxed font-normal text-(--font-secondary) lg:w-117 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <img
          src={QuestionMarkIllustration}
          alt="QuestionMarkIllustration"
          className="h-63.57 mt-6 w-87.5"
        />
      </div>
      <div className="flex h-full w-full flex-col gap-5 md:pt-15 xl:gap-7 xl:pt-20">
        {QNAData.map((data, index) => (
          <QNACard
            key={index}
            question={data.question}
            answer={data.answer}
            isOpen={openIndex === index}
            onToggle={() => {
              if (openIndex === index) {
                setOpenIndex(-1);
              } else {
                setOpenIndex(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}