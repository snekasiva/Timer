import React, { useEffect, useState } from 'react'

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else if (minutes < 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        } else {
          setSeconds(0);
          setMinutes(0);
          setHours(hours + 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, hours, minutes, seconds]);

  const startTimer = () => {
    setisRunning(true);
  };

  const pauseTimer = () => {
    setisRunning(false);
  };

  const resetTimer = () => {
    setisRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer text-center ">
      <div className="clock">
      <h1 className="times mt-5">Timer</h1>
      <div className="display mb-4 fs-3"><b>{hours<10?0:""}{hours}:{minutes<10?0:""}{minutes}:{seconds<10?0:""}{seconds}</b></div>
      <button className="btn btn-sm btn-outline-primary mx-2" onClick={startTimer}>Start</button>
      <button className="btn btn-sm btn-outline-primary mx-2" onClick={pauseTimer}>Pause</button>
      <button className="btn btn-sm btn-outline-primary mx-2" onClick={resetTimer}>Restart</button>
      </div>
    </div>
  );
}



export default Timer