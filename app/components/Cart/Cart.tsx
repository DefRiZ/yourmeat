"use client";

import styles from "./Cart.module.scss";

export const Cart = () => {
  return (
    <div className={styles.rootEmpty}>
      <div className={styles.header}>
        <h2 className={styles.title}>Корзина</h2>
        <span className={styles.count}>0</span>
      </div>
      <p className={styles.text}>Тут пока пусто</p>
    </div>
  );
};
