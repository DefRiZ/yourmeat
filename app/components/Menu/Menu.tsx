"use client";
import React from "react";
import { useProductsStore } from "@/app/store";
import { productType } from "@/types/productType";
import Item from "../Item/Item";
import styles from "./Menu.module.scss";
import SkeletonItem from "../SkeletonItem/SkeletonItem";
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
    return <h1>{skeletonList}</h1>;
  }
  return <div className={styles.root}>{productsList}</div>;
};

export default Menu;
