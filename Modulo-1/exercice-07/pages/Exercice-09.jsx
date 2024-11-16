import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Timer() {
    const [seconds, setSeconds] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isRunning, setIsRunning] = useState(false); 
  const [intervalId, setIntervalId] = useState(null); 


  const startTimer = () => {
    if (seconds <= 0) return; 
    setTimeLeft(seconds);
    setIsRunning(true);
  };


  const pauseTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
    }
  };


  const resetTimer = () => {
    setSeconds(0);
    setTimeLeft(0);
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  useEffect(() => {
    let id;
    if (isRunning && timeLeft > 0) {
      id = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      setIntervalId(id);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false); 
      setIntervalId(null);
      alert('Tempo acabou!');
    }

    return () => {
      if (id) {
        clearInterval(id); 
      }
    };
  }, [isRunning, timeLeft]);

  const navigate = useNavigate
 const goToEx9 = () => {
    navigate("/exercice-09")
 }
 const goToEx1 = () => {
    navigate("/exercice-08")
 }
 const goToEx7 = () => {
    navigate("/exercice-07")
 }
 const goToEx6 = () => {
    navigate("/exercice-06")
 }
 const goToEx5 = () => {
    navigate("/exercice-05")
 }
 const goToEx4 = () => {
    navigate("/exercice-04")
 }
 const goToEx3 = () => {
    navigate("/exercice-03")
 }
 const goToEx2 = () => {
    navigate("/exercice-02")
 }
 const goToEx10 = () => {
    navigate("/exercice-10")
 }

  return (
    <>
        <div className='countdown'>
            <h1>Timer</h1>
            <div>
                <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="Defina os segundos"
                />
                <button className='button-btn-start' onClick={startTimer} disabled={isRunning || seconds <= 0}>Start</button>
                <button className='button-btn-pause' onClick={pauseTimer} disabled={!isRunning}>Pause</button>
                <button className='button-btn-restart' onClick={resetTimer}>Restart</button>
            </div>
            <div>
                <h2>{timeLeft} segundos restantes</h2>
            </div>
     </div>
        <div className="navigation">
            <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
            <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
            <Link to ="/exercice-07"><button onClick={goToEx7}>Exercicio 07</button></Link>
            <Link to ="/exercice-06"><button onClick={goToEx6}>Exercicio 06</button></Link>
            <Link to ="/exercice-05"><button onClick={goToEx5}>Exercicio 05</button></Link>
            <Link to ="/exercice-04"><button onClick={goToEx4}>Exercicio 04</button></Link>
            <Link to ="/exercice-03"><button onClick={goToEx3}>Exercicio 03</button></Link>
            <Link to ="/exercice-02"><button onClick={goToEx2}>Exercicio 02</button></Link>
            <Link to ="/exercice-01"><button onClick={goToEx1}>Exercicio 01</button></Link>

        </div>
    </>
    
  );
}

export default Timer;
