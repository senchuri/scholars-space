"use client";

import { Button } from "@/components/ui/button";
import { CircleSketchHeroText } from "@/components/svg/Svgs";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-poppins">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-600 shadow-sm backdrop-blur">
          <span className="rounded-full bg-[#FF6B3D] px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs font-normal uppercase tracking-wide text-white">
            Update
          </span>
          <span className="text-gray-600 hidden sm:inline">
            Scholars Space Mobile App will be available soon
          </span>
          <span className="text-gray-600 sm:hidden">
            Mobile App coming soon
          </span>
          <ArrowRight className="w-4 h-4 text-gray-600" />
        </div>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-blue-600 text-center">
          A <span className="text-[#FF8A3D] font-normal">Go-to</span>{" "}
          application for Grade 10 to 12.
        </p>

        <h1 className="mt-2 font-bold leading-tight text-center px-2">
          <div className="flex flex-row items-baseline justify-center gap-2 lg:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-[54px] whitespace-nowrap">
            <span className="text-[#1B4BE3] lg:whitespace-nowrap">
              Scholars Space -
            </span>
            <span className="relative text-[#FF6B3D]">
              Your Brave Aims
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center scale-110 md:scale-130">
                  <CircleSketchHeroText />
                </div>
              </span>
            </span>
          </div>
        </h1>

        <p className="mx-auto max-w-4xl text-sm sm:text-base text-gray-600 text-center mt-4 px-4">
          With powerful AI Learning Assistant; BigB integrated and trained over
          half a million Questions &amp; Answers
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row justify-center border border-gray-100 bg-white/50 rounded-full p-2 w-full sm:w-fit max-w-md sm:max-w-none">
          <Button className="h-10 sm:h-12 rounded-full bg-[#1B4BE3] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-normal text-white hover:bg-[#1B4BE3] cursor-pointer w-full sm:w-auto">
            <span className="sm:hidden">Download App</span>
            <span className="hidden sm:inline">
              Download Scholars Space Mobile App
            </span>
          </Button>
          <Button className="h-10 sm:h-12 rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-normal bg-blue-50 text-blue-600 hover:bg-white cursor-pointer w-full sm:w-auto">
            Explore Scholars Space
          </Button>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 w-full max-w-6xl">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Phone Image */}
          <div className="flex justify-center">
            <Image
              src="/img/Phone_banner.png"
              alt="Phone_banner"
              height={1014}
              width={500}
              className="object-contain max-w-[280px] sm:max-w-[350px] h-auto"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">500K+</h3>
              <p className="text-sm sm:text-base font-normal">MCQs for BigB</p>
            </div>
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">40+</h3>
              <p className="text-sm sm:text-base font-normal">Courses</p>
            </div>
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">3,000+</h3>
              <p className="text-sm sm:text-base font-normal">BigB AI Chats</p>
            </div>
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">30K+</h3>
              <p className="text-sm sm:text-base font-normal">Lessons</p>
            </div>
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">500+</h3>
              <p className="text-sm sm:text-base font-normal">
                Forum Discussions
              </p>
            </div>
            <div className="text-gray-400">
              <h3 className="text-2xl sm:text-3xl font-light">1500+</h3>
              <p className="text-sm sm:text-base font-normal">Snaps Answered</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-6 xl:gap-8 items-end">
          {/* Left Stats */}
          <div className="flex flex-col gap-4 xl:gap-6 2xl:gap-8 text-left text-gray-400">
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                500K+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                MCQs for BigB
              </p>
            </div>
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                40+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                Courses
              </p>
            </div>
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                3,000+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                BigB AI Chats
              </p>
            </div>
          </div>

          {/* Center Phone */}
          <div className="flex justify-center relative">
            <Image
              src="/img/Phone_banner.png"
              alt="Phone_banner"
              height={1014}
              width={500}
              className="object-contain max-w-[300px] xl:max-w-[400px] 2xl:max-w-[500px] h-auto"
            />
          </div>

          {/* Right Stats */}
          <div className="flex flex-col gap-4 xl:gap-6 2xl:gap-8 text-right text-gray-400">
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                30K+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                Lessons
              </p>
            </div>
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                500+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                Forum Discussions
              </p>
            </div>
            <div>
              <h3 className="text-2xl xl:text-3xl 2xl:text-[54px] font-light">
                1500+
              </h3>
              <p className="text-base xl:text-lg 2xl:text-4xl font-normal">
                Snaps Answered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
