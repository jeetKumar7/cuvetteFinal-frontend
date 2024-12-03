import React, { useEffect, useState } from 'react'
import styles from './Payment.module.css'
import TopLabel from './../components/TopLabel';
import Navbar from './../components/Navbar';
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import Footer from './../components/Footer';
import { FaPlus } from "react-icons/fa";
import PaymentModal from '../components/PaymentModal';
import Modal from '../Modal'
import { ToastContainer } from 'react-toastify';
import { getCards } from '../services/payment';
import { useNavigate } from 'react-router-dom';

function DebitCard_Card({isArrowVisible,icon,text,iconend,setIsModalOpen,item}){


 if(!isArrowVisible){
   const str = item.cardName.trim();; 
  const words = str.split(" ");
  let btn = words.length > 1 ? words[0][0] + words[1][0] : words[0][0];
 }

  return(
     <div className={styles.card_container} onClick={()=>setIsModalOpen(true)}  >
       <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
        {!isArrowVisible ? <button className={styles.btn}>M</button>:icon}
        <p style={{fontSize:'20px'}}>{isArrowVisible ? text:item.cardName}</p>
      </div> 

      {isArrowVisible ? iconend: <FaRegCircle color='red'/>  }
     </div>
  )
}


export default function Payment() {
  const navigate = useNavigate()
  const [IsModalOpen,setIsModalOpen] =useState(false)
  const totalValue = sessionStorage.getItem("total")
  const [cards,setCards] =useState([])



  const fetchCard = async ()=>{
    try {
      const res = await getCards()
      console.log(res) 
      setCards(res.data.data)
    } catch (error) {
      return error 
    }
  }

  useEffect(()=>{
     fetchCard()
  },[])
  return (
    <div className={styles.container}>
     <div className={styles.header}>
        <TopLabel/>
     </div>

     <div className={styles.navbar}>
      <Navbar/>
     </div>

     <div className={styles.text_div} onClick={()=>navigate(-1)}>
       <BiLeftArrowAlt size={30} cursor={"pointer"}/>
       <p>Choose & Pay </p>
     </div>

     <div className={styles.body}>
        <div className={styles.left}>
           <DebitCard_Card isArrowVisible={true} icon={<FaWallet  color='#FC8A06' size={20}/>} iconend={<IoIosArrowForward color='##FC8A06'/>} text={"Wallet"}/>
           <hr style={{margin:'0% 3%'}} />
          {cards.map((item,index)=>{
            return(
              <DebitCard_Card key={index} item={item}/>
            )
          })}
           <DebitCard_Card isArrowVisible={true} icon={<FaPlus color='black' size={20}/>} text={"Add Debit Card"}  setIsModalOpen={setIsModalOpen} />

        </div>

        <div className={styles.right}>
         <div style={{display:'flex',justifyContent:'space-between'}}>
           <p>Amount to be paid </p>
           <p style={{fontWeight:'bold'}}>{`₹ ${parseInt(totalValue,10) + 10}`}</p>
         </div>
         <hr />
         <button className={styles.pay_btn} onClick={()=>navigate('/order')}>Proceed To Payment</button>
        </div>
     </div>

     <div className={styles.footer}>
       <Footer/>
     </div>
     {IsModalOpen && <Modal><PaymentModal fetchCard={fetchCard} setIsModalOpen={setIsModalOpen}/></Modal>}
     <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
    </div>
  )
}
