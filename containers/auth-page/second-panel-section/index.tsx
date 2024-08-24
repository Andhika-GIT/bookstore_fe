"use client";

import React, { useState } from "react";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";
import { Text } from "@/components/ui";
import Link from "next/link";

import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "@/app/actions/auth";
import { loginSchemaType, registerSchemaType } from "@/schemas";
import { isLoginSchemaType, isRegisterSchemaType } from "@/lib/utilities";
import { ApiError } from "@/types";

type SecondPanelSectionProps = {
  session: string;
};

type FormData = loginSchemaType | registerSchemaType;

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({ session }) => {
  // Conditional text
  let bottomText = "";
  let navigation = "";

  // for invalid credential
  const [credentialErrorMessage, setCredentialErrorMessage] = useState<string | null>(null);

  // Mutation
  const { mutate } = useMutation({
    mutationFn: (formData: FormData) => {
      setCredentialErrorMessage(null);
      if (session === "login" && isLoginSchemaType(formData)) {
        return signIn(formData);
      } else if (session === "register" && isRegisterSchemaType(formData)) {
        return signUp(formData);
      } else {
        return Promise.reject(new Error("Invalid session type or form data"));
      }
    },
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (error: ApiError) => {
      if (error?.errorData?.code === 400) {
        setCredentialErrorMessage("Invalid Username or Password");
      } else {
        setCredentialErrorMessage("Something went wrong please try again later");
      }
    },
  });

  const renderComponent = () => {
    if (session === "login") {
      bottomText = "First time? Sign up here";
      navigation = "register";
      return <LoginSection onFormSubmit={(data) => mutate(data as loginSchemaType)} />;
    } else if (session === "register") {
      bottomText = "Already have an account? Sign in here";
      navigation = "login";
      return <RegisterSection onFormSubmit={(data) => mutate(data as registerSchemaType)} />;
    } else {
      bottomText = "First time? Sign up here";
      navigation = "register";
      return <LoginSection onFormSubmit={(data) => mutate(data as loginSchemaType)} />;
    }
  };

  return (
    <div className="flex flex-col justify-center gap-y-10 p-10 md:w-1/2 bg-white relative">
      {renderComponent()}
      {credentialErrorMessage && (
        <Text
          type="p"
          className="text-red-600 text-center text-xs absolute left-0 right-0 bottom-[80px]"
        >
          {credentialErrorMessage}
        </Text>
      )}
      <div className="flex flex-col gap-y-3">
        <Link href={`/auth?session=${navigation}`}>
          <Text type="p" className="text-center hover:text-stone-500 cursor-pointer">
            {bottomText}
          </Text>
        </Link>
        <Link href={"/"}>
          <Text type="p" className="text-center text-slate-400 hover:text-neutral-700">
            Back to home
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default SecondPanelSection;
