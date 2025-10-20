"use client";
import NewsCard from "@/components/common/Card/NewsCard";
import Carousal from "@/components/common/Carousal";
import CarousalDots from "@/components/common/Carousal/CarousalDots";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const carousals = [
  {
    title: "Braimy App coming soon",
    description:
      "Braimy App is launching on the First week of Ashoj with exciting features for Students",
    colorScheme: "green",
  },
  {
    title: "Become an Braimy College Ambassador",
    description:
      "Join Braimy College Ambassador Program and represent your college with exclusive perks",
    colorScheme: "purple",
  },
  {
    title: "Provide Feedbacks on Braimy New Update",
    description:
      "Braimy has revamped it’s UI for the 2081/82 batch. Please provide us your feedbacks on WhatsApp 9767838996",
    colorScheme: "orange",
  },
];

const NewsCarousal = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="flex flex-col gap-4 max-w-[54.625rem]">
      <Carousal emblaRef={emblaRef} withShadow={false} padding={0}>
        {carousals.map((news, index) => (
          <NewsCard
            key={index}
            {...news}
            flex={{
              base: "1 0 100%",
              md: "0 0 70%",
            }}
            minW={0}
          />
        ))}
      </Carousal>

      <div className="flex justify-center gap-2">
        <CarousalDots emblaApi={emblaApi} />
      </div>
    </div>
  );
};

export default NewsCarousal;
