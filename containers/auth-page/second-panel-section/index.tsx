import React from "react";
import LoginSection from "./login-section";
import RegisterSection from "./register-section";

type SecondPanelSectionProps = {
  session: string;
};

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({ session }) => {
  const renderComponent = () => {
    if (session === "login") {
      return <LoginSection />;
    } else if (session === "register") {
      return <RegisterSection />;
    } else {
      return <LoginSection />;
    }
  };
  return (
    <div className="flex flex-col justify-center p-10 md:w-1/2 bg-white">{renderComponent()}</div>
  );
};

export default SecondPanelSection;
