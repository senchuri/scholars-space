import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import BabyRobotMascot from "@/assets/svg/BabyRobotMascot";
import Link from "next/link";

const SOME_HAPPY_SUTDENTS = [
    "/img/sajan.jpeg",
    "/img/sarah.jpeg",
    "/img/rojan.jpeg",
    "/img/rajat.jpeg",
    "/img/aakriti.jpeg",
];

const HomeHappyStudentsSection = () => {
    return (
        <div 
            className="p-8 lg:p-20 rounded-[40px]"
            style={{
                background: "linear-gradient(77deg, #EFF5FF 20.36%, #FAF5FF 78.96%)"
            }}
        >
            <div className="flex flex-col gap-2 lg:gap-5">
                <h2 
                    className="text-2xl md:text-3xl lg:text-6xl font-medium leading-tight text-center tracking-wide"
                    style={{
                        background: "linear-gradient(53deg, #1F4DE5 0%, #6821A8 64%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Step into a new era of interactive and immersive learning
                </h2>

                <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:items-end w-full">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-3">
                            <div className="flex -space-x-2">
                                {SOME_HAPPY_SUTDENTS.slice(0, 5).map((student, index) => (
                                    <Avatar key={index} className="h-12 w-12 ring-2 ring-white">
                                        <AvatarImage src={student} alt="Happy student" />
                                        <AvatarFallback>HS</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>

                            <div className="flex flex-col text-gray-800 gap-0">
                                <span className="font-bold">For Our</span>
                                <span>Happy students</span>
                            </div>
                        </div>

                        <Button asChild className="p-6 rounded-full font-normal bg-blue-600 hover:bg-blue-700 w-full lg:w-auto">
                            <Link href="/sign-up">
                                <div className="flex items-center gap-2">
                                    {/* <Cube /> */}
                                    <span>Join Braimy today !</span>
                                    {/* <RightArrow /> */}
                                </div>
                            </Link>
                        </Button>
                    </div>
                    <div className="justify-self-end lg:translate-y-[20%]">
                        <BabyRobotMascot
                            withAnimation={false}
                            width="19.56038rem"
                            height="23.79844rem"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHappyStudentsSection;
