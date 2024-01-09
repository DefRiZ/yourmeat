"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={styles.container}
      >
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
              Тільки самі
              <br /> <span>соковиті бургери!</span>
            </h1>
            <p className={styles.secondText}>Безкоштовна доставка від 599грн</p>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
