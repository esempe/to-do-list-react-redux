import React from 'react';
import styles from '../syles.module.css'
import {Connect} from "react-redux";
import {Counter} from "../components/counter";
import InputSection from "../components/InputSection/InputSection";
import TaskItem from "../components/taskItem/taskItem";

const App = (props) => {
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.appWrapper}>
                <InputSection/>
                <div className={styles.taskList}>
                    <TaskItem/>
                </div>
            </div>
        </div>
    );
};

export default App;