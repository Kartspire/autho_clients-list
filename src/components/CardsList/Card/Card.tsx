import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../models/IUsers";
import { useAppDispatch } from "../../../app/hooks";
import { Like } from "../../Like";
import { FC, memo } from "react";
import { setUserInfo } from "../../../app/reducers/userInfoSlice";

interface ICardProps {
  user: IUser;
}

export const Card: FC<ICardProps> = memo(({ user }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function showUserInfo() {
    navigate(`/info/${user.id}`);
    dispatch(setUserInfo(user));
  }

  return (
    <li className={styles.cardWrapper}>
      <div className={styles.card} onClick={showUserInfo}>
        <div className={styles.imgWrapper}>
          <img src={user.avatar} alt="" className={styles.image} />
        </div>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
      </div>
      <Like user={user} />
    </li>
  );
});
