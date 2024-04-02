import { useState } from 'react';
import { useRef } from 'react';

import styles from './Timer.module.css';

export default function Timer() {
    const hoursInput = useRef(null)
    const minutesInput = useRef(null)
    const secondsInput = useRef(null)
    const intervalName = useRef(null)
    let startTime = useRef(null)
    let currentTime = useRef(null)
    let pauseTime = useRef(null)

    const [isPaused, setIsPaused] = useState(false);


    function handleStart() {
        if (!startTime.current) {
            startTime.current = new Date();
        }

        clearInterval(intervalName.current);
        intervalName.current = setInterval(() => {
            console.log(isPaused)
            if (!isPaused) {
                currentTime.current = new Date();
                let diffTime = currentTime.current - startTime.current;
                timerHandler(hoursInput, minutesInput, secondsInput, diffTime);
            }
        }, 1000);
    }

    function handleStop() {
        clearInterval(intervalName.current);
        hoursInput.current.value = addZero(0)
        minutesInput.current.value = addZero(0)
        secondsInput.current.value = addZero(0)
    }

    function pauseTimer() {
        setIsPaused(true);
        pauseTime.current = currentTime.current;
        // clearInterval(intervalName.current);
    }

    function resumeTimer() {
        setIsPaused(false);
        currentTime.current = pauseTime.current;
    }
    console.log(isPaused)
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
                <button onClick={handleStart}>Start</button>
                <p>{isPaused}</p>
                <button onClick={isPaused ? resumeTimer : pauseTimer}>{isPaused ? "Resume" : "Pause"}</button>
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