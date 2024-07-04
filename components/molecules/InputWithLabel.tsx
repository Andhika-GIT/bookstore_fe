import React from "react";
import { Input, Label } from "../ui";

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
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Label htmlFor={labelFor} className={labelClassName}>
        {labelText}
      </Label>
      <Input
        value={value}
        disabled={disabled}
        type={inputType}
        id={inputId}
        placeholder={inputPlaceholder}
        className={inputClassName}
      />
    </div>
  );
};

export default InputWithLabel;
