import React from "react";
import Image from "next/image";
import CircleSketchText from "@/components";

const HomeAppFeature = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-9 lg:my-24">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-0 lg:gap-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <div className="hidden lg:block">
            <CircleSketchText
              svgProps={{
                width: "100%",
                height: "100%",
                fill: "none",
                color: "#FF3C1C",
              }}
              width={{
                lg: "175px",
                xl: "175px",
              }}
              height={{
                lg: "63px",
                xl: "63px",
              }}
              left={{
                md: "0%",
                lg: "-5%",
                xl: "-11%",
              }}
              top={{
                md: "0",
                lg: "-10%",
                xl: "-20%",
              }}
            >
              <span className="font-normal text-blue-600 mr-1 text-4xl">
                One App
              </span>
            </CircleSketchText>
          </div>
          <div className="block sm:block md:hidden lg:hidden xl:hidden">
            <CircleSketchText
              svgProps={{
                width: "14rem",
                height: "4rem",
                fill: "none",
                color: "#FF3C1C",
              }}
              left="-26%"
              top="-10%"
            >
              <span className="font-normal text-blue-600 text-4xl">
                One App
              </span>
            </CircleSketchText>
          </div>
          <span className="text-gray-600 text-4xl">
            for all your Need
          </span>
        </div>
        <p className="text-base text-center text-gray-600">
          Stop searching for 100s of Websites and Apps just for a Question, Now
          you've got everything at one place.
        </p>
      </div>

      <div className="my-12">
        <Image
          src="/img/desktop-view.png"
          alt="search screen"
          width={1320}
          height={800}
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default HomeAppFeature;
