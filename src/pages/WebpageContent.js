import React from 'react';
import styles from '../styles/Terminal.module.css'

export default function Webpage() {

    return (
        <div>
            <p className={styles.p}>First Line...</p>
            <p className={styles.p}>Second Line...</p>
            <p className={styles.p}>Third Line...</p>
            <p className={styles.p}>Fourth Line...</p>
            <p className={styles.p}>Fifth Line...</p>
            <p className={styles.p}>Sixth Line...</p>
            <p className={styles.p}><span className={styles.span}>Final/Blinking Line</span>  <span>|</span>
            </p>
        </div>
    )
}