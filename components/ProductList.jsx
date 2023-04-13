import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Doorstep Delivery!!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt pariatur quasi consequatur. Architecto voluptas harum exercitationem natus eum accusamus, asperiores, doloribus magnam officia quo qui omnis suscipit, consequatur enim. Accusantium.
      </p>
      <div className={styles.wrapper}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        //<ProductCard/>
      </div>
    </div>
  )
}
