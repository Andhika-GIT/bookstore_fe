import { InputWithLabel } from "@/components/molecules";
import TextareaWithLabel from "@/components/molecules/TextareaWithLabel";
import { User } from "@/types";
import React from "react";

type InfoProfileSectionProps = {
  userProfile: User;
};

const inputClassName =
  "w-full bg-[#e1e0e0] border-t-8 border-x-1 border-b-1 border-[#0b9256] font-extrabold";
const labelClassName = "w-full opacity-50";

const InfoProfileSection: React.FC<InfoProfileSectionProps> = ({ userProfile }) => {
  const { username, email, phoneNumber, address, fullname } = userProfile;
  return (
    <div className="w-full flex flex-col gap-y-10">
      <InputWithLabel
        labelText="Username"
        inputType="text"
        value={username}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <InputWithLabel
        labelText="Fullname"
        inputType="text"
        value={fullname}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <InputWithLabel
        labelText="Email"
        inputType="email"
        value={email}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <InputWithLabel
        labelText="Phone Number"
        inputType="text"
        value={phoneNumber}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <TextareaWithLabel
        labelText="Address"
        value={address}
        labelClassName={labelClassName}
        textareaClassName={inputClassName}
        disabled
      />
    </div>
  );
};

export default InfoProfileSection;
