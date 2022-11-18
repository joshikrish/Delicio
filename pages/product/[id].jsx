import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

export default function Product() {
    const [size,setSize] = useState(0);
  const product = {
    id: 1,
    img: "/img/pizza.png",
    name: "Dalgona",
    price: [119, 259, 559],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, sequi!",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.img} alt="" width="450" height="450"/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>₹{product.price[size]}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
        <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Small</span>
        </div>
        <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Medium</span>
        </div>
        <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Large</span>
        </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
      </div>
    </div>
  );
}
