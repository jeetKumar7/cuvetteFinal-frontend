import React, { useEffect, useState } from 'react'
import styles from './Checkout.module.css'
import TopLabel from '../components/TopLabel'
import Navbar from '../components/Navbar'
import { BiLeftArrowAlt } from "react-icons/bi";
import burger from '../assets/Rectangle 46.png'
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import FoodCategory from '../components/FoodCategory';
import restaurant from '../data/Restaurant';
import Footer from '../components/Footer';
import { getCartItems } from '../services/cart';
import { notify } from '../utils/notify';
import { useNavigate } from 'react-router-dom';



function OrderFoodCard ({item}){
 
  return (
    <div className={styles.order_food_cart_container}>

      <div className={styles.card_left}>
        <img src={burger} alt="" style={{width:'30px',height:'40px'}}/>
        <div>
         <p style={{fontWeight:'500'}}>{item.foodName}</p>
         <p style={{color:'#83858A',fontSize:'12px'}}>{item.quantity}x item</p>
        </div>
        
      </div>

      <p style={{color:'green',fontWeight:'500'}}>₹ {item.price} </p>
      
    </div>
  )
}


function TextAlign ({lefttext,righttext}){
  return(
     <div style={{display:'flex',justifyContent:'space-between',color:'#83858A'}}>
      <p>{lefttext}</p>
      <p>{righttext}</p>
     </div>
  )
}


function DeliveryCard (){
  const navigate = useNavigate()
  return (
     <div style={{width:'100%'}}>
      <div className={styles.delivery_top}>
        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
          <MdLocationPin size={30} color='#FC8A06'/>
          <div onClick={()=>navigate('/address')}>
          <p style={{fontSize:'15px',fontWeight:'500'}}>Delivery Address</p>
          <p style={{color:'#83858A',fontSize:'12px'}}>45, Green Street, Sector 12...</p>
          </div>
          
        </div>
         <IoChevronForwardOutline size={18} color='#FC8A06'/>

      </div>
     </div>
  )
}


export default function Checkout() {
  const totalValue = sessionStorage.getItem("total")
  const [cartItems,setCartItems] =useState([])
  const navigate = useNavigate()


  const fetchCartItems = async ()=>{
     try {
       const res = await getCartItems()
       console.log(res)
       if(res.status === 200){
        return setCartItems(res.data.cartItems)
       }
       notify(res.data.message)
     } catch (error) {
      return error
     }
  }

  useEffect(()=>{
    fetchCartItems()
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
         <TopLabel/>
      </div>

      <div className={styles.navbar}>
        <Navbar/>
      </div>

      <div className={styles.order_details_text} onClick={()=>navigate(-1)}>
        <BiLeftArrowAlt size={30}/>
        <p style={{marginLeft:'1%',marginTop:'0.2%',fontSize:'20px',fontWeight:'500'}}>Your Order Details</p>
      </div>

      <div className={styles.body}>

         <div className={styles.left}>
            {cartItems.map((item,index)=>{
              return(
                <OrderFoodCard key={index} item={item}  />
              )
            })}
            
         </div>

         <div className={styles.right}>
            <DeliveryCard/>

            <hr />
           
            <TextAlign lefttext={"Items"} righttext={`₹ ${totalValue}`}/>
            <TextAlign lefttext={"Sales"} righttext={"₹ 10"}/>
            

            <hr />
            <TextAlign lefttext={"SubTotal"} righttext={`₹ ${parseInt(totalValue,10) + 10}`}/>

            <div className={styles.btn} onClick={()=>navigate('/payment')}>
               Choose Payment Method
            </div>

        
            
         </div>

      </div>

      <div className={styles.similar_rest}>
      <FoodCategory
          text={"Similar Restaurants"}
          data={restaurant}
          color={"#FC8A06"}
          textcolor={"white"}
          textalign={"center"}
        />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
























































































































