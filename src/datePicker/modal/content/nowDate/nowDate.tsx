import styles from './nowDate.module.css'

const NowDate = () => {
  return (
    <div className={styles.nowDateWrap}>
        <p className={styles.nowDateText}>Setting the time to "now" means that on every refresh this time will be set to the time of the refresh.</p>
        <button className={styles.setNowButton}>
            Set start date and time to now
        </button>
    </div>
  )
}

export default NowDate