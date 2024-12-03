import React from 'react'
import styles from './Footer.module.css'
import Logo from '../assets/LOGO 2.png'
import DownloadLogo from './DownloadLogo'
import { IoLogoApple } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


function Footer_UL ({headtext,listext}){
  return(

    <div className={styles.footer_ul_container}>
      <span style={{fontWeight:'bold'}}>{headtext}</span>
      <ul style={{listStyle:'none',fontSize:'12px' ,marginTop:'5%',cursor:'pointer'}}>
        {listext.map((item,index)=>{
          return(
            <li style={{marginTop:'2%'}}><u>{item}</u></li>
          )
        })}
       
        
      </ul>
    

    </div>
    
  )
}

export default function Footer() {
  const footerlist1=["Terms and conditions","Privacy","Cookies","Modern Slavery Statement"]
  const footerlist2=["Get help","Add your restaurant","Sign up to deliver","Create a business account"]
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.logo_download}>
          <DownloadLogo down_logo={<IoLogoApple color='white' size={40}/>} texttoshow={"App Store"} uppertext={"Download on the"}/>
          <DownloadLogo  down_logo={<BiLogoPlayStore color='white' size={40}/>} texttoshow={"Google Play"} uppertext={"GET IT ON"}/>

        </div>
        <span style={{fontSize:'10px'}}>Company # 490039-445, Registered with House of companies. </span>
  
        </div>

        <div className={styles.mid}>

          <span style={{fontWeight:'bold',fontSize:'15px'}}>Get Exclusive Deals in your Inbox</span>

          <div className={styles.input_field_container}>
            <input type="email" placeholder="youremail@gmail.com" className={styles.input_field} />
            <button className={styles.btn}>Subscribe</button>
             

          </div>
          <span style={{fontSize:'12px',marginTop:'3%',marginLeft:'5%'}}>we wont spam, read our email policy</span>

          <div className={styles.icons_div}>
            <MdFacebook size={25}/>
            <AiFillInstagram size={25}/>
            <AiFillTikTok size={25}/>
            <FaSnapchat size={24}/>
          </div>


        </div>

        <div className={styles.right}>

        <div className={styles.right_left}>
        <Footer_UL headtext={"Legal Pages"} listext={footerlist1}/>

      </div>

      <div className={styles.right_right}>

      <Footer_UL headtext={"Important Links"} listext={footerlist2}/>

      </div>
       
     </div>
       
         
   </div>

      <div className={styles.bottom}>
        <span style={{width:'50%',marginLeft:'2%'}}>Order.uk Copyright 2024, All Rights Reserved.</span>
        <div className={styles.bottom_div}>
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Pricing</span>
          <span>Do not sell or share my personal information</span>

        </div>
      

      </div>

    </div>
  )
}
