import React from 'react';
import styles from "../../syles.module.css";

const TaskItem = () => {
    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}/>
            <div className={styles.taskItemBody}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, excepturi.
            </div>
            <div className={styles.taskItemControl}>
                <div className={styles.delateTask}>1</div>
                <div className={styles.editTask}>2</div>
                <div className={styles.starTask}>3</div>
            </div>
        </div>
    );
};

export default TaskItem;