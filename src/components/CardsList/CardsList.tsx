import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { Card } from "./Card/Card";
import styles from "./Cardslist.module.css";

interface IUsersListProps {}

export const CardsList: FC<IUsersListProps> = () => {
  const users = useAppSelector((state) => state.users.users);

  const cards = users.map((el) => <Card key={el.id} user={el} />);
  return <ul className={styles.cardsList}>{cards}</ul>;
};
