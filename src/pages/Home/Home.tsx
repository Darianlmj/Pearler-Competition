import React, { useState } from 'react'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Dashboard from '../../components/Dashboard/Dashboard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Home = () => {
  const [currentAge, setCurrentAge] = useState<number>(0);
  const [targetAge, setTargetAge] = useState<number>(0);
  const [savingsGoal, setSavingsGoal] = useState<number>(0);

  const [isTutorialStarted, setIsTutorialStarted] = useState<boolean>(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);
  const [isStage1Done, setIsStage1Done] = useState<boolean>(false);
  const [isStage2Done, setIsStage2Done] = useState<boolean>(false);
  const [isStage3Done, setIsStage3Done] = useState<boolean>(false);
  const [isTutorialFinished, setIsTutorialFinished] = useState<boolean>(false);

  const startTutorial = () => {
    setIsTutorialStarted(true);
    setShowWelcomeMessage(false);
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

  return (<>
    <Header />
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
        <div className={styles.question}>
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
        <div className={styles.question}>
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
        <div>
          <Dashboard currentAge={currentAge} targetAge={targetAge} savingsGoal={savingsGoal} />
        </div>}
    </div>
    <Footer />
  </>)
}

export default Home