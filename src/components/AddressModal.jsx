import React, { useEffect, useRef, useState } from 'react'
import styles from './AddressModal.module.css'
import { CiLocationOn } from "react-icons/ci";
import { notify } from '../utils/notify';
import { ToastContainer } from 'react-toastify';
import { AddAddress, getAddressbyId, updateAddress } from '../services/address';


export default function AddressModal({setIsModalOpen,itemIdUpdate,mode,fetchAddress}) {
  const stateRef = useRef()
  const cityRef =useRef()
  const pinRef = useRef()
  const mobileRef = useRef()
  const addRef= useRef()

  const[isLoading,setIsLoading] =useState(false)
 
  const fetchAddressbyId = async () =>{
    try {
      const res = await getAddressbyId(itemIdUpdate)
      console.log(res)
      if(res.status === 200){
        stateRef.current.value = res.data.data.state || null
        cityRef.current.value = res.data.data.city || null
        pinRef.current.value = res.data.data.pin || null
        mobileRef.current.value = res.data.data.mobile || null
        addRef.current.value = res.data.data.address || null
      }
    } catch (error) {
      return error
    }
  }

  {itemIdUpdate && useEffect(()=>{
     fetchAddressbyId()
  },[])}



  const handleUpdate = async ()=>{
    if(isLoading) return
    try {
      setIsLoading(true)
      const res = await updateAddress(itemIdUpdate,{
        state: stateRef.current.value,
        city: cityRef.current.value,
        pin: pinRef.current.value,
        mobile: mobileRef.current.value,
        address: addRef.current.value

      })
      console.log(res)
      if(res.status === 200){
         setIsModalOpen(false)
         notify("Address Updated successfully")
         fetchAddress()
      }
    } catch (error) {
      return error
    }
    finally{
      setIsLoading(false)
    }
  }
 

  const handleSave = async()=>{
    if(isLoading) return
    try {
      setIsLoading(true)
      if(stateRef.current.value ==='' && cityRef.current.value==='' && pinRef.current.value === '' &&  mobileRef.current.value===''){
        notify("All Fields are required")
      }
      else{
        const res = await AddAddress({
          city:cityRef.current.value,
          state:stateRef.current.value,
          pin:pinRef.current.value,
          mobile:mobileRef.current.value,
          address:addRef.current.value
        })
        if(res.status === 200){
          notify(res.data.message)
          fetchAddress()
          setTimeout(()=>{
             setIsModalOpen(false)
          },2000)
        }
       
      }
    } catch (error) {
      return error
    }
    finally{
      setIsLoading(false)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <CiLocationOn size={20} color='black' /> 
        <p>Add Address</p>
      </div>

      <div className={styles.fields}>
         <input className={styles.input_field} type="text" placeholder='State'  ref={stateRef} />
         <input className={styles.input_field} type="text" placeholder='City/District' ref={cityRef}  />
         <input className={styles.input_field} type="text" placeholder='Pin Code' ref={pinRef}  />
         <input className={styles.input_field} type="text" placeholder='Phone Number'  ref={mobileRef} />
      </div>

      <div style={{marginTop:'2%'}}>
        <textarea className={styles.textarea} placeholder='Full Address' ref={addRef}/>
      </div>

      <button className={styles.btn} onClick={()=>itemIdUpdate ? handleUpdate() : handleSave()}>{ itemIdUpdate  ? (isLoading ? "Updating.."  :"Update") : (  isLoading ? "Saving...":"Save")}</button>
     
    </div>
  )
}
