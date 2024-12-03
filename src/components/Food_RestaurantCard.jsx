import React from 'react'
import styles from './Food_RestaurantCard.module.css'


export default function Food_RestaurantCard({item,color,textcolor,textalign}) {
  return (
    <div className={styles.conatiner} style={{backgroundColor:color}}>
      <div className={styles.top}>
        <img src={item.img} alt="Food Image" className={styles.img}/>  

      </div>

      <div className={styles.bottom}>
        <p style={{fontWeight:'bold',fontSize:'15px',color:textcolor,textAlign:textalign}}>{item.text}</p>
        <p style={{color:'#FC8A06',fontSize:'12px',marginTop:'-2%'}}>{item?.subtext}</p>

      </div>
    </div>
  )
}
