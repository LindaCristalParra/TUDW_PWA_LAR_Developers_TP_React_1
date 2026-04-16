import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        role="dialog"
        aria-modal="true"
        aria-label="Modal dialog"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.closeButton} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
