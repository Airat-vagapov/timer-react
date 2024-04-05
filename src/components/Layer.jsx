import styles from "./Layer.module.css"

export default function Layer({ children }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.timerBody}>
                <div className={styles.container}>
                    {children}
                </div>
            </div>
        </div>
    )

}