import React, { useState, useEffect } from 'react';

function Timer({ timerActive }) {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    let intervalId;

    if (timerActive && timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (!timerActive || timeRemaining === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timerActive, timeRemaining]);

  return <div className="Timer">{timeRemaining}</div>;
}

export default Timer;
