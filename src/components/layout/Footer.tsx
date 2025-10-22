import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1640px] mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Logo */}
          <div className="text-blue-700 text-[36px] font-bold">
            Scholars Space <span className="text-orange-600">.</span>
          </div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            ©2025 All rights reserved | Scholars Space learning pvt. Ltd
          </div>
          
          {/* Navigation links */}
          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/login"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Signup
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-6">
          {/* Logo */}
          <div className="text-center">
            <div className="text-blue-700 text-[28px] sm:text-[32px] font-bold">
              Scholars Space <span className="text-orange-600">.</span>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/login"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Signup
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-gray-400 pt-4 border-t border-gray-200">
            ©2025 All rights reserved | Scholars Space learning pvt. Ltd
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
