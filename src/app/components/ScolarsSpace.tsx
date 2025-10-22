"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Camera,
  MessageCircle,
  HelpCircle,
  MessageSquare,
  Award,
  UserCircle,
  Sparkles,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Feature = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

const grade11Features: Feature[] = [
  {
    id: 1,
    icon: Camera,
    title: "Snap & Get Answer",
    description:
      "Snap & get Answer with our exclusive database curated for Nepalese Students.",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Chat with AI Mentor; BigB",
    description:
      "Chat with your personal AI Learning Assistant BigB; trained over 5 Lakhs+ Questions & Answers.",
  },
  {
    id: 3,
    icon: HelpCircle,
    title: "Questions & Answers",
    description:
      "Get Access to 30K+ Question & Answers from Past Papers, Model Sets & every books that exists.",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "Forum & Instant Doubt Solving",
    description:
      "Get instant Answers to Forum Question with BigB, get Verified Answer from Scholars Space Experts.",
  },
  {
    id: 5,
    icon: Award,
    title: "Learning Points & Streaks",
    description:
      "Gain Learning Points and Streak with activities and get Exclusive offers & perks from Scholars Space.",
  },
  {
    id: 6,
    icon: UserCircle,
    title: "Student & Teacher Profile",
    description:
      "Get your very own Scholars Space profile with Badges and personalization features to stand out in the Crowd.",
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Personalized Learning",
    description:
      "Manage your Preferences & engage in personalized recommendations according to your interest.",
  },
];

const grade10Features: Feature[] = [
  {
    id: 1,
    icon: Camera,
    title: "Snap & Solve Homework",
    description:
      "Capture tricky Grade 10 problems and get instant walkthrough solutions tailored for SEE preparation.",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Prep with AI Mentor",
    description:
      "Get daily revision reminders and clarify doubts with BigB for Mathematics, Science and English.",
  },
  {
    id: 3,
    icon: HelpCircle,
    title: "SEE Question Bank",
    description:
      "Browse SEE past papers, model sets and chapter-wise practice questions curated by experts.",
  },
  {
    id: 4,
    icon: MessageSquare,
    title: "Peer Forum",
    description:
      "Discuss assignments with classmates, get mentor feedback and share winning study strategies.",
  },
  {
    id: 5,
    icon: Award,
    title: "Daily Streak Rewards",
    description:
      "Build healthy study habits, earn streak rewards and unlock badges as you complete practice goals.",
  },
  {
    id: 6,
    icon: UserCircle,
    title: "Progress Dashboard",
    description:
      "Track syllabus completion, mock test scores and teacher feedback in one personalized dashboard.",
  },
  {
    id: 7,
    icon: Sparkles,
    title: "Adaptive Recommendations",
    description:
      "Receive topic suggestions and micro-lessons that adapt to your pace for the SEE board exams.",
  },
];

const featuresByGrade: Record<"grade11-12" | "grade10", Feature[]> = {
  "grade11-12": grade11Features,
  grade10: grade10Features,
};

const ScholarsSpace = () => {
  const [activeTab, setActiveTab] = useState<"grade11-12" | "grade10">(
    "grade11-12"
  );

  return (
    <section className="w-full py-20 px-8 md:px-20 lg:px-[300px] bg-white font-poppins">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-700 mb-3">
              <span className="text-orange-500">Scholars Space</span> is for
              <span className="text-orange-500">.</span>
            </h2>
            <p className="text-sm text-gray-600">
              Scholars Space helps students as well as teachers from Grade 10 to
              Grade 11 & 12 in their Academic Journey.
            </p>
          </div>
          <button className="text-sm bg-blue-50 text-blue-600 py-3 px-4 rounded-full hover:bg-gray-50 transition-colors">
            Join Scholars Space Today
          </button>
        </div>

        {/* Grade Tabs */}
        <div className="flex flex-col items-center justify-center">
          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as "grade11-12" | "grade10")
            }
            className="mb-10 flex justify-center"
          >
            <TabsList className="bg-white-50 rounded-full px-2 py-2 w-[360px] h-[56px] border border-gray-100">
              <TabsTrigger
                value="grade11-12"
                className="rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-all cursor-pointer text-gray-600 data-[state=active]:bg-gray-50 data-[state=active]:text-gray-600 "
              >
                Grade 11 & 12
              </TabsTrigger>
              <TabsTrigger
                value="grade10"
                className="rounded-full px-5 py-2 text-sm font-medium tracking-tight transition-all cursor-pointer text-gray-600 data-[state=active]:bg-gray-50 data-[state=active]:text-gray-600"
              >
                Grade 10
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {/* Feature Cards Grid */}
          <div className="rounded-[32px] border border-gray-100 bg-gray-50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuresByGrade[activeTab].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="bg-white rounded-[24px] p-8 border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                      <Icon className="w-[22px] h-[22px] text-gray-600" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-600 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-justify">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarsSpace;
