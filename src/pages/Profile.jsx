import React,{useEffect, useRef, useState} from 'react'
import styles from './Profile.module.css'
import TopLabel from './../components/TopLabel';
import Navbar from '../components/Navbar';
import { FaArrowLeft } from "react-icons/fa";
import pic from '../assets/Ellipse 11.png'
import { CiCreditCard1 } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import Footer from '../components/Footer';
import Modal from '../Modal';
import PaymentModal from '../components/PaymentModal';
import { getUserById, updateUser } from '../services/auth';
import { notify } from '../utils/notify';
import { ToastContainer } from 'react-toastify';
import { getCards } from '../services/payment';
import { useNavigate } from 'react-router-dom';



function PaymentCard ({setIsModalOpen,item,handleCardUpdate}){
  return(
    <div className={styles.card_container}>
      <CiCreditCard1 size={30} color='#FC8A06'/> 
      <div>
        <p>{item.cardNumber}</p>
        <p>{item.cardName}</p>
      </div>
      <CiEdit size={22} style={{marginLeft:'10px'}} onClick={()=>handleCardUpdate(item._id)}/>

    </div>
  )
}

export default function Profile() {
  const navigate = useNavigate()
  const [isEditable, setIsEditable] = useState(false);
  const [isModalOpen , setIsModalOpen] =useState(false)
 const [isLoading,setIsLoading] =useState(false)
 const [cards,setCards] =useState([])
 const [cardUpdateId,setCardUpdateId] =useState()
 const [cardDeleteId,setCardDeleteId] =useState()



  const nameRef = useRef()
  const emailRef = useRef()
  const genderRef = useRef()
  const countryRef = useRef()

  const fetchuserById = async ()=>{
    try {
      const res = await getUserById()
      console.log(res)
      if(res.status === 200){
        nameRef.current.value = res.data.userProfile.name
        emailRef.current.value = res.data.userProfile.email
        genderRef.current.value = res.data.userProfile.gender 
        countryRef.current.value = res.data.userProfile.country
      }
    } catch (error) {
      return error
    }
    
  }

  const fetchCard = async ()=>{
    try {
      const res = await getCards()
      console.log(res)
      if(res.status===200){
        setCards(res.data.data)
      }
    } catch (error) {
      return error
    }
  }

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
  };

  const handleSave= async()=>{
    if(isLoading) return
    try {
     
      setIsLoading(true)
      if(nameRef.current.value==='' || genderRef.current.value === '' || emailRef.current.value === '' || countryRef.current.value === ''){
        
        notify("Fields are neccessary")
      }
      else{
        const res = await updateUser({
          name:nameRef.current.value,
          gender:genderRef.current.value,
          country:countryRef.current.value
        })
        console.log(res)
        if(res.status===200){
          setIsEditable(false)
          notify("Profile Updated")
          fetchuserById()
        }
      }
    } catch (error) {
      return error
    }
    finally{
      setIsLoading(false)
    }
  }


  useEffect(()=>{
    fetchuserById()
    fetchCard()
  },[])

  const handleCardUpdate = async (id)=>{
    setIsModalOpen(true)
    const itemToUpdate = cards.find((item)=>item._id === id)  
    setCardUpdateId(itemToUpdate._id)
  }


  return (
    <div className={styles.container}>

       <div className={styles.header}>
         <TopLabel/>
       </div>

       <div className={styles.navbar}>
          <Navbar/>
       </div>

       <div className={styles.text_div} onClick={()=>navigate(-1)} >
         <FaArrowLeft cursor={"pointer"}/>
         <p>My Profile </p>
       </div>

       <div className={styles.profile_pic}>

        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
          <img style={{width:'40px' , height:'40px'}} src={pic} alt="" />
          <p>Mike Rose</p>
        </div>

       {!isEditable && <button className={styles.btn} onClick={toggleEdit}>Edit</button>}
         
       </div>

       <div className={styles.details}>

          <div style={{display:'flex',flexDirection:'column'}}>
           <label htmlFor="name">Full Name</label> 
           <input type="text" name='name' ref={nameRef} className={styles.input_field}  readOnly={!isEditable} style={{
          border: isEditable ? '1px solid rgba(0, 0, 0, 0.5)' : 'none' }}/>
          </div>

          <div style={{display:'flex',flexDirection:'column'}}>
           <label htmlFor="email">Email</label> 
           <input type="email" name='email'ref={emailRef} className={styles.input_field}  readOnly style={{
          border: isEditable ? '1px solid rgba(0, 0, 0, 0.5)' : 'none' }}/>
          </div>

          <div style={{display:'flex',flexDirection:'column'}}>
           <label htmlFor="gender">Gender</label> 
           <input type="text" name='gender' ref={genderRef} className={styles.input_field}  readOnly={!isEditable} style={{
          border: isEditable ? '1px solid rgba(0, 0, 0, 0.5)' : 'none' }} />
          </div>

          <div style={{display:'flex',flexDirection:'column'}}>
           <label htmlFor="country">Country</label> 
           <input type="text" name='country' ref={countryRef} className={styles.input_field}  readOnly={!isEditable} style={{
          border: isEditable ? '1px solid rgba(0, 0, 0, 0.5)' : 'none' }}/>
          </div>
          {isEditable && <button className={styles.save_btn} onClick={handleSave}>{isLoading ? "Saving...":"Save"}</button>}
       </div>

       <div className={styles.saved_payments}>
        <h2>Saved Payments</h2>
        <div className={styles.payment_card}>
          {cards.length === 0 ? 
          <p>No Saved Payment Methods</p>:
          <>
          {cards.map((item,index)=>{
            return(
              <PaymentCard key={index} item={item} setIsModalOpen={setIsModalOpen} handleCardUpdate={handleCardUpdate}/>
            )
          })}
          </>
          }
        
        </div>
        
       </div>

       <div className={styles.footer}>
         <Footer/>
       </div>

       {isModalOpen && <Modal><PaymentModal fetchCard={fetchCard} cardUpdateId={cardUpdateId} setIsModalOpen={setIsModalOpen}/></Modal>}
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
