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
  value?: string; // Tambahkan prop value
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  items,
  onChange,
  label,
  placeholder = "Select an option",
  className,
  value, // Tambahkan value prop
}) => {
  return (
    <Select onValueChange={onChange} value={value}>
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
