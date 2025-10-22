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
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 xl:py-[200px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[300px] bg-white font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-normal text-gray-700">
          <span className="relative inline-block">
            <span className="text-blue-600 ">One App</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center scale-100">
                <CircleSketchNeedText />
              </div>
            </div>
          </span>{" "}
          for all your Academic Needs
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 font-normal px-4">
          Stop searching for 100s of Apps just for a Question, Now you've got
          everything at one App.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-sm sm:text-base font-medium text-gray-600">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 md:mb-10 px-2">
              {feature.description}
            </p>
            <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs">
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
