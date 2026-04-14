import styles from './Alert.module.css';

const Alert = ({ text, type = 'info' }) => {
  const ariaRole = type === 'danger' ? 'alert' : 'status';

  return (
    <div className={`${styles.alertBox} ${styles[type]}`} role={ariaRole}>
      {text}
    </div>
  );
};
export default Alert;