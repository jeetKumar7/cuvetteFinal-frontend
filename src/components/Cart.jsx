import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { BiSolidDownArrowCircle } from "react-icons/bi";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { RiEBike2Fill } from "react-icons/ri";
import { IoCloseCircle } from "react-icons/io5";
import { notify } from "../utils/notify";
import { deleteCartItem, updateCartItems } from "../services/cart";
import { useNavigate } from 'react-router-dom';
import { MdAddBusiness } from "react-icons/md";
import { TbShare } from "react-icons/tb";

function CratCard({item,updateCart,handleDelete}) {
 
  return (
    <div className={styles.cart_card_container}>
      <div>
        <button className={styles.btn}>{item.quantity}x</button>
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <FaCircleMinus color="#A04747" size={20} onClick={()=>updateCart(item._id,"minus",item.quantity)} />
          <FaCirclePlus color="#5F8670" size={20}  onClick={()=>updateCart(item._id,"plus",item.quantity)}/>
        </div>
      </div>

      <div>
        <p style={{ color: "green" }}>₹ {item.price}</p>
        <p style={{ fontWeight: "bold" }}>{item.foodName}</p>
        <span>with extra fries</span>
      </div>
      <MdDelete cursor={"pointer"} color="red" size={35} onClick={()=>handleDelete(item._id)} />
    </div>
  );
}

function TextAlign({ leftext, righttext }) {
  return (
    <div className={styles.align_container}>
      <p style={{ fontWeight: "500" }}>{leftext} :</p>
      <p>{righttext}</p>
    </div>
  );
}

function CouponCard({ leftext, icon }) {
  return (
    <div className={styles.coupon_card}>
      <p>{leftext}</p>
      {icon}
    </div>
  );
}

function DeliveryCard({
  headtext,
  subtext,
  icon,
  setIsDeliveryClicked,
  isDeliveryClicked,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3% 3%",
        border:isDeliveryClicked && '1px solid rgba(0, 0, 0, 0.2)',
        backgroundColor:isDeliveryClicked && '#EEEEEE',
        borderRadius:'10px',
        cursor:'pointer'
      }}
      onClick={() => setIsDeliveryClicked(true)}
    >
      {icon}
      <p>{headtext}</p>
      <p style={{ fontSize: "12px" }}>{subtext}</p>
    </div>
  );
}

export default function Cart({setIsCartClicked,fetchCartItems,cartItems}) {
  const navigate = useNavigate()
  const [Subtotal,setSubtotal] =useState(0)
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);


  const handleCheckout =()=>{
    sessionStorage.setItem("total",Subtotal)
    navigate('/checkout')
  }

  // Calculate total cart value whenever cartItems change
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price ,
      0
    );
    setSubtotal(total);
  }, [cartItems]);
  
 const updateCart  =async(id,status,quantity)=>{
  if(status === "plus"){
    quantity = quantity +1
  }
  if(status === "minus"){
    if(quantity === 1){
      return notify("Item should be greater than one")
    }
    quantity = quantity -1
  }
  try {
    const updateItems = cartItems.map((item,index)=>{
      return(
        item._id === id ? {...item,status,quantity} : item
      )
    })
    console.log(updateItems)
    const updateItem = updateItems.find((item)=>item._id === id)
    console.log(updateItem)
    const res = await updateCartItems(updateItem._id,{quantity:updateItem.quantity})
    console.log(res)
    if(res.status === 200){
      notify("Item updated successfully")
      fetchCartItems()
    }
    else{
      notify(res.data.message)
    }
    
  } catch (error) {
    return error
  }
 }

 const handleDelete  = async (id)=>{
  try {
    const itemToDelete = cartItems.find((item)=>item._id === id)
    console.log(itemToDelete)
    const res = await deleteCartItem(itemToDelete._id)
    if(res.status === 200){
      fetchCartItems()
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
      <div className={styles.top} onClick={()=>notify("Link Copied")}>
         <TbShare size={40}/>
         <p style={{width:'150px'}}>Share this cart with your friends</p>
         <button className={styles.btn_copy}>Copy link</button>
      </div>
      <IoCloseCircle size={30} className={styles.cross} color="red" onClick={()=>setIsCartClicked(false)}/>
      <div className={styles.basket}>
        <FaShoppingBasket size={30} />
        <h1>My Basket</h1>
      </div>

      <div className={styles.cart_items}>
        {cartItems.map((item,index)=>{
          return(
            <>
            <CratCard key={index} item={item} updateCart={updateCart} handleDelete={handleDelete} />
            <hr />
            </>
          )
        })}
        
        <TextAlign leftext={"Subtotal"} righttext={Subtotal} />
        <TextAlign leftext={"Discount"} righttext={"-3"} />
        <TextAlign leftext={"Delivery fee"} righttext={"3"} />

        <hr />
        <div className={styles.total_div}>
          <p>Total Cart Value :</p>
          <p style={{ fontWeight: "bold" }}>{Subtotal}</p>
        </div>
        <CouponCard
          leftext={"Choose your free items.."}
          icon={<BiSolidDownArrowCircle color="grey" size={20} />}
        />
        <CouponCard
          leftext={"Apply Coupon Code.."}
          icon={<BiSolidRightArrowCircle color="green" size={20} />}
        />

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <DeliveryCard
            headtext={"Delivery"}
            subtext={"start at 18:00"}
            icon={<RiEBike2Fill size={20} color="green" />}
            setIsDeliveryClicked={setIsDeliveryClicked}
            isDeliveryClicked={isDeliveryClicked}
          />
          <hr />
          <DeliveryCard
            headtext={"Collection"}
            subtext={"start at 18:00"}
            icon={<MdAddBusiness size={20} color="green" />}
            setIsDeliveryClicked={setIsDeliveryClicked}
            isDeliveryClicked={isDeliveryClicked}
          />
        </div>
        <div style={{backgroundColor:'green',padding:'2% 2%',textAlign:'center',borderRadius:'7px',color:'white',cursor:'pointer'}} onClick={()=>handleCheckout()}>
           Checkout
        </div>
      </div>
    </div>
  );
}
