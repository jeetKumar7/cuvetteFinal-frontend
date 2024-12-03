import React from 'react'
import styles from './SearchContainer.module.css'
import { IoSearch } from "react-icons/io5";

export default function SearchContainer() {
  return (
    <div className={styles.container}>
      <h3>All Offers from McDonald’s East London</h3>
      <div  className={styles.search_container} >
        <IoSearch size={22}/>
        <input type="text" placeholder='Search from menu...' className={styles.input_field} />     
      </div>
    </div>
  )
}
