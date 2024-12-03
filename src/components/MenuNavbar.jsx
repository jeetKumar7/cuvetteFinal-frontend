import React, { useState } from "react";
import styles from "./MenuNavbar.module.css";

export default function MenuNavbar({ data }) {
  const [activebutton, setactivebutton] = useState(0);
  const handleOnclick = (id) => {
    setactivebutton(id);
  };
  return (
    <div className={styles.container}>
      <div style={{ marginLeft: "5%" }}>
        {data.map((item, index) => {
          return (
            <span
            className={styles.menu_item}
              key={index}
              style={{ 
                backgroundColor: activebutton === index ? "black" : "",
                borderRadius:activebutton === index ? "20px" : "",
                padding:activebutton === index ? "0.5% 1%" :''
               }}
              onClick={() => handleOnclick(index)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
