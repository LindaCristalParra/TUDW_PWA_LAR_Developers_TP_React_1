
import styles from "./Title.module.css";

export const Title = ({ texto }) => {
  return <h1 className={styles.Title}>{texto}</h1>;
};