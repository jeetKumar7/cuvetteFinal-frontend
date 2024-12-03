import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/LOGO 1.png";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = localStorage.getItem("name")
  const NavbarDetails = [
    {
      name: "Home",
      navigate: "/home",
    },

    {
      name: "Browse Menu",
      navigate: "/browse",
    },

    {
      name: "Special Offers",
      navigate: "/offers",
    },

    {
      name: "Restaurants ",
      navigate: "/restaurant",
    },

    {
      name: "Track Order ",
      navigate: "/order",
    },
  ];

  const handleOnClick=(route)=>{
    navigate(route)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="logo image" className={styles.img} />
      </div>

      <div className={styles.right}>
        {NavbarDetails.map((item, index) => {
          return (
            <span
              style={{
                cursor: "pointer",
                backgroundColor:
                  location.pathname === item.navigate ? "#FC8A06" : null,
                  borderRadius:
                  location.pathname === item.navigate ? "20px" : null,
                  padding:
                  location.pathname === item.navigate ? "0.5% 3%" : null,
                  color: location.pathname === item.navigate ? "white" : "black",
              }}
              onClick={()=>handleOnClick(item.navigate)}
            >
              {item.name}
            </span>
          );
        })}

        <button className={styles.btn} onClick={()=>navigate('/profile')}>
          <FaCircleUser size={18} color="#FC8A06" />
          {name}
        </button>
      </div>
    </div>
  );
}
