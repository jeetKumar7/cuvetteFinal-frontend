import React from "react";
import styles from "./NumberComponent.module.css";

function NumberAlign({ text, number }) {
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
}

export default function NumberComponent() {
  return (
    <div className={styles.container}>
      <NumberAlign number={"546+"} text={"Registered Riders"} />
      <hr style={{ border: "none", borderLeft: "1px solid white" }} />
      <NumberAlign number={"789,900+"} text={"Orders Delivered"} />
      <hr style={{ border: "none", borderLeft: "1px solid white" }} />
      <NumberAlign number={"690+"} text={"Restaurants Partnered"} />
      <hr style={{ border: "none", borderLeft: "1px solid white" }} />
      <NumberAlign number={"17,457+"} text={"Food items"} />
    </div>
  );
}
