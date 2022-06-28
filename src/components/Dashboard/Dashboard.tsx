import React, { useState } from 'react'
import styles from './Dashboard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Dashboard = (props: {currentAge: number, targetAge: number, savingsGoal: number}) => {
  const { currentAge, targetAge, savingsGoal } = props;

  const [newSavingsAmount, setEstimatedSavingsPerWeek] = useState<number>(0);
  const [newEstimatedTimeToReachGoal, setEstimatedTimeToReachGoal] = useState<number>(0);
  const [showReduceSavingsInput, setShowReduceSavingsInput] = useState<boolean>(false);
  const [showRecalculateValue, setShowRecalculateValue] = useState<boolean>(false);

  const calcSavingsPerWeek = () => {
    return (savingsGoal / ((targetAge - currentAge) * 52)).toFixed(2);
  }

  const recalculateSavingsPerWeek = () => {
    setShowRecalculateValue(true);
    console.log(savingsGoal / newSavingsAmount);
    setEstimatedTimeToReachGoal(Number((savingsGoal / newSavingsAmount).toFixed(2)));
  }

  return (
    <div className={styles.flexBox}>
      {/* Displaying the initial info */}
      <div className={styles.dashboardHeader}>
        <h1 className={styles.header}>Preliminary Information</h1>
        <p className={styles.subheader}>Current Age: {currentAge} years old</p>
        <p className={styles.subheader}>Target Age: {targetAge} years old</p>
        <p className={styles.subheader}>Savings Goal: ${savingsGoal}</p>
      </div>
    
      <div className={styles.horizontalBar}></div>

      {/* Dashboard for stats */}
      <div className={styles.dashboardContent}>
        <p className={styles.subheader2}>Based on your information...</p>
        <h1 className={styles.header}>
          Pure Savings &nbsp;
          <FontAwesomeIcon icon={faLeaf as IconProp} />
        </h1>

        <p className={styles.subheader}>
          If you save just 
          <span className={styles.highlight}> ${showRecalculateValue ? newSavingsAmount : calcSavingsPerWeek()} </span>
          a week, you can easily achieve your goals in just
          <span className={styles.highlight}> {showRecalculateValue ? newEstimatedTimeToReachGoal + " weeks" : (targetAge - currentAge) + "years"}.</span>
        </p>
        

        { !showRecalculateValue &&
          <div>
            <p className={`${styles.subheader} ${styles.bold}`}>
              Is it possible for me to acheive this goal faster?
            </p>
            <button className={styles.button} onClick={() => setShowReduceSavingsInput(!showReduceSavingsInput)}>
              <p className={styles.buttonText}>Reduce</p>
              <FontAwesomeIcon icon={faArrowRight as IconProp} />
            </button>
          </div>
        }

        {showReduceSavingsInput && !showRecalculateValue &&
          <div>
            <p className={`${styles.subheader} ${styles.bold}`}>
              How much do you think you could save in a week?
            </p>
            <input className={styles.input} type='number' placeholder='$' onChange={e => setEstimatedSavingsPerWeek(e.target.valueAsNumber)} />
            <button className={styles.button} onClick={() => recalculateSavingsPerWeek()}>
              <p className={styles.buttonText}>Recalculate</p>
              <FontAwesomeIcon icon={faArrowRight as IconProp} />
            </button>
          </div>
        }


        {/* <h1 className={styles.header}>
          Investing with Pearler Micro &nbsp;
          <FontAwesomeIcon icon={faSeedling as IconProp} />
        </h1> */}
      </div>
    </div>
  )
}

export default Dashboard