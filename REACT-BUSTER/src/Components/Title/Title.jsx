
import styles from "./Title.module.css";

const Title = ({ text }) => {
  return <h1 className={styles.Title}>{text}</h1>;
};
export default Title;