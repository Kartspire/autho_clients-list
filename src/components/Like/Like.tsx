import { useAppDispatch } from "../../app/hooks";
import { patchUserLike, patchUserUnLike } from "../../utils/like";
import { IUser } from "../../models/IUsers";
import styles from "./Like.module.css";

interface ILikeProps {
  user: IUser;
}

export const Like = ({ user }: ILikeProps) => {
  const dispatch = useAppDispatch();

  const likeUser = () => {
    user.liked
      ? dispatch(patchUserUnLike(user.id))
      : dispatch(patchUserLike(user.id));
  };

  return (
    <div
      onClick={likeUser}
      className={`${styles.likeButton} ${user.liked && styles.liked} `}
    >
      <span className={styles.likeIcon}>
        <div className={styles.heartAnimationFirst}></div>
        <div className={styles.heartAnimationSecond}></div>
      </span>
    </div>
  );
};
