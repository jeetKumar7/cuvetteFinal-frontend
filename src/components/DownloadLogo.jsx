import React from 'react'
import styles from './DownloadLogo.module.css'


export default function DownloadLogo({down_logo,texttoshow,uppertext}) {
  return (
    <div className={styles.container}>
     {down_logo}
     <div style={{color:'white',width:'100%'}}>
      <p style={{fontSize:'10px'}}>{uppertext}</p>
      <p style={{fontSize:'15px'}}>{texttoshow}</p>
     </div>

    </div>
  )
}
