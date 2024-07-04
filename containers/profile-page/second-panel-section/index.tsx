import React from "react";
import InfoProfileSection from "./info-profile-section";
import TransactionSection from "./transaction-section";

type SecondPanelSectionProps = {
  section: string;
  className?: string;
};

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({ section, className = "" }) => {
  const renderComponent = () => {
    if (section === "profile") {
      return <InfoProfileSection />;
    } else if (section === "transaction") {
      return <TransactionSection />;
    } else {
      return <InfoProfileSection />;
    }
  };

  return <div className={className}>{renderComponent()}</div>;
};

export default SecondPanelSection;
