import { useRef } from 'react';

import styles from './Timer.module.css';

export default function Timer() {
    // const [startTime, setStartTime] = useState(null);
    // const [currentTime, setCurrentTime] = useState(new Date());

    const hoursInput = useRef(null)
    const minutesInput = useRef(null)
    const secondsInput = useRef(null)
    const intervalName = useRef(null)
    const seconds = useRef(null)
    const minutes = useRef(null)
    const hours = useRef(null)
    let startTime = useRef(null)
    let currentTime = useRef(null)


    function handleStart() {

        if (!startTime.current) {
            startTime.current = new Date();
        }

        clearInterval(intervalName.current);
        intervalName.current = setInterval(() => {
            currentTime.current = new Date();
            let diffTime = currentTime.current - startTime.current;

            // console.log(secondsInput.current);


            timerHandler(hoursInput, minutesInput, secondsInput, diffTime);
        }, 1000);
    }

    function handleStop() {
        clearInterval(intervalName.current);
        // hours.current.value = 0
        // minutes.current.value = 0
        // seconds.current.value = 0
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
                <button onClick={handleStart}>Start</button>
                <button>Pause</button>
                <button onClick={handleStop}>Reset</button>
            </div>
        </div>
    )
}

const timerHandler = (hours, minutes, seconds, diffTime) => {
    console.log()
    seconds.current.value = addZero(parseInt(diffTime / 1000) % 60);
    minutes.current.value = addZero(parseInt(diffTime / 1000 / 60) % 60);
    hours.current.value = addZero(parseInt(diffTime / 1000 / 60 / 60) % 24);
}

function addZero(num) {
    return num < 10 ? "0" + num : num;
}