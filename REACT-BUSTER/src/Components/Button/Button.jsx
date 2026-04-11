import styles from './Button.module.css';

const Button = ({ text, onClick, variant = 'yellow', type = 'button' }) => {
  
  const variantClasses = {
    yellow: styles.btnYellow,
    blue: styles.btnBlue,
    grey: styles.btnGrey
  };

  const selectedVariant = variantClasses[variant];

  return (
    <button 
      type={type} 
      className={selectedVariant} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;