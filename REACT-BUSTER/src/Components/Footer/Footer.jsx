import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.text}>
        © {currentYear} <span className={styles.highlight}>Movie Tracker</span>. Todos los derechos reservados.
      </p>
      <p className={styles.text}>
        Desarrollado con 💛 por el Grupo 12 para Programación Web Avanzada.
      </p>
    </footer>
  );
};