"use client";

import { useState, useEffect } from "react";
import { Input, Text } from "@/components/ui";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import SideCart from "./SideCart";
import { usePathname } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const displayComponent = !pathname.startsWith("/auth");
  const [showNavbar, setShowNavbar] = useState(false);
  const [isShowingCart, setIsShowingCart] = useState<boolean>(false);

  useEffect(() => {
    let activityTimeout: NodeJS.Timeout;

    const handleActivity = () => {
      setShowNavbar(true);

      if (activityTimeout) {
        clearTimeout(activityTimeout);
      }

      activityTimeout = setTimeout(() => {
        setShowNavbar(false);
      }, 2000); // Waktu dalam milidetik saat navbar akan sembunyi setelah pengguna berhenti bergerak atau menggulir (2000ms = 2 detik)
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

  return (
    <>
      {displayComponent && (
        <div
          className={`fixed top-0 left-0 w-full bg-[#FAF9F6] shadow-md transition-transform transform ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } flex justify-between items-center gap-4 px-6 py-4 z-50`}
        >
          <Link href="/">
            <Text type="h3">Bookstore</Text>
          </Link>
          <Input
            baseClassname="w-full shadow-md"
            type="text"
            endIcon={CiSearch}
            placeholder="Search..."
          />
          <div className="flex gap-3 items-center">
            <Link
              href="/profile?section=profile"
              className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
            >
              <CiUser />
              <Text type="p">profile</Text>
            </Link>
            <button
              onClick={() => setIsShowingCart((prev) => !prev)}
              className="flex gap-1 items-center cursor-pointer hover:bg-primary_grey p-1 transition transform duration-300"
            >
              <CiShoppingCart />
              <Text type="p">Items</Text>
            </button>
          </div>

          {isShowingCart && (
            <SideCart isShowingCart={isShowingCart} setIsShowingCart={setIsShowingCart} />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
