"use client";

import React from "react";
import { Button } from "@/components/ui";
import { InputWithLabel } from "@/components/molecules";
import TextareaWithLabel from "@/components/molecules/TextareaWithLabel";

// form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema, registerSchemaType } from "@/schemas";

type RegisterSectionProps = {
  onFormSubmit: (data: registerSchemaType) => void;
};

const RegisterSection: React.FC<RegisterSectionProps> = ({ onFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onsubmit = (data: registerSchemaType) => {
    onFormSubmit(data);
  };
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create An Account</h1>
        <p className="text-sm text-muted-foreground">Enter your account below</p>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="grid gap-y-6">
          <InputWithLabel
            labelText="Email"
            inputType="text"
            register={register("email")}
            errorMessage={errors?.email?.message}
          />
          <InputWithLabel
            labelText="Username"
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
          <InputWithLabel
            labelText="Phone Number"
            inputType="number"
            register={register("phoneNumber")}
            errorMessage={errors?.phoneNumber?.message}
          />
          <TextareaWithLabel
            labelText="Address"
            register={register("address")}
            errorMessage={errors?.address?.message}
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

export default RegisterSection;
