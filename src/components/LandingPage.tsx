import React from 'react'
import styles from '../styles/LandingPage.module.css';

function LandingPage() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>IKEA ME THIS</div>
        <form className={styles.form}>
          <input className={styles.question} type="text" name="name" id="nme" required autoComplete="off" />
          <label htmlFor="nme"><span>Username</span></label>
          <button className={styles.button} type="submit">Submit</button>
        </form>
    </div>
  )
}

export default LandingPage