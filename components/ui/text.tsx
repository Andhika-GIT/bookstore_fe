import React, { ReactNode } from "react";

type TextProps = {
  type: "p" | "h1" | "h2" | "h3";
  className?: string;
  children: ReactNode;
};

const Text: React.FC<TextProps> = ({ type, className, children }) => {
  const Element = type || "p";
  return <Element className={className}>{children}</Element>;
};

export default Text;
