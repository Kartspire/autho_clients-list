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
          <Button onClick={returnToMain} classesBtn={["backBtn"]}>
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
          <Button onClick={logOut} classesBtn={["exitBtn"]}>
            Выйти
          </Button>
        </div>
      </header>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          cumque, natus quasi deserunt eum eaque corporis ut beatae voluptatum
          deleniti accusantium tempore sunt vero nam fugit, ipsa explicabo
          laborum iure non. Dicta odio labore pariatur nobis corporis quidem,
          magni quibusdam distinctio impedit nulla cumque iste sit blanditiis
          ipsum atque nisi illum! Minus nemo recusandae nobis eligendi nostrum
          facilis ducimus, id iure repellendus at! Laudantium quibusdam maiores
          obcaecati voluptates voluptas porro at ipsum neque ipsam unde vero,
          sapiente similique tempora, debitis atque nesciunt reprehenderit? Eos
          ea dolor aliquam modi? Nulla libero repellat dolorem quis ipsum quos
          saepe, obcaecati officia labore nesciunt?
        </p>
      </div>
    </div>
  );
};
