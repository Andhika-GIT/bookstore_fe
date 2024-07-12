import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export const getJwtSecretKey = () => {
  const secret_key = process.env.JWT_SECRET_KEY;
  if (!secret_key || secret_key?.length === 0) {
    throw new Error("The enviroment variable JWT_SECRET_KEY is not set");
  }

  return secret_key;
};

export const verifyAuth = async (token: string) => {
  const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));

  if (!verified) {
    return false;
  } else {
    return true;
  }
};
