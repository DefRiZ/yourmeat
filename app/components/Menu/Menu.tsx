"use client";
import React from "react";
import { useProductsStore } from "@/app/store";
import { productType } from "@/types/productType";
import { motion } from "framer-motion";

import SkeletonItem from "../SkeletonItem/SkeletonItem";
import Item from "../Item/Item";
import styles from "./Menu.module.scss";
const Menu = () => {
  const { products, fetchProducts, isLoading, category } = useProductsStore();
  React.useEffect(() => {
    fetchProducts();
  }, [fetchProducts, category]);
  const productsList = products.map((product: productType) => (
    <Item key={product.id} {...product} />
  ));
  const skeletonList = [...new Array(4)].map((_, i) => (
    <SkeletonItem key={i} />
  ));
  if (isLoading) {
    return <div className={styles.root}>{skeletonList}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className={styles.root}
    >
      {productsList}
    </motion.div>
  );
};

export default Menu;
