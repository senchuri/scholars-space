import React from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full max-w-[1640px] mx-auto flex items-center justify-between px-6 py-4 z-20">
      <div className="flex-shrink-0">
        <Image src="/img/Logo.png" alt="Logo" width={140} height={37} />
      </div>

      <nav>
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="bg-white/50 rounded-full p-3 w-[387px] h-[54px] border border-gray-100">
            <TabsTrigger
              value="home"
              className="rounded-full p-3 w-[66px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:border-blue-200 text-gray-600 hover:text-gray-900"
            >
              Home
            </TabsTrigger>
            <TabsTrigger
              value="explore"
              className="rounded-full  p-3 w-[66px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
            >
              Explore
            </TabsTrigger>
            <TabsTrigger
              value="pricing"
              className="rounded-full  p-3 w-[66px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
            >
              Pricing
            </TabsTrigger>
            <TabsTrigger
              value="ambassadors"
              className="rounded-full  p-3 w-[138px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
            >
              For Ambassadors
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>

      <div className=" flex items-center gap-2">
        <Button className="bg-blue-50 text-blue-600 py-3 px-4 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-none">
          Login
        </Button>
        <Button className="bg-blue-600 text-white py-3 px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-none">
          Sign up
        </Button>
      </div>
    </header>
  );
};

export default Header;
