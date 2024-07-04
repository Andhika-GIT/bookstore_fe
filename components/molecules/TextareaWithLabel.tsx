import React from "react";
import { Label, Textarea } from "../ui";

type TextareaWithLabelProps = {
  labelFor?: string;
  textareaId?: string;
  labelClassName?: string;
  textareaClassName?: string;
  disabled?: boolean;
  textareaPlaceholder?: string;
  labelText: string;
  value?: string | number;
};

const TextareaWithLabel: React.FC<TextareaWithLabelProps> = ({
  labelFor = "",
  textareaId = "",
  disabled = false,
  labelClassName = "",
  textareaClassName = "",
  labelText = "",
  value,

  textareaPlaceholder = "input here..",
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Label htmlFor={labelFor} className={labelClassName}>
        {labelText}
      </Label>
      <Textarea
        value={value}
        disabled={disabled}
        id={textareaId}
        placeholder={textareaPlaceholder}
        className={textareaClassName}
      />
    </div>
  );
};

export default TextareaWithLabel;
