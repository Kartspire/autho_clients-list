import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { checkFormValid, resetValid } from "../../app/reducers/formValidSlice";
import { getUsers } from "../../asyncActions/users";
import { Button } from "../Button";
import { CardsList } from "../CardsList";
import styles from "./Main.module.css";

interface IMainProps {}

export const Main: FC<IMainProps> = () => {
  console.log("render main");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const usersIsLoaded = useAppSelector((state) => state.users.usersIsLoaded);
  // const users = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(resetValid());
    if (!usersIsLoaded) dispatch(getUsers());
  }, [usersIsLoaded]);

  function logOut() {
    navigate("/");
    localStorage.removeItem("token");
  }

  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Наша команда</h1>
          <p className={styles.subTitle}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
          <Button onClick={logOut} classBtn="exitBtn">
            Выход
          </Button>
        </div>
      </header>
      <main className={styles.main}>
        <div className="container">
          <CardsList />
        </div>
      </main>
    </div>
  );
};
