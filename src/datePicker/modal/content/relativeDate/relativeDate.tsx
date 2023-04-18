import styles from './relativeDate.module.css'
import {options} from './options'
import { useState } from 'react'

const RelativeDate = () => {

    const [selected, setSelected] = useState({
        text: '',
        data: 1,
    })

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.stopPropagation()
        setSelected({text: e.target.value, data: +options[e.target.selectedIndex][1]})
    }

    console.log(selected.data)

  return (
    <div className={styles.relativeDateWrap}>
        <div className={styles.inputsWrap}>
            <input
                className={styles.relativeDateSelect}
                onClick={e => e.stopPropagation()}
            />
            <select
                onClick={e => e.stopPropagation()}
                className={styles.relativeDateSelect}
                onChange={e => handleChange(e)}
                value={selected.text}
            >
                {options.map(element =>
                    <option key={element[1]}>{element[0]}</option>
                )}
            </select>
        </div>
        <div className={styles.startDateWrap}>
            <p className={styles.startDateP}>Start date</p>
            <div className={styles.startDateText}>
                Apr 17 2023 @ 17:20:23
            </div>
        </div>
    </div>
  )
}

export default RelativeDate