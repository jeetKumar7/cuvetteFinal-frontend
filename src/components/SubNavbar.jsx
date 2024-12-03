import React from "react";
import styles from "./SubNavbar.module.css";

export default function SubNavbar({
  lefttext,
  lisstitems,
  marginleft,
  leftWidth,
  showBorder,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.left} style={{ width: leftWidth }}>
        <span style={{ fontWeight: "bold" }}>{lefttext}</span>
      </div>

      <div className={styles.right} style={{ marginLeft: marginleft }}>
        {lisstitems.map((item,index)=>{
          return(
            <span
             key={index}
             style={{
              marginLeft: "4%",
              border: item?.showBorder ? "1.5px solid #FC8A06" : "",
              padding:item?.showBorder ? "2% 4%":'',
              borderRadius: item?.showBorder?"30px":'',
              color: item?.showBorder ?"#FC8A06":'',
              fontWeight: item?.showBorder ?"500":'',
            }}
             >{item.name}</span>
          )
        })}
      </div>
    </div>
  );
}
