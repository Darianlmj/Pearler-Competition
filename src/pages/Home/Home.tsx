import React from 'react'
import styles from './Home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Home = () => {

  return (
    <div className={styles.flexBox}>
      {/* Welcome Message */}
      <div>
        <h1 className={styles.header}>Hi There!</h1>
        <h3 className={styles.subheader}>Let's get started shall we?</h3>
        <button className={styles.button}>
          <p className={styles.buttonText}>Begin</p>
          <FontAwesomeIcon icon={faArrowRight as IconProp} />
        </button>
      </div>

      {/* Question about Age
      <div>
        <h1 className={styles.header}>How old are you?</h1>
        <h3 className={styles.subheader}>Please enter your age below.</h3>
        <input className={styles.input} type="number" />
        <button className={styles.button}>
          <p className={styles.buttonText}>Continue</p>
          <FontAwesomeIcon icon={faArrowRight as IconProp} />
        </button>
      </div> */}
    </div>
  )
}

export default Home