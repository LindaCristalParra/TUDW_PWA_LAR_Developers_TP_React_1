import styles from './Counter.module.css';

export const Counter = ({ label, count }) => {
  return (
    <div className={styles.counterBox}>
      <span className={styles.label}>{label}:</span>
      <span className={styles.count}>{count}</span>
    </div>
  );
};