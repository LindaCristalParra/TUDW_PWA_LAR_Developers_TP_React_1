import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.text}>
        © {currentYear} <span className={styles.highlight}>REACT BUSTER</span>. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;