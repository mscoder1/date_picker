import { useState } from 'react'
import NowDate from './content/nowDate/nowDate'
import RelativeDate from './content/relativeDate/relativeDate'
import styles from './modal.module.css'

interface IModal {
    isActive: boolean,
    children?: React.ReactNode
}

const Modal = ({isActive, children}: IModal) => {

    const [absolute, setAbsolute] = useState(false)
    const [relative, setRelative] = useState(false)
    const [now, setNow] = useState(true)

    const openAbsolute = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setAbsolute(true)
        setRelative(false)
        setNow(false)
    }

    const openRelative = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setAbsolute(false)
        setRelative(true)
        setNow(false)
    }

    const openNow = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setAbsolute(false)
        setRelative(false)
        setNow(true)
    }

  return (
    <div className={ isActive ? styles.modalWrap : styles.modalWrapDisabled }>
        <div className={styles.select}>
            <button onClick={e => openAbsolute(e)} className={absolute ? styles.modalButtonActive : styles.modalButton} >Absolute</button>
            <button onClick={e => openRelative(e)} className={relative ? styles.modalButtonActive : styles.modalButton} >Relative</button>
            <button onClick={e => openNow(e)} className={now ? styles.modalButtonActive : styles.modalButton} >Now</button>
        </div>
        { now && <NowDate />}
        { relative && <RelativeDate /> }
    </div>
  )
}

export default Modal