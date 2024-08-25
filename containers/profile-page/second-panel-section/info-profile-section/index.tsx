import React from "react";
import { Text } from "@/components/ui";
import { InputWithLabel, TextareaWithLabel } from "@/components/molecules";
import { NextPage } from "next";
import { getProfile } from "@/app/actions/user";

const inputClassName =
  "w-full bg-[#e1e0e0] border-t-8 border-x-1 border-b-1 border-[#0b9256] font-extrabold";
const labelClassName = "w-full opacity-50";

const InfoProfileSection: NextPage = async () => {
  const data = await getProfile();

  if (!data) {
    return (
      <div className="flex justify-center">
        <Text type="h3">Could not get profile info</Text>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col gap-y-2 md:gap-y-10">
      <InputWithLabel
        labelText="Username"
        inputType="text"
        value={data?.username}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />

      <InputWithLabel
        labelText="Email"
        inputType="email"
        value={data?.email}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <InputWithLabel
        labelText="Phone Number"
        inputType="text"
        value={data?.phone_number}
        labelClassName={labelClassName}
        inputClassName={inputClassName}
        disabled
      />
      <TextareaWithLabel
        labelText="Address"
        value={data?.address}
        labelClassName={labelClassName}
        textareaClassName={inputClassName}
        disabled
      />
    </div>
  );
};

export default InfoProfileSection;
