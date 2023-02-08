import React, { FC, MutableRefObject, memo } from "react";
import styles from "./Input.module.css";

interface IInputProps {
  label?: string;
  type: string;
  refElement?: MutableRefObject<HTMLInputElement | null>;
  text?: string;
  valid?: boolean;
  validText: string;
}

export const Input: FC<IInputProps> = memo(
  ({ label, type, refElement, text, valid, validText }) => {
    return (
      <div className={styles.inputWrapper}>
        <label>
          <p className={styles.label}> {label}</p>
          <input
            type={type}
            ref={refElement}
            value={text}
            className={`${styles.input} ${valid && styles.unValid}`}
          />
        </label>
        {valid && <p className={styles.unValidText}>{validText}</p>}
      </div>
    );
  }
);
