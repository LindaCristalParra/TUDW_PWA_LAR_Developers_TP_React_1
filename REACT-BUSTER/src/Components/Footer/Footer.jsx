import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.text}>
        © {currentYear} <span className={styles.highlight}>REACT BUSTER</span>. Todos los derechos reservados.
      </p>
    </footer>
  );
};