import { NextPage } from "next";
import { Card } from "@/components/ui";
import { FirstPanelSection, SecondPanelSection } from "@/containers/auth-page";

type AuthProps = {
  searchParams: {
    session: string;
  };
};

const Auth: NextPage<AuthProps> = ({ searchParams: { session } }) => {
  return (
    <div className="h-lvh">
      <div className="flex h-screen items-center justify-center">
        <Card className="overflow-hidden rounded-lg border bg-background shadow-lg">
          <div className="flex flex-col md:flex-row h-full md:h-screen md:max-h-[700px] max-w-6xl">
            <FirstPanelSection />
            <SecondPanelSection session={session ? session : "login"} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
