"use client";

import Image from "next/image";
import { ArrowRight, Box, Sparkles } from "lucide-react";
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
    <section className="w-full bg-white font-poppins py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-[81px] font-light text-[#080C2F] flex items-center justify-center gap-4">
            Current
            <EdTechLogo />
            Is Broken
          </h2>
          <p className="text-2xl text-[#778198]">
            They are just making you relive what you live 8-10 hrs in school
            daily. <span className="text-red-600 font-medium">Nothing New</span>
          </p>
        </div>

        <div className="rounded-[40px] bg-gradient-to-br from-[#EFF5FF] to-[#FAF5FF] px-8 md:px-16 py-12 md:py-16">
          <h3 className="text-[54px] font-semibold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#1F4DE5] to-[#6821A8]">
            Step into a new era of interactive and immersive learning
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <div className="space-y-8 text-center md:text-left">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    <div className="flex -space-x-3">
                      {avatars.map((avatar) => (
                        <div
                          key={avatar.id}
                          className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md"
                        >
                          <Image
                            src={avatar.src}
                            alt={avatar.alt}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold text-base">For Our</h3>
                      <p className=" font-normal text-base">Happy Students</p>
                    </div>
                  </div>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3560FF] px-6 py-3 text-sm font-medium text-white hover:bg-[#254BDB] w-fit mx-auto md:mx-0 cursor-pointer">
                    <Box className="h-4 w-4" /> Join Scholars Space today
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <BabyRobotMascot width={351} height={350} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-[#FFA500] text-[81px] font-bold">
            Scholars Space
          </h3>
          <p className="text-[54px] font-bold text-[#FF0000]">
            Your Search for Edtech Ends Here
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinCta;
