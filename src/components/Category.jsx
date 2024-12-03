import React from 'react'
import styles from './Category.module.css'
import MenuImage from '../assets/Rectangle 46.png'
import { FaCirclePlus } from "react-icons/fa6";


function CategoryCard ({item,handleCartClick}) {
  return(
    <div className={styles.category_card_container}>
        <div className={styles.left}>
          <h5>{item.foodName}</h5>
          <p style={{fontSize:'12px',marginTop:'10%'}}>{item.description}</p>
          <h5 style={{marginTop:'5%'}}>{item.price}</h5>

        </div>

        <div className={styles.right}>
          <img src={item.image} alt="" />
          <div className={styles.add_cart} onClick={()=>handleCartClick(item.foodName,item.price,item.price)}>
          <FaCirclePlus size={25} />
        </div>
        </div>
    </div>
  )
}
export default function Category({menuName,menuData,isOrange,isCartClicked,handleCartClick}) {
  return (
    <div className={styles.container}>
      <h2 style={{color:isOrange && '#FC8A06'}}>{menuName}</h2>

      <div className={styles.card_div}  style={{gridTemplateColumns :isCartClicked ? 'repeat(2,1fr)':'repeat(3,1fr)'}}>
          {menuData.map((item,index)=>{
            return(
              <CategoryCard key={index}  item={item} handleCartClick={handleCartClick}/>
            )
          })}
      </div>
    </div>
  )
}
