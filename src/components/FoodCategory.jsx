import React from "react";
import styles from "./FoodCategory.module.css";
import Food_RestaurantCard from "./Food_RestaurantCard";
import category from "../data/Category";

export default function FoodCategory({
  text,
  data,
  color,
  textcolor,
  textalign,
  handleClick
}) {
  return (
    <div className={styles.container}>
      <span style={{ fontWeight: "bold", fontSize: "20px" }}>{text}</span>
      <div className={styles.food_card_div} onClick={()=>handleClick()}>
        {data.map((item, index) => {
          return (
            <Food_RestaurantCard
              key={index}
              item={item}
              color={color}
              textcolor={textcolor}
              textalign={textalign}
            />
          );
        })}
      </div>
    </div>
  );
}
