import React, { ForwardedRef, ReactNode } from "react";

type TextProps = {
  textRef?: ForwardedRef<HTMLElement>;
  type?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
  [key: string]: any;
};

// Peta tipe elemen ke kelas TailwindCSS
const typeClassMap: { [key in keyof JSX.IntrinsicElements]?: string } = {
  h1: "text-6xl font-bold",
  h2: "text-5xl font-semibold",
  h3: "text-4xl font-medium",
  h4: "text-3xl font-normal",
  h5: "text-2xl font-light",
  h6: "text-xl font-light",
  p: "text-base",
  span: "text-sm",
  // Tambahkan tipe elemen lainnya jika diperlukan
};

const Text: React.FC<TextProps> = ({
  textRef,
  type = "span",
  className = "",
  children,
  ...props
}) => {
  // Tentukan kelas default berdasarkan tipe elemen
  const defaultClass = typeClassMap[type] || "";

  return React.createElement(
    type,
    {
      className: `${defaultClass} ${className} m-0`,
      ref: textRef,
      ...props,
    },
    children,
  );
};

export default Text;
