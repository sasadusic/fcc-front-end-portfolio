import React from 'react'
import { useState, useEffect } from 'react'


const Clock = () => {
   const [ session, setSession ] = useState(25)
    const [ breakk, setBreakk ] = useState(5)
    const [timeLeft, setTimeLeft] = useState(session * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [timerType, setTimerType] = useState('Session')

    // Update timeLeft kada se promeni session duzina (ako ne odbrojava)
    useEffect(() => {
        if(!isRunning && timerType === 'Session') {
            setTimeLeft(session * 60)
        }
    }, [session])

    useEffect(() => {
        if(!isRunning && timerType === 'Break') {
            setTimeLeft(breakk * 60)
        }
    }, [breakk])

    // Format vremena u mm:ss
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

    // Interval za odbrojavanje
    useEffect(() => {
        let timer = null
        if(isRunning){
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if(prev === 0){
                        const audio = document.getElementById("beep");
                        if (audio) {
                            audio.play(); // ⏰ Pusti zvuk
                        }
                        // Prelaz na Breal ili session
                        if(timerType === 'Session'){
                            setTimerType('Break')
                            return breakk * 60
                        } else{
                            setTimerType('Session')
                            return session * 60
                        }
                    }
                    return prev - 1
                })
            }, 1000)
        }
        return () => clearInterval(timer)
    }, [isRunning, timerType, breakk, session])

  // Dugmad
  const handleSession = (op) => {
    setSession(prev => {
      const newVal = op === "+" ? prev + 1 : prev - 1;
      return Math.min(60, Math.max(1, newVal));
    });
  };

  const handleBreak = (op) => {
    setBreakk(prev => {
      const newVal = op === "+" ? prev + 1 : prev - 1;
      return Math.min(60, Math.max(1, newVal));
    });
  };

    const handleStop = () => {
        setIsRunning(prev => !prev)
    }

    const handleReset = () => {
        setIsRunning(false)
        setSession(25)
        setBreakk(5)
        setTimeLeft(25 * 60)
        setTimerType('Session')
        const audio = document.getElementById('beep')
        if(audio){
            audio.pause()
            audio.currentTime = 0
        }
    }



    return(
<div id='home' className='home'>


        <div id='clock' className="cont">
            <div className="clock">
                <h1 className="header">25 + 5 Clock</h1>

            <div className="flex">
            <div className="btn-cont">

            <label htmlFor="" id="break-label" className="label">Break Length</label>
            <button className="clock-btn btn-i" id="break-increment" onClick={() => handleBreak('+')}><i className="bi bi-chevron-up"></i></button>
            <div className="display" id="break-length">{breakk}</div>
            <button className="clock-btn btn-i" id="break-decrement" onClick={() => handleBreak('-')}><i className="bi bi-chevron-down"></i></button>
            </div>
            
            <div className="btn-cont">

            <label htmlFor="" id="session-label" className="label">Session Length</label>
            <button className="clock-btn btn-i" id="session-increment" onClick={() => handleSession('+')}><i className="bi bi-chevron-up"></i></button>
            <div className="display" id="session-length">{session}</div>
            <button className="clock-btn btn-i" id="session-decrement" onClick={() => handleSession('-')}><i className="bi bi-chevron-down"></i></button>
            </div>

            </div>
            <div className="session-cont">

            <label htmlFor="" id="timer-label">{timerType}</label>
            <div id="time-left">{formatTime()}</div>
            </div>
            <div className="c-btn-cont">
                <button className="clock-btn btn-c" id="start_stop" onClick={handleStop}>{!isRunning ? <i className="bi bi-chevron-right"></i> : <i className="bi bi-pause"></i>}</button>
                <button className="clock-btn btn-c" id="reset" onClick={handleReset}><i className="bi bi-x-lg"></i></button>
            <audio id="beep" src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" />
            </div>    
            <div className="clock-footer">Designed and coded by <label htmlFor="" className="footer-label">Saša Dušić</label></div>        
            </div>

        </div>
</div>
    )
}

export default Clock