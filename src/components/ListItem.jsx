import React from 'react'
import styles from './ListItem.module.css'

export default function ListItem({data}) {
  return (
    <div className={styles.container}>
       <ul style={{listStyle:'none'}}>
       {data.map((item,index)=>{
        return(
          <li key={index} style={{backgroundColor:item?.showBorder ? '#FC8A06':'',marginTop:'3%',borderRadius:'20px',padding:'2% 2%'}}>{item.name}</li>
        )
       })}
       </ul>
    </div>
  )
}
