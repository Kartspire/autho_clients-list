import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type IButtonProps = React.PropsWithChildren<{
  type?: string;
  classBtn?: string;
  onClick?(event: MouseEventHandler): void;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<IButtonProps> = ({
  children,
  type,
  classBtn,
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classBtn && styles[classBtn]}
    >
      {children}
    </button>
  );
};
