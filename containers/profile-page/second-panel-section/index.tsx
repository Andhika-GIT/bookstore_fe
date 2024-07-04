import React from "react";
import InfoProfileSection from "./info-profile-section";
import TransactionSection from "./transaction-section";
import { User } from "@/types";

type SecondPanelSectionProps = {
  userProfile: User;
  section: string;
  className?: string;
};

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({
  section,
  userProfile,
  className = "",
}) => {
  const renderComponent = () => {
    if (section === "profile") {
      return <InfoProfileSection userProfile={userProfile} />;
    } else if (section === "transaction") {
      return <TransactionSection />;
    } else {
      return <InfoProfileSection userProfile={userProfile} />;
    }
  };

  return <div className={className}>{renderComponent()}</div>;
};

export default SecondPanelSection;
