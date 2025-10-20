"use client";
import { WhatsApp } from "@/assets/icons/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeTestimonials = () => {
    return (
        <div className="mx-auto my-12 lg:my-16 xl:my-24">
            <div className="flex flex-col gap-5 lg:gap-10">
                <div className="flex flex-col xl:flex-row gap-2 lg:gap-5 justify-between items-end">
                    <div className="flex flex-col text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal gap-0 items-center lg:items-start">
                        <span className="text-blue-600 text-center lg:text-left">
                            Students and Teachers
                        </span>
                        <span className="text-gray-600">Loves us</span>
                    </div>

                    <Link
                        href="https://chat.whatsapp.com/JDautE451eKGQ6Sd38X0jC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full text-sm font-normal bg-green-50 text-green-600 inline-flex px-4 py-3 hover:bg-green-600 hover:text-white w-full lg:w-auto h-max items-center gap-1 transition-colors"
                    >
                        <WhatsApp color="currentColor" />
                        Join Our WhatsApp Group
                    </Link>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {Features.map((feat, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-[#ECEFF2] p-3 flex flex-col justify-between min-w-[18.125rem] gap-3 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-row gap-2 items-center">
                                    <div className="rounded-full w-[54px] h-[54px] overflow-hidden">
                                        <Image
                                            alt="Student testimonial"
                                            src={feat.Image}
                                            width={54}
                                            height={54}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-0">
                                        <span className="text-base font-medium text-gray-800">
                                            {feat.Name}
                                        </span>
                                        <span className="text-xs font-normal text-gray-400">
                                            {feat.College}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-normal text-gray-600 line-clamp-5 overflow-hidden text-ellipsis">
                                        {feat.Testimonial}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTestimonials;

const Features = [
    {
        Image: "img/sajan.jpeg",
        Name: "Sajan Poudel",
        UserType: "Ambassador",
        College: "Chhorepatan College, Pokhara",
        Testimonial:
            "I loved Braimy since it’s first day of Launch. I got to know from Ads and have been using braimy since then. Great App",
    },
    {
        Image: "img/rojan.jpeg",
        Name: "Rojan Koirala ",
        UserType: "Ambassador",
        College: "Viswa Niketan, Kathmandu",
        Testimonial:
            "Braimy has been a great platform for my class 11 studies. I used Braimy while I was solving exam oriented questions",
    },
    {
        Image: "img/atul.jpeg",
        Name: "Atul Phuyal",
        UserType: "Ambassador",
        College: "Global College, Kathmandu",
        Testimonial:
            "Braimy helped me a lot during my studies. The accuracy of answers and hints it provided is 100% accurate ",
    },
    {
        Image: "img/sarah.jpeg",
        Name: "Sarah Dahal",
        UserType: "Ambassador",
        College: "Sanjiwani College, Dhulikhel",
        Testimonial:
            "Model set Solutions & search anything get answer question is the best thing of Braimy. It has helped a lot to me",
    },
    {
        Image: "img/Aayusha.png",
        Name: "Aayusha Bohara ",
        UserType: "Ambassador",
        College: "Annapurna College, Butwal",
        Testimonial:
            "Braimy had helped alot in my Class 12 journey...Its been a life saver for me during the time of my board exams.",
    },
    {
        Image: "img/Abhishek.png",
        Name: "Abhishek paudel",
        UserType: "Ambassador",
        College: "Liverpool College, Kathmandu",
        Testimonial:
            "Braimy is an innovative game changer  platform for me and I use it every time while practicing questions",
    },
    {
        Image: "img/Krischal.png",
        Name: "Krischal Pathak",
        UserType: "Ambassador",
        College: "Bernhardt College, Kathmandu",
        Testimonial:
            "I use braimy to tackle question that I find confusion in, also I usually answers the questions that I know in forum",
    },
    {
        Image: "img/aakriti.jpeg",
        Name: "Aakriti Panta",
        UserType: "Ambassador",
        College: "Laxmi Sec. School, Chitwan",
        Testimonial:
            "Braimy app is like a super cool online school where I can learn tons of stuff. It's like having a smart friend in my pocket",
    },
    {
        Image: "img/liberal.jpeg",
        Name: "Liberal Neupane ",
        UserType: "Ambassador",
        College: "Shanti Namuna, Rupandehi",
        Testimonial:
            "The platform provides mix of  resources, such as past papers and model set solutions, and an awesome community",
    },
    {
        Image: "img/rajat.jpeg",
        Name: "Rajat Dawadi",
        UserType: "Ambassador",
        College: "Sagarmatha College, Biratnagar",
        Testimonial:
            "Braimy platform helped me & friends clarify doubts and be more confident while preparing for my exams",
    },
];
