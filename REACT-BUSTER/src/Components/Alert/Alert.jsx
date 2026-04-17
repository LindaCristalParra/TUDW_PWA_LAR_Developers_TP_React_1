import styles from './Alert.module.css';

const Alert = ({ text, type = 'info', onAccept, onCancel }) => {
  const ariaRole = type === 'danger' ? 'alert' : 'status';
  const hasActions = typeof onAccept === 'function' || typeof onCancel === 'function';

  return (
    <div className={`${styles.alertBox} ${styles[type]}`} role={ariaRole}>
      <p className={styles.message}>{text}</p>
      {hasActions && (
        <div className={styles.actions}>
          {typeof onCancel === 'function' && (
            <button type="button" className={styles.cancelButton} onClick={onCancel}>
              Cancelar
            </button>
          )}
          {typeof onAccept === 'function' && (
            <button type="button" className={styles.acceptButton} onClick={onAccept}>
              Aceptar
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Alert;