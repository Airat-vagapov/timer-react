import { useState } from 'react';
import styles from './SmallModal.module.css';

export default function SmallModal({ status }) {
    // const [showModal, setShowModal] = useState('');

    let showModal = status ? styles.active : '';
    // status ? setShowModal(styles.active) : '';
    console.log(showModal)
    // if (status) {
    // setTimeout(() => {
    //     console.log(111)
    //     setShowModal('')
    //     showModal = '';
    //     console.log(showModal)
    // }, 2000)
    // }

    setInterval(() => {
        console.log(showModal);
        showModal = '';
    }, 2000)


    return (
        <div className={`${styles.smallModal} ${showModal}`}>

            {status === 'started' ? <p>Таймер запущен</p> : undefined}
            {status === 'paused' ? <p>Таймер приостановлен</p> : undefined}
            {status === 'resumed' ? <p>Таймер возобновлен</p> : undefined}
            {status === 'stoped' ? <p>Таймер сброшен</p> : undefined}
        </div>
    )
}