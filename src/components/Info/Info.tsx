import { useNavigate } from "react-router-dom";
import styles from "./Info.module.css";
import { useAppSelector } from "../../app/hooks";
import { Button } from "../Button";
import { FC } from "react";

interface IInfoProps {}

export const Info: FC<IInfoProps> = () => {
  const userInfo = useAppSelector((state) => state.userInfo.user);
  const navigate = useNavigate();

  function logOut() {
    navigate("/");
    localStorage.removeItem("token");
  }

  function returnToMain() {
    navigate("/main");
  }

  return (
    <div>
      <header className={styles.header}>
        <div className="container">
          <Button onClick={returnToMain} classBtn="backBtn">
            Назад
          </Button>
          <div className={styles.avatarWrapper}>
            <img
              src={userInfo?.avatar}
              alt="Тут была аватарка"
              className={styles.avatar}
            />
          </div>
          <h2>{`${userInfo?.first_name} ${userInfo?.last_name}`}</h2>
          <Button onClick={logOut} classBtn="exitBtn">
            Выйти
          </Button>
        </div>
      </header>
    </div>
  );
};
