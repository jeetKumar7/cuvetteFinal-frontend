import React, { useEffect, useState } from 'react'
import styles from './Order.module.css'
import TopLabel from '../components/TopLabel'
import Navbar from '../components/Navbar'
import done from '../assets/Icon.png'
import { getCartItems } from '../services/cart'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Order() {
  const navigate = useNavigate()
 const [orders,setOrders] =useState([])

  const fetchOrdername = async ()=>{
    try {
      const res = await getCartItems()
      if(res.status === 200){
        setOrders(res.data.cartItems)
      }
    } catch (error) {
      return error
    }
  }

  useEffect(()=>{
    fetchOrdername()
  },[])


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TopLabel/>
      </div>

      <div className={styles.navbar}>
         <Navbar/>
      </div>

      <div className={styles.body}>
        <img src={done} alt="" />
        <h2 style={{marginTop:'2%'}}>Order Placed Successfully</h2>
        <p style={{color:'#83858A'}}>Your order is confirmed and on its way. Get set to savor your chosen delights!</p>

        <div className={styles.order_name}>
           {orders.length === 0 ? <p>No data </p> : 
           <>
           {orders.map((item,index)=>{
            return(
              <p key={index} >{item.foodName}</p>
            )
           })}
           </>
           }
           <button className={styles.btn} onClick={()=>navigate('/home')}>Back to home </button>
        </div>

      </div>

      <div className={styles.footer}>
         <Footer/>
      </div>
    </div>
  )
}
