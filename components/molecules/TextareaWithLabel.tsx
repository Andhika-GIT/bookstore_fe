import React from "react";
import { Label, Textarea, Text } from "../ui";
import { UseFormRegisterReturn } from "react-hook-form";

type TextareaWithLabelProps = {
  labelFor?: string;
  textareaId?: string;
  labelClassName?: string;
  textareaClassName?: string;
  disabled?: boolean;
  textareaPlaceholder?: string;
  labelText: string;
  value?: string | number;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
};

const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({
  labelFor = "",
  textareaId = "",
  disabled = false,
  labelClassName = "",
  textareaClassName = "",
  labelText = "",
  value,
  register,
  textareaPlaceholder = "input here..",
  errorMessage,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Label htmlFor={labelFor} className={labelClassName}>
        {labelText}
      </Label>
      <div className="relative">
        <Textarea
          value={value}
          disabled={disabled}
          id={textareaId}
          placeholder={textareaPlaceholder}
          className={textareaClassName}
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

export default TextareaWithLabel;
