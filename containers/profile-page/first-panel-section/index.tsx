import { Text } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FirstPanelSelectionProps = {
  reviewCount: number;
  orderCount: number;
  username: string;
  fullName: string;
  className?: string;
  section: string;
};

const FirstPanelSection: React.FC<FirstPanelSelectionProps> = ({
  reviewCount,
  orderCount,
  username,
  fullName,
  className = "",
  section,
}) => {
  return (
    <div className={`flex-col space-y-6 ${className}`}>
      <div className="space-y-5">
        <div className="flex justify-center lg:justify-stretch">
          <Image
            src={"/default_user_profile.jpg"}
            alt="user_profile"
            className="rounded-full"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-[2px]">
          <Text type="h4" className="font-extrabold">
            {username}
          </Text>
          <Text type="h6" className="font-medium text-zinc-500">
            {fullName}
          </Text>
        </div>
      </div>

      <div className="flex space-x-5 items-center">
        <div className="space-y-2">
          <Text type="h6" className="font-extrabold">
            {reviewCount}
          </Text>
          <Text type="span">Reviews</Text>
        </div>
        <div className="space-y-2">
          <Text type="h6" className="font-extrabold">
            {orderCount}
          </Text>
          <Text type="span">Order</Text>
        </div>
      </div>

      <div className="flex-grow border-t-2 border-gray-400 w-full lg:max-w-[300px]"></div>

      <div className="flex flex-row justify-center lg:justify-stretch lg:flex-col gap-y-2 gap-x-5">
        <Link
          href="/profile?section=profile"
          className={`${section === "profile" ? "font-bold" : "opacity-60"}`}
        >
          <Text type="h6">Profile</Text>
        </Link>

        <Link
          href="/profile?section=transaction"
          className={`${section === "transaction" ? "font-bold" : "opacity-60"}`}
        >
          <Text type="h6">Order History</Text>
        </Link>
      </div>
    </div>
  );
};

export default FirstPanelSection;
