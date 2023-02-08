import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type IButtonProps = React.PropsWithChildren<{
  type?: string;
  classesBtn: string[];
  tab?: number;
  onClick?(event: MouseEventHandler): void;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<IButtonProps> = ({
  children,
  type,
  classesBtn,
  tab,
  onClick,
}) => {
  const allClasses = classesBtn.map((el) => styles[el]).join(" ");

  return (
    <button type={type} onClick={onClick} className={allClasses} tabIndex={tab}>
      {children}
    </button>
  );
};
