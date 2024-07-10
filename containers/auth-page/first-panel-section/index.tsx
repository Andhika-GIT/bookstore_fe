import React from "react";
import Image from "next/image";

const FirstPanelSection: React.FC = () => {
  return (
    <div className="relative flex flex-col bg-muted p-10 md:w-1/2 text-white">
      <div className="relative z-20 text-2xl font-medium hidden md:block">Bookstore</div>
      <div className="relative z-20 mt-auto hidden md:block">
        <blockquote className="space-y-2">
          <p className="text-lg">
            “Immerse Yourself in a World of Stories – Discover, Read, and Get Inspired with Our Vast
            Collection!.”
          </p>
        </blockquote>
      </div>
      <div className="absolute inset-0 z-10">
        <Image
          src="/login_cover.jpg"
          alt="Login Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
    </div>
  );
};

export default FirstPanelSection;
