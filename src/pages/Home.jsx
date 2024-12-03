import React from "react";
import styles from "./Home.module.css";
import TopLabel from "../components/TopLabel";
import Navbar from "../components/Navbar";
import BannerHome from "../components/BannerHome";
import SubNavbar from "../components/SubNavbar";
import ImgCard from "../components/ImgCard";
import FoodCategory from "../components/FoodCategory";
import category from "../data/Category";
import restaurant from "../data/Restaurant";
import OrderComponent from "../components/OrderComponent";
import Food_image from "../assets/Food_Image.png";
import Partner from "../assets/partner.png";
import Ride from "../assets/ride.png";
import AboutUs from "../components/AboutUs";
import NumberComponent from "../components/NumberComponent";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  const handleClick =()=>{
    navigate('/restaurant')
  }

  const listtoshow = [
    {name:"Vegan"},
    {name:"Sushi",showBorder:true},
    { name: "Pizza & Fast food"},
    {name:"Others"},
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TopLabel />
      </div>

      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.banner}>
        <BannerHome />
      </div>

      <div className={styles.sub_navbar}>
        <SubNavbar
          lefttext={"Up to -40% 🎊 Order.uk exclusive deals"}
          lisstitems={listtoshow}
          marginleft={"10%"}
          leftWidth={"50%"}
        />
      </div>

      <div className={styles.food_card_div}>
        <ImgCard
          text={"Chef Burgers London"}
          orangetext={"Restaurant"}
          image={Food_image}
          isBlackvisible={true}
        />
        <ImgCard
          text={"Grand Ai Cafe London"}
          orangetext={"Restaurant"}
          image={Food_image}
          isBlackvisible={true}
        />
        <ImgCard
          text={"Butterbrot Caf’e London"}
          orangetext={"Restaurant"}
          image={Food_image}
          isBlackvisible={true}
        />
      </div>

      <div className={styles.food_categories}>
        <FoodCategory
          text={"Order.uk Popular Categories 🤩"}
          data={category}
          color={"#F5F5F5"}
          textcolor={"black"}
          textalign={"start"}
        />
      </div>

      <div className={styles.food_categories}>
        <FoodCategory
          text={"Popular Restaurants"}
          data={restaurant}
          color={"#FC8A06"}
          textcolor={"white"}
          textalign={"center"}
          handleClick ={handleClick}
        />
      </div>

      <div className={styles.download_container}>
        <OrderComponent />
      </div>

      <div className={styles.partenr_div}>
        <ImgCard
          text={"Partner with us"}
          orangetext={"Signup as a business"}
          image={Partner}
          isWhitevisble={true}
          whitetext={"Earn more with lower fees"}
          isButtonVisible={true}
        />
        <ImgCard
          text={"Ride with us"}
          orangetext={"Signup as a rider"}
          image={Ride}
          isWhitevisble={true}
          whitetext={"Avail exclusive perks"}
          isButtonVisible={true}
        />
      </div>

      <div className={styles.about_us_div}>
        <AboutUs />
      </div>

      <div className={styles.number_div}>
        <NumberComponent />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
