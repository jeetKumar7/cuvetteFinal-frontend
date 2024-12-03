import React from 'react'
import styles from './OrderComponent.module.css'
import image from '../assets/human_image.png'
import logo from '../assets/LOGO 1.png'
import DownloadLogo from './DownloadLogo'
import { IoLogoApple } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";


export default function OrderComponent() {
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        <img src={image} alt="Image" className={styles.img}/>

       </div>

       <div className={styles.right}>
        <div style={{marginLeft:'-7%'}}>
        <img src={logo} alt="Logo" />
        <span style={{fontWeight:'bold',fontSize:'70px'}}>ing is more</span>
        </div>


        <div className={styles.personalised_div}>
          <span style={{color:'#FC8A06',marginLeft:'-10%'}}><u>Personalised</u></span>
          <span style={{color:'white'}}>  & Instant</span>
        </div>

        <p style={{marginTop:'5%',marginLeft:'5%'}}>Download the Order.uk app for faster ordering</p>
        <div className={styles.logo_download}>
          <DownloadLogo down_logo={<IoLogoApple color='white' size={40}/>} texttoshow={"App Store"} uppertext={"Download on the"}/>
          <DownloadLogo  down_logo={<BiLogoPlayStore color='white' size={40}/>} texttoshow={"Google Play"} uppertext={"GET IT ON"}/>

        </div>
       </div>


    </div>
  )
}
