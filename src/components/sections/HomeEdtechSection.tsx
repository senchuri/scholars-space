import React from "react";
import EdTechLogo from "@/assets/svg/EdTechLogo";

const HomeEdtechSection = () => {
    return (
        <div className="my-8 lg:my-80">
            <div className="flex flex-col text-center items-center justify-center gap-0">
                <div className="flex flex-col lg:flex-row text-7xl lg:text-8xl gap-0 lg:gap-4 text-gray-800">
                    <span>Current</span>
                    <div className="relative inline-flex justify-center lg:justify-start">
                        <div className="mt-3 lg:mt-6">
                            <EdTechLogo />
                        </div>

                        <div className="hidden lg:block absolute -top-[60%] right-[52%]">
                            {/* <CurveLine width="170px" height="72px" fill="#FFA500" color="#FFA500" /> */}
                        </div>
                    </div>
                    <span className="break-words">Is Broken</span>
                </div>
                <div className="flex w-full relative">
                    <p className="text-base md:text-lg lg:text-2xl text-gray-600 text-center self-center w-full">
                        They are just making you relive what you live 8-10 hrs in school daily.{" "}
                        <br className="block lg:hidden" />
                        <span className="text-red-600">
                            Nothing New
                        </span>
                    </p>
                    <div className="hidden lg:block absolute top-[138%] right-[19%] w-[170px] h-[72px]">
                        {/* <CurveLine
              variant={5}
              width="100%"
              height="100%"
              fill="#D12D3E"
              color="#D12D3E"
            /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeEdtechSection;
