// src/app/utils/typeGuards.ts
import { loginSchemaType, registerSchemaType } from "@/schemas";

export const isLoginSchemaType = (data: any): data is loginSchemaType => {
  return (data as loginSchemaType).username !== undefined;
};

export const isRegisterSchemaType = (data: any): data is registerSchemaType => {
  return (data as registerSchemaType).email !== undefined;
};
