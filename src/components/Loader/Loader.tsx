import styles from "./Loader.module.css";
import "./Loader.module.css";
import { FC } from "react";

interface ILoaderProps {
  style?: string;
}

export const Loader: FC<ILoaderProps> = ({ style }) => {
  return <div className={`${styles.loader} ${style && styles[style]}`}></div>;
};
