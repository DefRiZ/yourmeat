"use client";
import Image from "next/image";
import React from "react";
import { categories } from "@/types/categories";
import styles from "./Categories.module.scss";
import { useProductsStore } from "@/app/store";

const Categories = () => {
  const { category, setCategory } = useProductsStore();
  const onClickChange = (id: number) => {
    setCategory(id);
  };
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {categories.map((element, index) => (
          <li
            onClick={() => onClickChange(index)}
            className={
              category === index
                ? `${styles.categoryActive}`
                : `${styles.category}`
            }
            key={element.name}
          >
            <Image width={24} height={24} src={element.imgUrl} alt="asd" />
            <span>{element.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
