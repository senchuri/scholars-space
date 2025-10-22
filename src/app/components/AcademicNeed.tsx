import { CircleSketchNeedText } from "@/components/svg/Svgs";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Snap & Get Instant Answer",
    description: "Click Photo of Question & Get Instant Answer",
    image: "/img/app-feature-snap.png",
    alt: "Snap and get instant answer",
    width: 497,
    height: 434,
  },
  {
    id: 2,
    title: "Search. Ask. Chat.",
    description: "Search, Ask OR Chat, Get Instant Answer",
    image: "/img/app-feature-search.png",
    alt: "Search, ask, and chat",
    width: 531,
    height: 430,
  },
  {
    id: 3,
    title: "Powered by AI Mentor, Big8",
    description: "Big8, trained over half a million Questions & Answers",
    image: "/img/app-feature-BigB-chat.png",
    alt: "AI Mentor Big8",
    width: 539,
    height: 436,
  },
  {
    id: 4,
    title: "Learning Points, Streaks & More",
    description: "Engage in Scholars Space, Get exclusive perks & offers",
    image: "/img/app-feature-learning-streak.png",
    alt: "Learning points and streaks",
    width: 524,
    height: 422,
  },
];

const AcademicNeed = () => {
  return (
    <section className="w-full py-[200px] px-[300px] bg-white font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-normal text-gray-700">
          <span className="relative inline-block">
            <span className="text-blue-600">One App</span>
            <div className="absolute -left-2 -top-4 w-full h-auto">
              <CircleSketchNeedText />
            </div>
          </span>{" "}
          for all your Academic Needs
        </h2>
        <p className="mt-4 text-base text-gray-600 font-normal">
          Stop searching for 100s of Apps just for a Question, Now you've got
          everything at one App.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-50 rounded-3xl p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-base font-medium text-gray-600">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-400 mb-10">{feature.description}</p>
            <div className="relative w-full max-w-xs">
              <Image
                src={feature.image}
                alt={feature.alt}
                className="w-full h-auto"
                width={feature.width}
                height={feature.height}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicNeed;
