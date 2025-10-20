"use client";
import CircleSketchText from "@/components";
import Image from "next/image";
import React from "react";

const HomeServiceFeature = () => {
    return (
        <div className="mx-auto my-12 lg:my-16 xl:my-24">
            <div className="flex flex-col gap-10">
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
                        Stop searching for 100s of Websites and Apps just for a Question, Now you've
                        got everything at one place.
                    </p>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[82.5rem]">
                        {Features.map((feat, i) => (
                            <div key={i} className="flex flex-row flex-1 justify-start">
                                <div className="flex flex-col flex-1 bg-[#F6F7F9] border border-[#ECEFF2] rounded-3xl gap-10 px-6 pt-6 items-start justify-between overflow-x-hidden hover:shadow-lg transition-shadow">
                                    <div className="flex flex-col items-start justify-start text-start">
                                        <span className="text-2xl font-medium">
                                            {feat.num}
                                        </span>
                                        <h3 className="text-lg font-medium">
                                            {feat.title}
                                        </h3>
                                        <p className="text-sm">{feat.desc}</p>
                                    </div>
                                    <div className="flex justify-center items-center w-full">
                                        <Image
                                            src={feat.Image}
                                            alt="braimy application feature image"
                                            width={parseInt(feat.width)}
                                            height={parseInt(feat.height)}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceFeature;

const Features = [
    {
        Image: "/img/app-feature-BigB-chat.png",
        num: "01",
        title: "BigB – Personal AI Assistant",
        desc: "Get instant answers and personalized recommendations from BigB.",
        width: "488",
        height: "421",
    },
    {
        Image: "/img/app-feature-search.png",
        num: "02",
        title: "Advance Search",
        desc: "Find Exactly What You Need, powered by our Advance AI",
        width: "488",
        height: "421",
    },
    // {
    //   Image: "/img/app-feature-search.png",
    //   num: "02",
    //   title: "Personalized Lessons and Courses",
    //   desc: "Adapt to your individual learning needs and academic goals.",
    // },
    {
        Image: "/img/app-feature-snap.png",
        num: "03",
        title: "Interactive Forums",
        desc: "Collaborate with peers and teachers for a richer learning experience.",
        width: "488",
        height: "421",
    },
    {
        Image: "/img/app-feature-course.png",
        num: "04",
        title: "Curated Courses",
        desc: "Expertly Designed for Your better grades",
        width: "488",
        height: "421",
    },
    {
        Image: "/img/app-feature-lesson.png",
        num: "05",
        title: "Personalized Lessons & MCQs",
        desc: "Learning Tailored Just for You",
        width: "488",
        height: "421",
    },
    {
        Image: "/img/app-feature-learning-streak.png",
        num: "06",
        title: "Learning Streaks and Points",
        desc: "Stay motivated and track your progress with our rewards system.",
        width: "488",
        height: "421",
    },
];
