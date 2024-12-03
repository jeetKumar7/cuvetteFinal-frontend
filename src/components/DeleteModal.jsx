import React, { useState } from 'react'
import styles from './DeleteModal.module.css'
import { deleteAddress } from '../services/address'
import { notify } from '../utils/notify'

export default function DeleteModal({setIsDeleteModal,itemIdDelete,fetchAddress}) {
  const [isLoading,setIsLoading] =useState(false)
  const handleDelete = async ()=>{
    if(isLoading) return
    try {
      setIsLoading(true)
      const res = await deleteAddress(itemIdDelete)
      console.log(res)
      if(res.status === 200){
        setIsDeleteModal(false)
        notify(res.data.message)
        fetchAddress()
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
      <p>Are you sure you want to remove ?</p>

      <div className={styles.button} >
         <button className={styles.cancel} onClick={()=>setIsDeleteModal(false)}>Cancel</button>
         <button className={styles.remove} onClick={()=>{handleDelete()}}>{isLoading ? "Removing...":"Remove"}</button>
      </div>
    </div>
  )
}
