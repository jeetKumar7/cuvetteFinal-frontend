import React from 'react'
import styles from './Card_About.module.css'


export default function Card_About({headtext,bottomtext,img}) {
  return (
    <div className={styles.container}>
      <p style={{fontSize:'12px',textAlign:'center',fontWeight:'bold',marginTop:'2%'}}>{headtext}</p>
      <div style={{display:'flex',justifyContent:'center',marginTop:'4%'}}>
      <img style={{marginTop:'5%',margin:'auto auto'}} src={img} alt="" />
      </div>
     
      <p style={{width:'200px' ,wordWrap:'break-word',textAlign:'center',fontSize:'12px'}}>{bottomtext}</p>

    </div>
  )
}
