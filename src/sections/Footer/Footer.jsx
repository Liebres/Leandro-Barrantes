import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &#169; 2024 Leandro Barrantes. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
