import React from 'react';
import styles from "./InputSection.module.css";

const InputSection = () => {
    return (
        <div className={styles.inputSection}>
            <div className={styles.appTitle}>
                To Do App
            </div>
            <div className={styles.inputWrapper}>
                <input type="text" className={styles.input} placeholder={'need to do smt?'}/>
                <div className={styles.inputButton}></div>
            </div>
        </div>
    );
};

export default InputSection;