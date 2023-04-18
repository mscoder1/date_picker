import styles from './superDatePicker.module.css'
import { FiArrowRight } from "react-icons/fi";
import Modal from './modal/modal';
import { useState } from 'react';
import NowDate from './modal/content/nowDate/nowDate';

const SuperDatePicker = () => {

    const [modalStart, setModalStart] = useState(false)
    const [modalEnd, setModalEnd] = useState(false)

    const openStart = () => {
        setModalStart(prev => !prev)
        setModalEnd(false)
    }

    const openEnd = () => {
        setModalEnd(prev => !prev)
        setModalStart(false)
    }

  return (
    <div className={styles.sdpWrap}>
        <label className={styles.label}>
            Dates
        </label>
        <div 
            className={ modalStart ? styles.datePickActive : styles.datePick }
            onClick={() => openStart()}
        >
            Apr 18 2023 @ 11:17:23
            <div onClick={e => e.stopPropagation()}>
                <Modal isActive={modalStart} />
            </div>
        </div>
        <div className={styles.iconBlock}>
            <FiArrowRight size={15} />
        </div>
        <div 
            className={ modalEnd ? styles.datePickActive : styles.datePick } 
            onClick={() => openEnd()}
        >
            <div onClick={e => e.stopPropagation()} className={styles.tech}>
                <Modal isActive={modalEnd} />
            </div>
            now
        </div>
    </div>
  )
}

export default SuperDatePicker