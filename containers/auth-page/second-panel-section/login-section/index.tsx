"use client";

import React from "react";
import { Button } from "@/components/ui";
import { InputWithLabel } from "@/components/molecules";

// form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/schemas";

type LoginSectionProps = {
  onFormSubmit: (data: loginSchemaType) => void;
};

const LoginSection: React.FC<LoginSectionProps> = ({ onFormSubmit }) => {
  // form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginSchemaType) => {
    onFormSubmit(data);
  };
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign Into Application</h1>
        <p className="text-sm text-muted-foreground">Enter your account below</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-y-7">
          <InputWithLabel
            labelText="Email or Username"
            inputType="text"
            register={register("username")}
            errorMessage={errors?.username?.message}
          />
          <InputWithLabel
            labelText="Password"
            inputType="password"
            register={register("password")}
            errorMessage={errors?.password?.message}
          />
          <Button
            type="submit"
            variant="light_green"
            className="inline-flex items-center justify-center w-full h-9 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md shadow-sm focus:outline-none focus:ring-1"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
