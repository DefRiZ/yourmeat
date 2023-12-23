"use client";
import Image from "next/image";
import React from "react";

import meat from "../../../public/items/meat-burger.jpg";

import styles from "./Item.module.scss";
import Button from "../Button/Button";

const Item = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.photo}
        src={meat}
        alt="burger"
        width={276}
        height={220}
      />
      <span className={styles.price}>689₽</span>
      <h2 className={styles.name}>Мясная бомба</h2>
      <span className={styles.weigth}>520г</span>
      <Button>Добавить</Button>
    </div>
  );
};

export default Item;
