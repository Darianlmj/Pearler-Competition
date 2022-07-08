import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      Made with ♡ by&nbsp;
      <a className={styles.footerLink}
        href="https://github.com/Darianlmj"
      >
        Darian
      </a>
      &nbsp;in 2022
    </div>
  )
}

export default Footer