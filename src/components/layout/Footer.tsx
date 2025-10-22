import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-5 px-10">
      <div className="max-w-full  flex items-center justify-between">
        {/* Left side - Logo and copyright */}
        <div className="text-blue-700 text-[36px] font-bold">
          Scholars Space <span className="text-orange-600">.</span>
        </div>
        <div className="text-sm text-gray-400">
          ©2025 All rights reserved | Scholars Space learning pvt. Ltd
        </div>
        {/* Right side - Navigation links */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="/login"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Signup
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
