"use server";

// auth
import { verifyAuth } from "@/lib/utilities/auth";
import { cookies } from "next/headers";
import NavbarItems from "./NavbarItems";

const Navbar = async () => {
  const jwt_token = cookies().get("jwt")?.value;

  const verifiedToken = jwt_token ? await verifyAuth(jwt_token) : null;

  return (
    <div className="hidden md:block">
      <NavbarItems isAuthenticated={!!verifiedToken} />
    </div>
  );
};

export default Navbar;
