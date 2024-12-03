import React, { useEffect, useState } from 'react'
import styles from './Address.module.css'
import TopLabel from '../components/TopLabel'
import Navbar from '../components/Navbar'
import { FaArrowLeft } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import Footer from './../components/Footer';
import Modal from '../Modal'
import AddressModal from './../components/AddressModal';
import DeleteModal from '../components/DeleteModal';
import { getAddresses } from '../services/address';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddressCard ({isTextVisible,setIsModalOpen,setIsDeleteModal,item,name,handleDelete,handleUpdate}){

  

  
  return(

    <div className={styles.card_container} style={{justifyContent:!isTextVisible && 'center',alignItems:!isTextVisible && 'center' , border:isTextVisible ? '2px solid #AFAFAF' : '2px dashed   #AFAFAF'}}
    onClick={()=>{!isTextVisible  && setIsModalOpen(true) }}
    >
      {!isTextVisible ? 
      <>
       <FaCirclePlus color='#FC8A06' size={30}/>
       <p style={{marginTop:'5px',fontWeight:'400'}}>Add Items</p>
       </>
      :
     <div className={styles.address_div}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
           <p style={{fontWeight:'500'}}>{name}</p>
           <button className={styles.btn}>Default</button>
        </div>

        <div className={styles.address_body}>
          <p>
          {item.address},{item.city},{item.state} , {item.pin}, India
          </p>
          <p>
          Phone Number: {item.mobile}
          </p>
        </div>

        <div className={styles.edit_container}>
          <p onClick={()=>{handleUpdate(item._id)}}>Edit</p>
          <hr style={{height:'20px',marginTop:'1%'}} />
          <p onClick={()=>{handleDelete(item._id)}}  >Remove</p>
        </div>
     </div>
     
     }
      
    </div>
  )
}

export default function Address() {
  const navigate = useNavigate()
  const [isModalOpen,setIsModalOpen] =useState(false)
  const [isDeleteModal,setIsDeleteModal] =useState(false)
  const[isEditModal,setIsEditModal] =useState(false)
  const [addresses,setAddresss] = useState([])
  const name = localStorage.getItem("name")
  const [itemIdDelete ,setItemIdDelete] = useState([])
  const [itemIdUpdate,setItemIdUpdate] =useState([])

  const fetchAddress  = async ()=>{
    try {
      const res = await getAddresses()
      console.log(res)
      if(res.status===200){
        setAddresss(res.data.data)
      }
    } catch (error) {
      return error
    }
  }


  useEffect(()=>{
     fetchAddress()
  },[])


  const handleDelete = async (id)=>{
    setIsDeleteModal(true)
    const itemTodelete = addresses.find((item)=>item._id === id)
    setItemIdDelete(itemTodelete._id)
  }

  const handleUpdate = async(id)=>{
    setIsEditModal(true)
    const  itemToUpdate = addresses.find((item)=>item._id === id)
    setItemIdUpdate(itemToUpdate._id)
  }

 
  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <TopLabel/>
      </div>

      <div className={styles.navbar}>
         <Navbar/>
      </div>

      <div className={styles.text_div} onClick={()=>navigate(-1)}>
        <FaArrowLeft size={25} style={{marginTop:'0.3%'}}/>
        <p>Your Address</p>
      </div>

      <div className={styles.body}>
         <AddressCard isTextVisible={false}  setIsModalOpen ={setIsModalOpen}  />
         {addresses.map((item,index)=>{
          return(
            <AddressCard isTextVisible={true}  setIsModalOpen ={setIsModalOpen} setIsDeleteModal={setIsDeleteModal} item={item} name={name} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
          )
         })}
          
      </div>

      <div className={styles.footer}>
        <Footer/>

      </div>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}><AddressModal fetchAddress={fetchAddress}  setIsModalOpen={setIsModalOpen}/></Modal>}
      {isEditModal && <Modal setIsModalOpen={setIsEditModal}><AddressModal fetchAddress={fetchAddress} mode={"edit"} itemIdUpdate={itemIdUpdate} setIsModalOpen={setIsEditModal}/></Modal>}
      {isDeleteModal && <Modal><DeleteModal setIsDeleteModal={setIsDeleteModal}  fetchAddress={fetchAddress} isDeleteModal={isDeleteModal} itemIdDelete={itemIdDelete}/></Modal>}

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
