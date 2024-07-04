import { Input, Text } from "@/components/ui";
import Link from "next/link";
import React from "react";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";

const HeaderSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Text type="h1">Bookstore</Text>
      <Input baseClassname="w-full" type="text" endIcon={CiSearch} placeholder="Search..." />
      <div className="flex gap-3 items-center">
        <Link href="/profile?section=profile" className="flex gap-1 items-center cursor-pointer">
          <CiUser />
          <Text type="p">user</Text>
        </Link>
        <div className="flex gap-1 items-center">
          <CiShoppingCart />
          <Text type="p">Items</Text>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
