import { useState, useEffect } from 'react';
import styles from './SmallModal.module.css';

export default function SmallModal({ status }) {
    const [showModal, setShowModal] = useState(status ? styles.active : '');

    useEffect(() => {
        if (status) {
            setShowModal(styles.active);
            const timeout = setTimeout(() => {
                setShowModal('');
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [status]);

    return (
        <div className={`${styles.smallModal} ${showModal}`}>

            {status === 'started' ? <p>Таймер запущен</p> : undefined}
            {status === 'paused' ? <p>Таймер приостановлен</p> : undefined}
            {status === 'resumed' ? <p>Таймер возобновлен</p> : undefined}
            {status === 'stoped' ? <p>Таймер сброшен</p> : undefined}
        </div>
    )
}