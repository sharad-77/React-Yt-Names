import { useState } from "react";
import { QuestionMarkIllustration } from "../../assets/svgs";
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
  }
];

export function QNASection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <div className="bg-bluewhitebg flex w-full max-w-7xl flex-col gap-10 overflow-hidden rounded-4xl px-4 py-10 sm:mt-80 md:px-10 lg:mt-0 lg:flex-row lg:items-center lg:py-16 xl:gap-20 xl:py-24">
      {/* Left Column: Heading & Illustration */}
      <div className="flex w-full h-full flex-col items-center gap-5 lg:w-1/2 lg:items-start">
        <h2 className="text-3xl leading-tight font-bold md:text-5xl lg:text-left xl:text-[50px] xl:leading-[1.1]">
          Frequently Asked Questions
        </h2>
        <p className="ml-1 w-full text-base leading-relaxed font-normal text-(--font-secondary) md:text-xl lg:max-w-md lg:text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <img
          src={QuestionMarkIllustration}
          alt="QuestionMarkIllustration"
          className="mt-6 lg:mt-30 h-auto w-64 md:w-80 lg:w-87.5 xl:w-96"
        />
      </div>

      {/* Right Column: QNA Cards */}
      <div className="flex w-full flex-col gap-5 md:pt-10 lg:w-1/2 lg:pt-0 xl:gap-8">
        {QNAData.map((data, index) => (
          <QNACard
            key={index}
            question={data.question}
            answer={data.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
}
