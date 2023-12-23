"use client";
import Image from "next/image";
import React from "react";
import { categories } from "@/types/categories";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            className={
              0 === index ? `${styles.categoryActive}` : `${styles.category}`
            }
            key={category.name}
          >
            <Image width={24} height={24} src={category.imgUrl} alt="asd" />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
