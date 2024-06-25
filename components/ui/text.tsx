import React, { ForwardedRef, ReactNode } from "react";

type TextProps = {
  textRef?: ForwardedRef<HTMLElement>;
  type?: keyof JSX.IntrinsicElements;
  className?: string;
  formatted?: boolean;
  children: ReactNode;
  [key: string]: any;
};

const Text: React.FC<TextProps> = ({
  textRef,
  type = "span",
  className = "",
  formatted,
  children,
  ...props
}) => {
  return React.createElement(type, {
    dangerouslySetInnerHTML: {
      __html: children,
    },
    className: `${className} m-0`,
    ref: textRef,
    ...props,
  });
};

export default Text;
