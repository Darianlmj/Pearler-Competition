import React, { useState } from 'react'
import styles from './Home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Home = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [targetAge, setTargetAge] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);

  const calcSavingsPerWeek = () => {
    return (savingsGoal / ((targetAge - currentAge) * 52)).toFixed(2);
  }

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

      {/* Question about Age */}
      <div>
        <h1 className={styles.header}>How old are you?</h1>
        <h3 className={styles.subheader}>Please enter your age below.</h3>
        <input className={styles.input} type='number' placeholder='Age' onChange={e =>{setCurrentAge(e.target.valueAsNumber)}} />
        <button className={styles.button}>
          <p className={styles.buttonText}>Continue</p>
          <FontAwesomeIcon icon={faArrowRight as IconProp} />
        </button>
      </div>

      {/* Question about saving goals */}
      <div>
        <h1 className={styles.header}>How much do you want to save?</h1>
        <h3 className={styles.subheader}>Please enter your saving goal below.</h3>
        <input className={styles.input} type='number' placeholder='Goal' onChange={e =>{setSavingsGoal(e.target.valueAsNumber)}} />
        <h3 className={styles.subheader}>By the time I'm</h3>
        <input className={styles.input} type='number' placeholder='Target Age' onChange={e =>{setTargetAge(e.target.valueAsNumber)}} />
        <button className={styles.button}>
          <p className={styles.buttonText}>Continue</p>
          <FontAwesomeIcon icon={faArrowRight as IconProp} />
        </button>
      </div>

      {/* Displaying the initial info */}
      <div>
        <h1 className={styles.header}>Preliminary Information</h1>
        <h3 className={styles.subheader}>Current Age: {currentAge} years old</h3>
        <h3 className={styles.subheader}>Target Age: ${savingsGoal}</h3>
        <h3 className={styles.subheader}>Savings Goal: {targetAge} years old</h3>
      </div>

      {/* Dashboard for stats */}
      <div>
        <p className={styles.subheader2}>Based on the information provided...</p>
        <h1 className={styles.header}>Pure Savings</h1>
        <p className={styles.subheader}>
          If you save just ${calcSavingsPerWeek()} a week, you can easily achieve your goals in {targetAge - currentAge} years.
        </p>
      </div>
    </div>
  )
}

export default Home