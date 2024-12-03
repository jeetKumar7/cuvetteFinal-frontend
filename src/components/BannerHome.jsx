import React from 'react'
import styles from './BannerHome.module.css'
import centerimage from '../assets/lady2.png'
import rightimage from '../assets/lady1.png'
import logo from '../assets/LOGO 1.png'


function BannerCard ({headtext,subtext,margin,marginTop}){
  return(
    <div className={styles.banner_div}  style={{marginLeft:margin,marginTop:marginTop}}>
      <div className={styles.text_div}>
        <img src={logo} alt="logo" style={{width:'50px',height:'20px'}} />
        <p style={{fontSize:'12px',fontWeight:'bold'}}>{headtext}</p>
        <span style={{fontSize:'12px'}}>{subtext} </span>
      </div>
      <div className={styles.number_div}>
        <span>now</span>
        
      </div>
       
    </div>
  )
}

export default function BannerHome() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
       <span style={{fontSize:'8px'}}>Order Restaurant food, takeaway and groceries.</span>
       <p style={{fontSize:'20px',marginTop:'2%'}}>Feast Your Senses,</p>
       <p style={{color:'#FC8A06',fontSize:'20px'}}>Fast and Fresh</p>

       <span style={{fontSize:'8px'}}>Enter a postcode to see what we deliver</span>

       <div className={styles.input_field_container}>

        <input type="text" placeholder='e.g. EC4R 3TE' className={styles.input_field} />
        <button className={styles.btn}>
          Search
        </button>

       </div>

      </div>

      <div className={styles.mid}>
        <img src={centerimage} alt="centerimage" className={styles.centerimage} />

      </div>

      <div className={styles.right}>
        <div className={styles.color_div}>
        <img src={rightimage} alt="Right Image" className={styles.rightimage} /> 
        <div>
        <BannerCard headtext={"We’ve Received your order!"} subtext={"Awaiting Restaurant acceptance "} margin={"-50%"} marginTop={"7%"}/>
        <BannerCard headtext={"Order Accepted! "} subtext={"Your order will be delivered shortly"} marginTop={"10%"} margin={"-22%"}/>
        <BannerCard headtext={"Your Rider's nearby"} subtext={"They're almost there - get ready "} marginTop={"10%"} margin={"-30%"}/>
        </div>
       
          
        </div>
        
       
         
      </div>

    </div>
  )
}
