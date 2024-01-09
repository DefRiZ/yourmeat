"use client";
import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./SkeletonItem.module.scss";

const SkeletonItem = (props: any) => (
  <ContentLoader
    speed={2}
    className={styles.root}
    width={`100%`}
    height={`100%`}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="111" y="190" rx="0" ry="0" width="0" height="1" />
    <rect x="3" y="449" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="440" rx="19" ry="19" width="152" height="45" />
    <rect x="31" y="36" rx="0" ry="0" width="244" height="166" />
    <rect x="100" y="175" rx="0" ry="0" width="1" height="0" />
    <rect x="31" y="220" rx="0" ry="0" width="234" height="26" />
    <rect x="33" y="262" rx="0" ry="0" width="228" height="35" />
    <rect x="35" y="323" rx="8" ry="8" width="240" height="48" />
  </ContentLoader>
);

export default SkeletonItem;
