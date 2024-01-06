import Image from "next/image";
import logo from "../../../public/footer/logo.svg";
import phone from "../../../public/footer/Call.svg";
import telegram from "../../../public/footer/telegram.svg";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="site's logotype" width={300} height={58} />
            </Link>
          </div>
          <div className={styles.phoneAndSocial}>
            <div className={styles.phone}>
              <h2>Номер для заказа:</h2>
              <a href="tel:+3800000000" className={styles.number}>
                <Image
                  className={styles.image}
                  src={phone}
                  alt="phone for call"
                />{" "}
                +(380) 000-00-00
              </a>
            </div>
            <div className={styles.social}>
              <h2>Мы в соцсетях</h2>
              <Link href="/*">
                <Image src={telegram} alt="telegram link" />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; YouMeal, 2022</p>
          <p>Design: Anastasia Ilina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
