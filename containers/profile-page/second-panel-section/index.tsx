import React from "react";
import InfoProfileSection from "./info-profile-section";
import TransactionSection from "./transaction-section";
import { Suspense } from "react";
import { InfoProfileSectionSkeleton } from "@/components/loader";

type SecondPanelSectionProps = {
  section: string;
  className?: string;
};

const SecondPanelSection: React.FC<SecondPanelSectionProps> = ({ section, className = "" }) => {
  const renderComponent = () => {
    if (section === "profile") {
      return (
        <Suspense key={`${section}-${className}`} fallback={<InfoProfileSectionSkeleton />}>
          <InfoProfileSection />
        </Suspense>
      );
    } else if (section === "transaction") {
      return <TransactionSection />;
    } else {
      return (
        <Suspense key={`${section}-${className}`} fallback={<InfoProfileSectionSkeleton />}>
          <InfoProfileSection />
        </Suspense>
      );
    }
  };

  return <div className={className}>{renderComponent()}</div>;
};

export default SecondPanelSection;
