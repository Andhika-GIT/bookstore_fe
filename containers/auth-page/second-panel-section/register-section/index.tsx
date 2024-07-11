import React from "react";
import { Button } from "@/components/ui";
import { InputWithLabel } from "@/components/molecules";
import TextareaWithLabel from "@/components/molecules/TextareaWithLabel";

const RegisterSection = () => {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create An Account</h1>
        <p className="text-sm text-muted-foreground">Enter your account below</p>
      </div>
      <form>
        <div className="grid gap-y-5">
          <InputWithLabel labelText="Email" inputType="text" />
          <InputWithLabel labelText="Username" inputType="text" />
          <InputWithLabel labelText="Password" inputType="password" />
          <InputWithLabel labelText="Phone Number" inputType="number" />
          <TextareaWithLabel labelText="Address" />
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
