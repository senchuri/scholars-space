"use client";

import Image from "next/image";
import { ArrowRight, Box } from "lucide-react";
import BabyRobotMascot from "@/components/svg/BabyRobotMascot";
import EdTechLogo from "@/components/svg/EdTechLogo";

const avatars = [
  {
    id: 1,
    src: "/img/aakriti-rijal.jpeg",
    alt: "Happy student 1",
  },
  {
    id: 2,
    src: "/img/abhishek.jpeg",
    alt: "Happy student 2",
  },
  {
    id: 3,
    src: "/img/atul.jpeg",
    alt: "Happy student 3",
  },
  {
    id: 4,
    src: "/img/Abhishek.png",
    alt: "Happy student 4",
  },
];

const JoinCta = () => {
  return (
    <section className="w-full bg-white font-poppins py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[81px] font-light text-[#080C2F]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <span className="whitespace-nowrap text-center">Current</span>
              <div className="w-auto flex-shrink-0 flex justify-center">
                <EdTechLogo />
              </div>
              <span className="whitespace-nowrap text-center">Is Broken</span>
            </div>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#778198] max-w-4xl mx-auto leading-relaxed">
            They are just making you relive what you live 8-10 hrs in school
            daily. <span className="text-red-600 font-medium">Nothing New</span>
          </p>
        </div>

        <div className="rounded-3xl md:rounded-[40px] bg-gradient-to-br from-[#EFF5FF] to-[#FAF5FF] px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[54px] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-tr from-[#1F4DE5] to-[#6821A8] max-w-5xl mx-auto">
              Step into a new era of interactive and immersive learning
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar.id}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-3 border-white overflow-hidden shadow-lg"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-gray-700">
                  <h4 className="font-bold text-lg sm:text-xl">For Our</h4>
                  <p className="font-normal text-lg sm:text-xl">Happy Students</p>
                </div>
              </div>

              <button className="inline-flex items-center justify-center gap-3 rounded-full bg-[#3560FF] px-8 py-4 text-base sm:text-lg font-medium text-white hover:bg-[#254BDB] transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto mx-auto lg:mx-0">
                <Box className="h-5 w-5" /> 
                Join Scholars Space today
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px]">
                <BabyRobotMascot width={351} height={350} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center">
          <h3 className="text-[#FFA500] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[81px] font-bold">
            Scholars Space
          </h3>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#FF0000] px-4">
            Your Search for Edtech Ends Here
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinCta;
