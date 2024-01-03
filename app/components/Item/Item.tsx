"use client";
import Image from "next/image";
import React from "react";

import { productType } from "@/types/productType";

import styles from "./Item.module.scss";
import Button from "../Button/Button";
import { useProductsCart } from "@/app/store";

const Item: React.FC<productType> = ({
  id,
  imageUrl,
  title,
  price,
  weight,
  quantity,
}) => {
  const { addToCart } = useProductsCart();

  // const onClickAdd = () => {
  //   addToCart({ id, imageUrl, title, price, weight, quantity });
  // };

  return (
    <div className={styles.root}>
      <Image
        className={styles.photo}
        src={imageUrl}
        alt="burger"
        width={276}
        height={220}
      />
      <span className={styles.price}>{price} грн</span>
      <h2 className={styles.name}>{title}</h2>
      <span className={styles.weigth}>{weight} г.</span>
      <button
        onClick={() =>
          addToCart({ id, imageUrl, title, price, weight, quantity })
        }
        className={styles.button}
      >
        Добавить
      </button>
    </div>
  );
};

export default Item;
