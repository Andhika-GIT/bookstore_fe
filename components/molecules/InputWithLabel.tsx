import React from "react";
import { Input, Label, Text } from "../ui";
import { UseFormRegisterReturn } from "react-hook-form";

type InputWithLabelProps = {
  labelFor?: string;
  inputId?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
  inputPlaceholder?: string;
  value?: string | number;
  labelText: string;
  inputType: string;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  labelFor = "",
  inputId = "",
  disabled = false,
  labelClassName = "",
  inputClassName = "",
  inputType = "text",
  value,
  labelText = "label",
  inputPlaceholder = "input here..",
  register,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Label htmlFor={labelFor} className={labelClassName}>
        {labelText}
      </Label>
      <div className="relative">
        <Input
          value={value}
          disabled={disabled}
          type={inputType}
          id={inputId}
          placeholder={inputPlaceholder}
          className={inputClassName}
          {...register}
        />
        {errorMessage && (
          <Text type="p" className="text-xs text-red-600 absolute left-0">
            {errorMessage}
          </Text>
        )}
      </div>
    </div>
  );
};

export default InputWithLabel;
