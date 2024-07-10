import React from "react";
import { Label, Input, Button } from "@/components/ui";
import { InputWithLabel } from "@/components/molecules";

const LoginSection = () => {
  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign Into Application</h1>
        <p className="text-sm text-muted-foreground">Enter your account below</p>
      </div>
      <form>
        <div className="grid gap-y-7">
          <InputWithLabel labelText="Email or Username" inputType="text" />
          <InputWithLabel labelText="Password" inputType="password" />
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
