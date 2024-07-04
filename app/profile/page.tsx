import { NextPage } from "next";
import { FirstPanelSection, SecondPanelSection } from "@/containers/profile-page";

type ProfileProps = {
  searchParams: {
    section: string;
  };
};

const Profile: NextPage<ProfileProps> = ({ searchParams: { section } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3 h-screen">
      <FirstPanelSection reviewCount={5} orderCount={5} section={section} name="Hubla.exe" />
      <SecondPanelSection section={section} className="col-span-2" />
    </div>
  );
};

export default Profile;
