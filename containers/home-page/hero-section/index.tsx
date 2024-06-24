import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="relative mx-auto h-[500px] w-full border-4 border-sky-300 rounded-md">
        <Image
          src="/hero-wallpaper.jpeg"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="w-full h-full rounded-md"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center px-16 justify-between">
          <div className="space-y-6">
            <div>
              <h2 className="text-white text-8xl font-bold">Summer Sale</h2>
              <h2 className="text-white text-3xl font-bold">Up to 30 % off best seller</h2>
            </div>
            <Button variant="secondary" className="w-min">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
