import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.brand}>JuniorSavings</h1>
    </div>
  )
}

export default Header