import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import styles from './Modal.module.css'
import { IoMdClose } from "react-icons/io";



function Modal({children,setIsModalOpen}) {
  
  const BTN_STYLE ={
    marginLeft: "90%", 
    marginTop: "13px" ,
    cursor:"pointer",
    width:"20px",
    height:"20px",
    color:"#979797",
    background:"none",
    border:"none",
    fontSize:"20px",
  
  }
  
  
  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} onClick={()=>setIsModalOpen(false)} />
      <div  className={styles.modal}> 
        
        {children}
        
 
        
      
      </div>
    </>,
    document.getElementById('modal-root')
  )
}

export default Modal