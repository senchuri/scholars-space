"use client";

import { Button } from "@/components/ui/button";
import { CircleSketchHeroText } from "@/components/svg/Svgs";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center px-4 py-16 md:py-24 font-poppins">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-medium text-blue-600 shadow-sm backdrop-blur">
          <span className="rounded-full bg-[#FF6B3D] px-2.5 py-1.5 text-xs font-normal uppercase tracking-wide text-white">
            Update
          </span>
          <span className="text-gray-600 hidden sm:inline">
            Scholars Space Mobile App will be available soon
          </span>
          <span className="text-gray-600 sm:hidden">
            Mobile App coming soon
          </span>
          <span className="text-gray-500">&rarr;</span>
        </div>

        <p className="mt-8 text-lg font-medium text-blue-600">
          A <span className="text-[#FF8A3D] font-normal">Go-to</span>{" "}
          application for Grade 10 to 12.
        </p>

        <h1 className="mt-2 font-bold leading-tight text-[#1B4BE3] md:text-[54px] md:leading-tight whitespace-nowrap">
          Scholars Space -
          <span className="relative inline text-[#FF6B3D]">
            Your Brave Aims
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1">
              <CircleSketchHeroText />
            </span>
          </span>
        </h1>

        <p className="mx-auto max-w-4xl text-base text-gray-600  ">
          With powerful AI Learning Assistant; BigB integrated and trained over
          half a million Questions &amp; Answers
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center border border-gray-100 bg-white/50 rounded-full p-2 w-fit">
          <Button className="h-12 rounded-full bg-[#1B4BE3] px-4 py-3 text-base font-normal text-white hover:bg-[#1B4BE3] cursor-pointer">
            Download Scholars Space Mobile App
          </Button>
          <Button className="h-12 rounded-full px-4 py-3 text-base font-normal bg-blue-50 text-blue-600 hover:bg-white cursor-pointer">
            Explore Scholars Space
          </Button>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-end w-full max-w-6xl">
        {/* Left Stats */}
        <div className="flex flex-col gap-8 text-left text-gray-400">
          <div>
            <h3 className="text-[54px] font-light">500K+</h3>
            <p className="text-4xl font-normal">MCQs for BigB</p>
          </div>
          <div>
            <h3 className="text-[54px] font-light">40+</h3>
            <p className="text-4xl font-normal">Courses</p>
          </div>
          <div>
            <h3 className="text-[54px] font-light">3,000+</h3>
            <p className="text-4xl font-normal">BigB AI Chats</p>
          </div>
        </div>

        {/* Center Phone */}
        <div className="flex justify-center relative">
          <Image
            src="/img/Phone_banner.png"
            alt="Phone_banner"
            height={1014}
            width={500}
            className="object-contain"
          />
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-8 text-right text-gray-400">
          <div>
            <h3 className="text-[54px] font-light">30K+</h3>
            <p className="text-4xl font-normal">Lessons</p>
          </div>
          <div>
            <h3 className="text-[54px] font-light">500+</h3>
            <p className="text-4xl font-normal">Forum Discussions</p>
          </div>
          <div>
            <h3 className="text-[54px] font-light">1500+</h3>
            <p className="text-4xl font-normal">Snaps Answered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
