import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";
import logo from "../../../public/header/logo.svg";
import burger from "../../../public/header/burger-header.png";
import bg from "../../../public/header/bg-ellipse.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.background}
        src={bg}
        alt="bg design ellipse"
        fill
      />
      <Image
        className={styles.backgroundSmall}
        src={bg}
        alt="bg design ellipse"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logotype" width={150} height={29} />
          </Link>
        </div>
        <div className={styles.info}>
          <div className={styles.burger}>
            <Image
              className={styles.picture}
              src={burger}
              alt="burger-header"
              quality={100}
              priority
            />
          </div>
          <div className={styles.text}>
            <h1 className={styles.mainText}>
              Только самые
              <br /> <span>сочные бургеры!</span>
            </h1>
            <p className={styles.secondText}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
