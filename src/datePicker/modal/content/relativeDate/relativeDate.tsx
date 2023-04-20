import styles from './relativeDate.module.css'
import {options} from './options'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from "../../../superDatePicker";
import { getNowDate } from "../../../../helpers/getNowDate";
import { countDate } from '../../../../helpers/countDate';

interface IRelativeDate {
    isStart: boolean,
}

const RelativeDate = ({isStart}: IRelativeDate) => {
    const setData = useContext(DataContext);

    // Селект
    const [selected, setSelected] = useState({
        text: '1',
        data: 1,
    })
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.stopPropagation()
        setSelected({text: e.target.value, data: +options[e.target.selectedIndex][1]})
    }
    // Текущее время на момент открытия модального окна
    const [nowDate, setNowDate] = useState({
        nowDate: '',
        nowDateText: '',
    })
    // Счетчик
    const [value, setValue] = useState('0')
    
    // Кнопка
    const handleClick = () => {
        setData.setData((prev) => {
            return isStart
            ? {
                ...prev,
                start: nowDate.nowDate,
                startText: nowDate.nowDateText,
              }
            : { ...prev,
                end: nowDate.nowDate,
                endText: nowDate.nowDateText
            }; 
        })
    }

    useEffect(() => {
        if(+value == 0) {
            const {data, dataText} = getNowDate()
            setNowDate({nowDate: data, nowDateText: dataText})
        } else {
            const {dateMs, dateText} = countDate(value, selected.data)
            setNowDate({nowDate: String(dateMs), nowDateText: dateText})
        }
    }, [selected, value])

  return (
    <div className={styles.relativeDateWrap}>
        <div className={styles.inputsWrap}>
            <input
                className={styles.relativeDateSelect}
                value={value}
                onChange={e => setValue(e.target.value)}
                type="number"
                step="1"
            />
            <select
                className={styles.relativeDateSelect}
                onChange={e => handleChange(e)}
                value={selected.text}
            >
                {options.map((element, index) =>
                    <option key={index}>{element[0]}</option>
                )}
            </select>
        </div>
        <div className={styles.startDateWrap}>
            <p className={styles.startDateP}>Start date</p>
            <div className={styles.startDateText}>
                {nowDate.nowDateText}
            </div>
        </div>
        <button
            className={styles.relativeDateButton}
            onClick={() => handleClick()}
        >{isStart ? 'Set start date' : 'Set end date'}</button>
    </div>
  )
}

export default RelativeDate