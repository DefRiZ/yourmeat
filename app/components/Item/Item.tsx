"use client";
import Image from "next/image";
import React from "react";

import { productType } from "@/types/productType";
import { useProductsCart } from "@/app/store";

import styles from "./Item.module.scss";

const Item: React.FC<productType> = ({
  id,
  imageUrl,
  title,
  price,
  weight,
  quantity,
}) => {
  const { addToCart } = useProductsCart();

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
        Додати
      </button>
    </div>
  );
};

export default Item;
