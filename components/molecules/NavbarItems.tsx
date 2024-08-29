"use client";

import { useState, useEffect } from "react";
import { Input, Text, useToast } from "@/components/ui";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import SideCart from "./SideCart";
import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import { signOut } from "@/app/actions/auth";
import { LogoutAlert } from "./LogoutAlert";

type NavbarItemsProps = {
  isAuthenticated: boolean;
};

const NavbarItems: React.FC<NavbarItemsProps> = ({ isAuthenticated }) => {
  const pathname = usePathname();
  const { toast } = useToast();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isShowingCart, setIsShowingCart] = useState<boolean>(false);

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

  useEffect(() => {
    let activityTimeout: NodeJS.Timeout;

    const handleActivity = () => {
      setShowNavbar(true);

      if (activityTimeout) {
        clearTimeout(activityTimeout);
      }

      activityTimeout = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    };

    const handleScroll = handleActivity;
    const handleMouseMove = handleActivity;

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (activityTimeout) {
        clearTimeout(activityTimeout);
      }
    };
  }, []);

  if (pathname.startsWith("/auth") || pathname === "/404") {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#FAF9F6] shadow-md transition-transform transform ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } flex justify-between items-center gap-4 px-6 py-4 z-50`}
    >
      <Link href="/">
        <Text type="h3">Bookstore</Text>
      </Link>

      <div className="flex gap-3 items-center">
        <Link
          href="/search"
          className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
        >
          <CiSearch />
          <Text type="p">Search</Text>
        </Link>
        <Link
          href="/profile?section=profile"
          className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
        >
          <CiUser />
          <Text type="p">Profile</Text>
        </Link>
        {isAuthenticated ? (
          <>
            <button
              onClick={() => setIsShowingCart((prev) => !prev)}
              className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
            >
              <CiShoppingCart />
              <Text type="p">Items</Text>
            </button>

            <LogoutAlert
              triggerButton={
                <button className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300">
                  <PiSignOut />
                  <Text type="p" className="text-red-500">
                    Logout
                  </Text>
                </button>
              }
              onConfirm={handleLogout}
            />
          </>
        ) : (
          <>
            <Link
              href="/auth?session=login"
              className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
            >
              <PiSignIn />
              <Text type="p">Login</Text>
            </Link>
          </>
        )}
      </div>

      {isShowingCart && (
        <SideCart isShowingCart={isShowingCart} setIsShowingCart={setIsShowingCart} />
      )}
    </div>
  );
};

export default NavbarItems;
