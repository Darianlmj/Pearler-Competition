import React, { useState } from 'react'
import styles from './Home.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Home = () => {
  const [currentAge, setCurrentAge] = useState(0);
  const [targetAge, setTargetAge] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);

  const [isTutorialStarted, setIsTutorialStarted] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [isStage1Done, setIsStage1Done] = useState(false);
  const [isStage2Done, setIsStage2Done] = useState(false);
  const [isStage3Done, setIsStage3Done] = useState(false);
  const [isTutorialFinished, setIsTutorialFinished] = useState(false);

  const startTutorial = () => {
    setIsTutorialStarted(true);
    setShowWelcomeMessage(false);
  }

  const calcSavingsPerWeek = () => {
    return (savingsGoal / ((targetAge - currentAge) * 52)).toFixed(2);
  }

  const checkStage1 = () => {
    if (currentAge > 0) {
      setIsTutorialStarted(false);
      setIsStage1Done(true);
    }
  }

  const checkStage2 = () => {
    if (currentAge > 0 && savingsGoal > 0 && isStage1Done) {
      setIsStage1Done(false);
      setIsStage2Done(true);
    }
  }

  const checkStage3 = () => {
    if (currentAge > 0 && targetAge > 0 && savingsGoal > 0) {
      setIsStage2Done(false);
      setIsStage3Done(true);
      setIsTutorialFinished(true);
    }
  }

  return (
    <div className={styles.flexBox}>
      {/* Welcome Message */}
      {showWelcomeMessage &&
        <div>
          <h1 className={styles.header}>Hi There!</h1>
          <p className={styles.subheader}>Let's get started shall we?</p>
          <button className={styles.button} onClick={startTutorial}>
            <p className={styles.buttonText}>Begin</p>
            <FontAwesomeIcon icon={faArrowRight as IconProp} />
          </button>
        </div>
      }

      {/* Question about Age */}
      {isTutorialStarted && 
        <div>
          <h1 className={styles.header}>How old are you?</h1>
          <p className={styles.subheader}>Please enter your age below.</p>
          <input className={styles.input} type='number' placeholder='Age' onChange={e =>{setCurrentAge(e.target.valueAsNumber)}} />
          <button className={styles.button} onClick={checkStage1}>
            <p className={styles.buttonText}>Continue</p>
            <FontAwesomeIcon icon={faArrowRight as IconProp} />
          </button>
        </div>
      }


      {/* Question about saving goals */}
      {isStage1Done &&
        <div>
          <h1 className={styles.header}>How much do you want to save?</h1>
          <p className={styles.subheader}>Please enter your saving goal below.</p>
          <input className={styles.input} type='number' placeholder='Goal' onChange={e => {setSavingsGoal(e.target.valueAsNumber)}} />
          <button className={styles.button} onClick={checkStage2}>
            <p className={styles.buttonText}>Continue</p>
            <FontAwesomeIcon icon={faArrowRight as IconProp} />
          </button>
        </div>
      }


      {isStage2Done &&
        <div>
          <h1 className={styles.header}>Target Age</h1>
          <p className={styles.subheader}>When do you aim to achieve this goal?</p>
          <input className={styles.input} type='number' placeholder='Target Age' onChange={e => {setTargetAge(e.target.valueAsNumber)}} />
          <button className={styles.button} onClick={checkStage3}>
            <p className={styles.buttonText}>Continue</p>
            <FontAwesomeIcon icon={faArrowRight as IconProp} />
          </button>
        </div>
      }

      {isTutorialFinished && 
        <>
          {/* Displaying the initial info */}
          <div>
            <h1 className={styles.header}>Preliminary Information</h1>
            <p className={styles.subheader}>Current Age: {currentAge} years old</p>
            <p className={styles.subheader}>Target Age: {targetAge} years old</p>
            <p className={styles.subheader}>Savings Goal: ${savingsGoal}</p>
          </div>
        

          {/* Dashboard for stats */}
          <div>
            <p className={styles.subheader2}>Based on the information provided...</p>
            <h1 className={styles.header}>Pure Savings</h1>
            <p className={styles.subheader}>
              If you save just 
              <span className={styles.highlight}> ${calcSavingsPerWeek()} </span>
              a week, you can easily achieve your goals in
              <span className={styles.highlight}> {targetAge - currentAge} </span>
              years.
            </p>
            
            <h1 className={styles.header}>Investing with Pearler Micro</h1>
          </div>
        </>}
    </div>
  )
}

export default Home