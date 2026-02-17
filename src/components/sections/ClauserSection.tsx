import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import {
  LeftSideArrow,
  RightSideArrow as RigthSideArrow,
  EllipseBackground as User,
  User2,
  User3,
} from "../../assets/svgs";
import { ClauserCard } from "../ui/Cards";

const cards = [
  {
    img: User2,
    title: "Brilliant Brand Strategy",
    description:
      "From the very first call, the team understood my vision. They crafted a brand identity that truly resonates with my target audience. Sales have gone up 40% since the rebrand. I couldn't be happier with the results.",
    rating: 5,
  },
  {
    img: User3,
    title: "Professional & Creative",
    description:
      "The naming process was smooth and collaborative. They gave me multiple options, explained the reasoning behind each, and helped me pick one that felt authentic. The whole experience was professional and inspiring.",
    rating: 4,
  },
  {
    img: User,
    title: "Highly Recommended",
    description:
      "I was skeptical at first, but the results speak for themselves. My new brand name is unique, easy to remember, and perfectly captures what my business stands for. The team was responsive and delivered ahead of schedule.",
    rating: 5,
  },
  {
    img: User2,
    title: "Brilliant Brand Strategy",
    description:
      "From the very first call, the team understood my vision. They crafted a brand identity that truly resonates with my target audience. Sales have gone up 40% since the rebrand. I couldn't be happier with the results.",
    rating: 5,
  },
  {
    img: User3,
    title: "Professional & Creative",
    description:
      "The naming process was smooth and collaborative. They gave me multiple options, explained the reasoning behind each, and helped me pick one that felt authentic. The whole experience was professional and inspiring.",
    rating: 4,
  },
  {
    img: User,
    title: "Highly Recommended",
    description:
      "I was skeptical at first, but the results speak for themselves. My new brand name is unique, easy to remember, and perfectly captures what my business stands for. The team was responsive and delivered ahead of schedule.",
    rating: 5,
  },
];

export function ClauserSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="flex h-full w-full max-w-7xl flex-col gap-4 p-3">
      <div className="flex h-auto w-full flex-row items-start justify-between p-3">
        <div className="flex w-full max-w-153 flex-col items-center gap-5 md:items-start">
          <p className="text-3xl font-bold">What Our Customer Says</p>
          <p className="text-base leading-normal font-medium text-(--font-secondary-color) lg:pr-15">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>

        <div className="hidden max-w-60 flex-row items-center justify-end gap-2 lg:flex">
          <button
            onClick={scrollPrev}
            className="cursor-pointer rounded-full p-2 transition-opacity hover:opacity-70"
            aria-label="Previous slide"
          >
            <img src={LeftSideArrow} alt="Previous" />
          </button>
          <button
            onClick={scrollNext}
            className="cursor-pointer rounded-full p-2 transition-opacity hover:opacity-70"
            aria-label="Next slide"
          >
            <img src={RigthSideArrow} alt="Next" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden px-3 pt-15 pb-6" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_30%]"
            >
              <ClauserCard
                svg={card.img}
                title={card.title}
                description={card.description}
                rating={card.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
