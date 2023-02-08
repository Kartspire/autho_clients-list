import { Link, useNavigate } from "react-router-dom";
import styles from "./Info.module.css";
import { useAppSelector } from "../../app/hooks";
import { WithLoader } from "../WithLoader";
import cookingTime from "../../assets/img/cookingTime.png";
import { Button } from "../Button";
import { FC } from "react";
// import { Ingredients } from "./Ingredients";

interface IInfoProps {}

export const Info: FC<IInfoProps> = () => {
  const userInfo = useAppSelector((state) => state.userInfo.user);
  const text = useAppSelector((state) => state.userInfo.text);
  const navigate = useNavigate();
  // const recipeImage = useAppSelector((state) => state.recipeInfo.recipeImage);

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
      <main>
        <div className="container">
          <p className={styles.text}>{text}</p>
        </div>
      </main>
    </div>
    // <WithLoader>
    //   <div className="container">
    //     <Link to="/recipes" className={styles.back}></Link>
    //     {/* <h3 className={styles.recipeTitle}>{recipeInfo?.title}</h3> */}
    //     <div className={styles.imgWrapper}>
    //       {/* <img className={styles.recipeImage} src={recipeImage} alt="" /> */}
    //     </div>
    //     <figure className={styles.cookingTimeWrapper}>
    //       <img className={styles.cookingTimeImg} src={cookingTime} alt="" />
    //       {/* <figcaption>ready in {recipeInfo?.readyInMinutes} minutes</figcaption> */}
    //     </figure>
    //     <p
    //       className={styles.recipeDescription}
    //       // dangerouslySetInnerHTML={{ __html: recipeInfo?.summary! }}
    //     ></p>
    //     <h3 className={styles.sectionHeader}>Ingredients</h3>
    //     <Ingredients
    //       ingredients={recipeInfo?.extendedIngredients!}
    //     ></Ingredients>
    //   </div>
    // </WithLoader>
  );
};
