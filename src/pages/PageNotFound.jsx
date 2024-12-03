import React from 'react'
import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className={styles.container}>
    <h2 className={styles.sub_text}>404 ! Page not found <span>&#128531;</span></h2>
    <p style={{fontSize:'1.2rem'}}>The page you are looking for is not register by the app.</p>
    <Link className={styles.link} to='/'>GO TO REGISTER PAGE</Link>
   </div>
  )
}
