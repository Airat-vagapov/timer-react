import { useState } from 'react';

import Layer from './components/Layer'
import Header from './components/Header'
import Timer from './components/Timer'
import SmallModal from './components/SmallModal'


function App() {
  const [timerStatus, setTimerStatus] = useState(false);

  function handleChange(value) {
    setTimerStatus(value);
  }

  return (
    <>
      <Layer>
        <Header />
        <Timer onChange={handleChange} />

        <SmallModal status={timerStatus} />

      </Layer>
    </>
  )
}

export default App
