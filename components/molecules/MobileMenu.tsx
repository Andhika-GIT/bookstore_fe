"use server";

import React from "react";
import { cookies } from "next/headers";
import { verifyAuth } from "@/lib/utilities/auth";
import MobileMenuItems from "./MobileMenuItems";

const MobileMenu = async () => {
  const jwt_token = cookies().get("jwt")?.value;

  const verifiedToken = jwt_token ? await verifyAuth(jwt_token) : null;

  return <MobileMenuItems isAuthenticated={!!verifiedToken} />;
};

export default MobileMenu;
