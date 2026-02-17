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
    question: "Can the right name really help my channel grow?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question:
      "Why should I invest in a YouTube channel name instead of just thinking?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question: "Do you ensure the .COM domain is available for my chosen name?",
    answer:
      "While AI can suggest interesting ideas, it lacks the nuanced, human touch and brand insight. A professional takes into account your content strategy, audience demographics, branding goals, and future scalability ensuring a channel name that is uniquely tailored to you.",
  },
  {
    question: "What’s included in the ₹29K- pricing plan?",
    answer:
      "The ₹29K plan is our most comprehensive package, designed for creators who want a complete branding solution. It includes 100+ name suggestions, 10 logo options, a brand style guide, social media handles, and a 30-minute consultation with our naming experts.",
  },
];

export function QNASection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <div className="bg-bluewhitebg flex w-full max-w-7xl flex-col gap-8 overflow-hidden rounded-4xl px-6 py-12 md:px-10 lg:flex-row lg:items-start lg:gap-12 lg:py-16 xl:gap-20 xl:py-24">
      {/* Left Column: Heading & Illustration */}
      <div className="flex h-full w-full flex-col items-start gap-4 lg:w-1/2">
        <h2 className="text-3xl leading-tight font-bold md:text-5xl xl:text-[50px] xl:leading-[1.1]">
          Frequently Answer Questions
        </h2>
        <p className="max-w-md text-sm leading-relaxed font-normal text-(--font-secondary) md:text-base">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </p>
        <div className="mt-4 flex w-full items-center justify-center lg:mt-auto lg:justify-start">
          <img
            src={QuestionMarkIllustration}
            alt="QuestionMarkIllustration"
            className="h-auto w-64 md:w-80 lg:w-87.5 xl:w-96"
          />
        </div>
      </div>

      {/* Right Column: QNA Cards */}
      <div className="flex w-full flex-col gap-5 lg:w-1/2 xl:gap-8">
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
