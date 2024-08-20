"use client";

import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "../ui";

interface SingleSelectProps {
  items: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  items,
  onChange,
  label,
  placeholder = "Select an option",
  className,
}) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {label && (
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
          </SelectGroup>
        )}
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SingleSelect;
