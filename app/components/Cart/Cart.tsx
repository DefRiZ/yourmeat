"use client";
import React from "react";
import { motion } from "framer-motion";
import { useProductsCart } from "@/app/store";
import { productType } from "@/types/productType";
import Image from "next/image";
import CartItem from "../CartItem/CartItem";

import delivery from "../../../public/cart/delivery.svg";
import styles from "./Cart.module.scss";

export const Cart = () => {
  const { cart, totalPrice, totalCount } = useProductsCart();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const cartList = cart.map((el: productType) => (
    <CartItem key={el.id} {...el} />
  ));
  if (!cart.length) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={styles.main}
      >
        <div className={styles.rootEmpty}>
          <div className={styles.header}>
            <h2 className={styles.title}>Корзина</h2>
            <span className={styles.count}>{totalCount}</span>
          </div>
          <p className={styles.text}>Тут поки що порожньо</p>
        </div>
      </motion.div>
    );
  }
  if (cart) {
    return (
      <div className={styles.main}>
        <div className={styles.root}>
          <div
            onClick={() => console.log(setIsOpen(true))}
            className={styles.header}
          >
            <h2 className={styles.title}>Корзина</h2>
            <span className={styles.count}>{totalCount}</span>
          </div>
          <div className={styles.bigMedia}>
            <div>{cartList}</div>
            <div className={styles.bottom}>
              <div className={styles.price}>
                <span className={styles.totalText}>Всього</span>{" "}
                <span className={styles.total}>{totalPrice} грн.</span>
              </div>
              <div className={styles.btn}>
                <button className={styles.button}>Оформити замовлення</button>
              </div>
              <div className={styles.delivery}>
                <Image
                  className={styles.image}
                  src={delivery}
                  alt="delivery icon"
                />
                <span className={styles.text}>Безкоштовна доставка</span>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className={styles.smallMedia}>
              <div>{cartList}</div>
              <div className={styles.bottom}>
                <div className={styles.price}>
                  <span className={styles.totalText}>Всього</span>
                  <span className={styles.total}>{totalPrice} грн.</span>
                </div>
                <div className={styles.btn}>
                  <button className={styles.button}>Оформити замовлення</button>
                </div>
                <div className={styles.delivery}>
                  <div className={styles.free}>
                    <Image
                      className={styles.image}
                      src={delivery}
                      alt="delivery icon"
                    />
                    <span className={styles.text}>Безкоштовна доставка</span>
                  </div>
                  <div
                    onClick={() => console.log(setIsOpen(!true))}
                    className={styles.collapseBtn}
                  >
                    <button className={styles.btn}>Згорнути</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
};
