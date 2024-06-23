
import { useEffect, useState, useRef } from 'react';



function App() {
  const [time, setTime] = useState(0)
  const timerId = useRef()
const start = () => {
  timerId.current = setInterval(() => {
    console.log("time", time)
    setTime(p => p+1)
  }, 1000)
}
const stop = () => {
  clearInterval(timerId.current)
}
const reset = () => {
  setTime(0)
  clearInterval(timerId.current)
}
const pause = () => {
  if(timerId.current) {

  clearInterval(timerId.current)
  timerId.current = null;

  } else {
    start()
  }

}
  return (
    <div style={{margin: '100px'}}>
      <h2>{time}</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop} style={{margin: "10px"}}>Stop</button>
      <button onClick={reset} style={{margin: "10px"}}>Reset</button>
      <button onClick={pause} style={{margin: "10px"}}>Pause</button>
    </div>
  );
}

export default App;
