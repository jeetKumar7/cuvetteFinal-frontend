import React, { useEffect, useRef, useState } from 'react'
import styles from './PaymentModal.module.css'
import { notify } from '../utils/notify'
import { ToastContainer } from 'react-toastify'
import { AddAddress } from './../services/address';
import { addCard, deleteCard, getCardbyID, updateCard } from '../services/payment';

export default function PaymentModal({setIsModalOpen,cardUpdateId,mode,fetchCard}) {

  const cardNumberRef = useRef()
  const expirationRef = useRef()
  const cvcRef = useRef()
  const cardNameRef = useRef()

  const [isLoading,setIsLoading] =useState(false)
  
  const fetchCardDetails = async ()=>{
    try {
       const res = await getCardbyID(cardUpdateId)
       console.log(res)
       if(res.status===200){
        cardNameRef.current.value = res.data.data.cardName || null 
        cardNumberRef.current.value = res.data.data.cardNumber || null
        expirationRef.current.value = res.data.data.expiration || null
        cvcRef.current.value = res.data.data.cvv || null
       }
    } catch (error) {
      return error
    }
  }

  const handleSave = async ()=>{
    
    if(isLoading) return
    try {
      console.log("Save clicked")
      setIsLoading(true)
      if(cardNumberRef.current.value <16 || expirationRef.current.value === '' || cvcRef.current.value <3 || cardNameRef.current.value === ''){
         notify("All Fields are required")
      }
      else{
        const res = await addCard({
          cardNumber:cardNumberRef.current.value,
          expiration:expirationRef.current.value,
          cvv:cvcRef.current.value,
          cardName:cardNameRef.current.value
        })
        if(res.status === 200){
          setIsModalOpen(false)
          notify("Card Added Successfully")
          fetchCard()
          
        }
        else{
          notify(res.data.message)
        }
        console.log(res)
      }
    }
     catch (error) {
      return error
    }
    finally{
      setIsLoading(false)
    }
  }

  const handleUpdate = async()=>{
    if(isLoading) return
    try {
      setIsLoading(true)
      if(cardNumberRef.current.value <16 || expirationRef.current.value === '' || cvcRef.current.value <3 || cardNameRef.current.value === ''){
        notify("All Fields are required")
     }
     else{
      const res = await updateCard(cardUpdateId,{
        cardNumber:cardNumberRef.current.value,
        expiration:expirationRef.current.value,
        cvv:cvcRef.current.value,
        cardName:cardNameRef.current.value
      })
      console.log(res)
      if(res.status===200){
        setIsModalOpen(false)
        notify(res.data.message)
        fetchCard()
      }
    }
    } catch (error) {
      return error 
    }
    finally{
      setIsLoading(false)
    }
  }

  const handleDelete = async ()=>{
    try {
      const res = await deleteCard(cardUpdateId)
      console.log(res)
      if(res.status === 200){
        setIsModalOpen(false)
        notify(res.data.message)
        fetchCard()
      }
    } catch (error) {
      return error
    }
  }


 {cardUpdateId && useEffect(()=>{
    fetchCardDetails()
  },[])
}

  return (
    <div className={styles.container}>

      <div className={styles.top}>

      <h2>{cardUpdateId ?"Edit Payment Update" :"Add Payment Method"}</h2>
      <div className={styles.fields}>
        <label htmlFor="card_number" style={{width:'33%'}}>Card Number</label>
        <input type="text" name='card_number' className={styles.input_field} ref={cardNumberRef} placeholder='Enter 16 digit Number' readOnly={cardUpdateId ? true :false}/>
      </div>
      <div  className={styles.fields}>
        <label htmlFor="expiration" style={{width:'33%'}}>Expiration</label>
        <input type="text" name='expiration' className={styles.input_field} ref={expirationRef} placeholder='Valid Till'/>
      </div>
      <div  className={styles.fields}>
        <label htmlFor="cvc" style={{width:'33%'}}>CVC</label>
        <input type="text" name='cvc' className={styles.input_field} ref={cvcRef} placeholder='Enter 3 digit CVC'/>
      </div>
      <div  className={styles.fields}>
        <label htmlFor="card_name" style={{width:'33%'}}>Name on Card</label>
        <input type="text" name='card_name' className={styles.input_field} ref={cardNameRef} placeholder='Enter Card holder name'/>
      </div>


      </div>

      <div className={styles.footer}>
        <button className={styles.remove} onClick={()=>cardUpdateId && handleDelete()}>Remove</button>
        <div className={styles.right_btn}>
         <p onClick={()=>setIsModalOpen(false)}>Cancel</p>
         <button className={styles.save} onClick={()=>cardUpdateId ? handleUpdate():handleSave()}>{isLoading ? "Saving...":"Save Changes"}</button>
        </div>
      </div>
     
    </div>
  )
}
