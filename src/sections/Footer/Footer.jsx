import styles from "./FooterStyles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {currentYear} Pannawich Thamart.
        <br />
        All right reserved
      </p>
    </section>
  );
}

export default Footer;
