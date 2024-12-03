import React from "react";
import styles from "./AboutUs.module.css";
import SubNavbar from "./SubNavbar";
import ListItem from "../components/ListItem";
import Card_About from "./Card_About";
import Bell from "../assets/order-food 1.png";
import Burger from '../assets/burger_about.png'
import Order from "../assets/order 1.png"

export default function AboutUs() {
  const listtoshow = [
    {name:"Frequent Questions" ,showBorder:true},
    {name:"Who we are"},
    { name: "Partner Program" },
    {name:"Help & Support"},
  ];

  const listitemabout_us = [
    {
      name: "How does Order.UK work?",
      showBorder: true,
    },
    {
      name: "What payment methods are accepted?",
    },
    {
      name: "Can I track my order in real-time?",
    },
    {
      name: "Are there any special discounts or promotions available?",
    },
  ];
  return (
    <div className={styles.container}>
      <SubNavbar
        lefttext={"Know more about us!"}
        lisstitems={listtoshow}
        marginLeft={"-10%"}
        leftWidth={"35%"}
      />
      <div className={styles.inner_div_aboutus}>
        <ListItem data={listitemabout_us} />
        <div className={styles.about_us_right}>
          <div className={styles.top}>
            <Card_About headtext={"Place an Order!"} img={Bell} bottomtext={"Place order through our website or Mobile app"} />
            <Card_About  headtext={"Track Progress"} img={Burger} bottomtext={"Your can track your order status with delivery time"}/>
            <Card_About headtext={"Get your Order!"} img={Order} bottomtext={"Receive your order at a lighting fast speed!"}/>
          </div>

          <div className={styles.bottom}>
            <p style={{ textAlign: "center" }}>
              Order.UK simplifies the food ordering process. Browse through our
              diverse menu, select your favorite dishes, and proceed to
              checkout. Your delicious meal will be on its way to your doorstep
              in no time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
