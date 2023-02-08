import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { Form } from "../Form";
import { Loader } from "../Loader";
import styles from "./Login.module.css";

interface ILoginProps {}

export const Login: FC<ILoginProps> = () => {
  console.log("render login");
  // const formValid = useAppSelector((state) => state.formValid.formValid);
  const authoRes = useAppSelector((state) => state.auth.authoRes);
  const loading = useAppSelector((state) => state.loader.loading);
  // const errorMessage = useAppSelector((state) => state.auth.error);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/main");
  }, [authoRes]);

  return (
    <div className={styles.login}>
      {loading && (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
      <Form />
    </div>
  );
};
