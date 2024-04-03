import { useState } from 'react';
import { useRef } from 'react';

import styles from './Timer.module.css';

export default function Timer() {
    const [isPausedStatus, setIsPausedStatus] = useState(false);

    const hoursInput = useRef(null)
    const minutesInput = useRef(null)
    const secondsInput = useRef(null)
    const intervalName = useRef(null)
    let startTime = useRef(null)
    let currentTime = useRef(null)
    let pauseTime = useRef(null)
    let isPaused = useRef(false)



    function handleStart(isPaused) {
        if (!startTime.current) {
            startTime.current = new Date().getTime();
        }



        clearInterval(intervalName.current);
        intervalName.current = setInterval(() => {
            if (!isPaused.current) {
                if (pauseTime.current) {
                    currentTime.current += 1000;
                } else {
                    currentTime.current = new Date().getTime();
                }

                let diffTime = currentTime.current - startTime.current;
                timerHandler(hoursInput, minutesInput, secondsInput, diffTime);
            }
        }, 1000);
    }

    function pauseTimer() {
        setIsPausedStatus(true)
        isPaused.current = !isPaused.current;
        if (!pauseTime.current) {
            pauseTime.current = new Date().getTime();
            currentTime.current = pauseTime.current;
        }
    }

    function resumeTimer() {
        setIsPausedStatus(false)
        isPaused.current = !isPaused.current;
    }

    function handleStop() {
        clearInterval(intervalName.current);
        hoursInput.current.value = addZero(0)
        minutesInput.current.value = addZero(0)
        secondsInput.current.value = addZero(0)
    }


    return (
        <div className={styles.timerBlock}>
            <div className={styles.timerBlock__inner}>
                <div>
                    <input ref={hoursInput} name="hours" type="text" />
                </div>
                <div>
                    <input ref={minutesInput} name="minutes" type="text" />
                </div>
                <div>
                    <input ref={secondsInput} name="seconds" type="text" />
                </div>
            </div>
            <div className={styles.timerBlock__contols}>
                <button onClick={() => handleStart(isPaused)}>Start</button>
                <button onClick={isPausedStatus ? resumeTimer : pauseTimer}>{isPausedStatus ? "Resume" : "Pause"}</button>
                <button onClick={handleStop}>Reset</button>
            </div>
        </div>
    )
}

const timerHandler = (hours, minutes, seconds, diffTime) => {
    seconds.current.value = addZero(parseInt(diffTime / 1000) % 60);
    minutes.current.value = addZero(parseInt(diffTime / 1000 / 60) % 60);
    hours.current.value = addZero(parseInt(diffTime / 1000 / 60 / 60) % 24);
}

function addZero(num) {
    return num < 10 ? "0" + num : num;
}