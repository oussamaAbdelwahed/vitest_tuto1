import React from "react";

const ButtonWrapper: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { title: string }
> = ({ title, ...nativeButtonProps }) => {
  return <button {...nativeButtonProps}>{title}</button>;
};

export default ButtonWrapper;
