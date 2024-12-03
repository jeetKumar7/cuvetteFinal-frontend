import React from "react";
import styles from "./ImgCard.module.css";
import { FaCirclePlus } from "react-icons/fa6";

export default function ImgCard({
  text,
  orangetext,
  image,
  isBlackvisible,
  isWhitevisble,
  whitetext,
  isButtonVisible,
  isCart
}) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      {isWhitevisble && <div className={styles.text_white}>{whitetext}</div>}
      {isBlackvisible && <div className={styles.discount}>-4%</div>}

      <div className={styles.text}>
        <p style={{ color: "#FC8A06" }}>{orangetext}</p>
        <p style={{ fontWeight: "bold", color: "white" }}>{text}</p>
        {isButtonVisible && <button className={styles.btn}>Get Started</button>}
      </div>
      {isCart && (
        <div className={styles.add_cart}>
          <FaCirclePlus size={25} />
        </div>
      )}
    </div>
  );
}
