"use client";

import { useProductsCart } from "@/app/store";
import { productType } from "@/types/productType";
import Image from "next/image";

import styles from "./CartItem.module.scss";

const CartItem: React.FC<productType> = ({
  id,
  imageUrl,
  title,
  price,
  weight,
  quantity,
}) => {
  const { addToCart, removeProduct } = useProductsCart();
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div>
          <Image
            className={styles.image}
            width={64}
            height={52}
            src={imageUrl}
            alt="product's photo"
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.weight}>{weight} г.</span>
          <span className={styles.price}>{price} грн.</span>
        </div>
      </div>
      <div className={styles.right}>
        <span
          className={styles.button}
          onClick={() =>
            removeProduct({ id, imageUrl, title, price, weight, quantity })
          }
        >
          -
        </span>
        <span className={styles.quantity}>{quantity}</span>
        <span
          className={styles.button}
          onClick={() =>
            addToCart({ id, imageUrl, title, price, weight, quantity })
          }
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
