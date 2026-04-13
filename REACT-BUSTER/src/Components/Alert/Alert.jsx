import styles from './Alert.module.css';

export const Alert = ({ text, type = 'info' }) => {
  
  return (
    <div className={`${styles.alertBox} ${styles[type]}`}>
      {text}
    </div>
  );
};