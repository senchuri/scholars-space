"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full max-w-[1640px] mx-auto relative z-20">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/img/Logo.png"
            alt="Logo"
            width={140}
            height={37}
            className="w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
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
                className="rounded-full p-3 w-[66px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
              >
                Explore
              </TabsTrigger>
              <TabsTrigger
                value="pricing"
                className="rounded-full p-3 w-[66px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
              >
                Pricing
              </TabsTrigger>
              <TabsTrigger
                value="ambassadors"
                className="rounded-full p-3 w-[138px] h-[38px] text-sm font-medium transition-all cursor-pointer data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm text-gray-600 hover:text-gray-900"
              >
                For Ambassadors
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button className="bg-blue-50 text-blue-600 py-2 sm:py-3 px-3 sm:px-4 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-none text-sm">
            Login
          </Button>
          <Button className="bg-blue-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-none text-sm">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Explore
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block py-2 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                For Ambassadors
              </a>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-200">
              <Button className="bg-blue-50 text-blue-600 py-3 px-4 rounded-full cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-none w-full sm:w-auto">
                Login
              </Button>
              <Button className="bg-blue-600 text-white py-3 px-4 rounded-full cursor-pointer hover:bg-blue-600 hover:text-white transition-none w-full sm:w-auto">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
