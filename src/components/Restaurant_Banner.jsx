import React from 'react'
import styles from './Restaurant_Banner.module.css'
import BannerImage from "../assets/Rectangle 44.png"
import { MdDirectionsBike } from "react-icons/md"
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { TbClockHour8Filled } from "react-icons/tb";



function BannerDiv ({icon,text}){
  return(
    <div className={styles.banner_div_container}>
     {icon}
        <p>{text}</p>
    </div>
  )
}

export default function Restaurant_Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p style={{fontSize:'15px',color:'white'}}>I'm lovin' it!</p>
        <h1 style={{color:'white'}}>McDonald’s East London</h1>
        <div style={{display:'flex',gap:'2%',marginTop:'2%'}}>
        <BannerDiv icon={<MdPlaylistAddCheckCircle size={25}/> } text={"Minimum Order: 12 GBP"}/>
        <BannerDiv icon={<MdDirectionsBike size={25}/>} text={"Delivery in 20-25 Minutes"}/>

        </div>


        <div className={styles.lower_div_left}>
           <TbClockHour8Filled size={23}/>
           <p>Open until 3:00 AM</p>
        </div>
       
         
      </div>

      <div className={styles.right}> 
        <img src={BannerImage} alt="Banner Image" />


      </div>

    </div>
  )
}
