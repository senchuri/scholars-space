"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface DownloadAppModalProps {
  textColor?: string;
  bgColor?: string;
  bgColorHover?: string;
  textColorHover?: string;
}

const DownloadAppModal = ({
  textColor = "#000",
  bgColor = "#fff",
  bgColorHover = "#f0f0f0",
  textColorHover = "#000",
}: DownloadAppModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "rounded-[30px] px-4 py-3 h-auto text-sm leading-none",
            "transition-colors duration-200"
          )}
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = bgColorHover;
            e.currentTarget.style.color = textColorHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = bgColor;
            e.currentTarget.style.color = textColor;
          }}
        >
          Download Braimy App
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white/95 p-6 rounded-3xl border-0 max-w-lg">
        <div className="flex flex-col gap-2 md:gap-6">
          <h2 
            className="text-lg md:text-2xl font-medium leading-tight text-center tracking-wide"
            style={{
              background: "linear-gradient(53deg, #1F4DE5 0%, #6821A8 64%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Application is Coming soon. Stay Tuned!
          </h2>
          <Image
            src="/img/app-feature-search.png"
            alt="Braimy showcase image"
            width={500}
            height={421}
            className="w-full h-auto"
          />
          <div className="flex flex-row gap-2">
            <Image
              src="/img/button-playstore.png"
              alt="Download from Play Store"
              width={180}
              height={52}
              className="flex-1 h-auto"
            />
            <Image
              src="/img/button-appstore.png"
              alt="Download from App Store"
              width={180}
              height={52}
              className="flex-1 h-auto"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadAppModal;
