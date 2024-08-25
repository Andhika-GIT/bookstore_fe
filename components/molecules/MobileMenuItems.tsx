"use client";

import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
  Text,
  useToast,
} from "../ui";
import Link from "next/link";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import { signOut } from "@/app/actions/auth";
import { LogoutAlert } from "./LogoutAlert";
import { usePathname } from "next/navigation";

type MobileMenuItemsProps = {
  isAuthenticated: boolean;
};

const MobileMenuItems: React.FC<MobileMenuItemsProps> = ({ isAuthenticated }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/auth") || pathname === "/404") {
    return null;
  }

  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await signOut();
      window.location.href = "/auth?session=login";
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
        duration: 3000,
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="p-2 bg-primary_green-dark text-white rounded-full shadow-lg">
            <TfiMenuAlt className="text-xl" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 text-lg">
                <CiUser />
                Home
              </Link>
              <Link href="/search" className="flex items-center gap-2 text-lg">
                <CiSearch />
                Search
              </Link>
              <Link href="/profile?section=profile" className="flex items-center gap-2 text-lg">
                <CiUser />
                Profile
              </Link>
              {isAuthenticated ? (
                <>
                  <Link href="/cart" className="flex items-center gap-2 text-lg">
                    <CiShoppingCart />
                    Cart
                  </Link>
                  <LogoutAlert
                    triggerButton={
                      <button className="flex items-center gap-2 text-lg text-red-500 cursor-pointer hover:bg-primary_grey transition transform duration-300">
                        <PiSignOut />
                        Logout
                      </button>
                    }
                    onConfirm={handleLogout}
                  />
                </>
              ) : (
                <Link href="/auth?session=login" className="flex items-center gap-2 text-lg">
                  <PiSignIn />
                  Login
                </Link>
              )}
            </div>
            <DrawerClose asChild>
              <Button className="mt-4 w-full bg-primary py-2 rounded">
                <Text type="span" className="font-bold">
                  Close
                </Text>
              </Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenuItems;
