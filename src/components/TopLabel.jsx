import React from 'react'
import styles from './TopLabel.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { notify } from '../utils/notify';

export default function TopLabel({setIsCartClicked,isCartClicked}) {
  const handleCartClick = ()=>{
    setIsCartClicked(!isCartClicked )
    notify("Cart Clicked")
  }
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        <span>🌟  Get 5% Off your first order,<span style={{color:'#FC8A06'}}>Promo: ORDER5</span> </span>
       </div>
       <div className={styles.right}>
        <div style={{width:'70%',padding:'0.5% 0.5%'}}>
          <span> <FaLocationDot size={12}  style={{marginRight:'1%'}}/> Regent Street, A4, A4201, London  <span style={{color:'#FC8A06',marginLeft:'1%',cursor:'pointer'}}> <u> Change Location</u> </span></span>
        </div>

        <div className={styles.cart} onClick={()=>handleCartClick()}>


          <div className={styles.icon_cart} >
            <FaShoppingBasket size={20} color='white' />
            <span>My Cart</span>

          </div>

          <div className={styles.empty_cart_div}>

          </div>

          <div className={styles.down_arrow_cart}>

            <FaCircleArrowDown color='white' size={20}/>

          </div>

           
        </div>


       </div>
    </div>
  )
}
