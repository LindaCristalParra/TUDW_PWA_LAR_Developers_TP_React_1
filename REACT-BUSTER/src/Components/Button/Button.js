import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, variant = 'primary' }) => {
  const buttonClass = variant === 'primary' ? styles.btnPrimary : styles.btnSecondary;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;