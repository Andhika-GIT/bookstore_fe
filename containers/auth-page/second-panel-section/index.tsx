import React from "react";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";
import { Text } from "@/components/ui";
import Link from "next/link";

type SecondPanelSectionProps = {
  session: string;
};

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({ session }) => {
  let bottomText = "";
  let navigation = "";
  const renderComponent = () => {
    if (session === "login") {
      bottomText = "First time ? sign up here";
      navigation = "register";
      return <LoginSection />;
    } else if (session === "register") {
      bottomText = "Already have account ? sign in here";
      navigation = "login";
      return <RegisterSection />;
    } else {
      bottomText = "First time ? sign up here";
      navigation = "register";
      return <LoginSection />;
    }
  };

  return (
    <div className="flex flex-col justify-center gap-y-10 p-10 md:w-1/2 bg-white">
      {renderComponent()}
      <Link href={`/auth?session=${navigation}`}>
        <Text type="p" className="text-center hover:text-stone-500 cursor-pointer">
          {bottomText}
        </Text>
      </Link>
    </div>
  );
};

export default SecondPanelSection;
