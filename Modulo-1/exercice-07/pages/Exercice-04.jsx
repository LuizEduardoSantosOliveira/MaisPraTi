import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Ex4() {
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      setTimerId(intervalId); // Armazena o ID do timer
    } else if (intervalId) {
      clearInterval(intervalId); // Limpa o timer se o estado startTimer for false
    }

    // Cleanup: Limpa o intervalo quando o componente for desmontado ou quando o estado mudar
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [startTimer]);

  const handleStart = () => {
    setStartTimer(true);
  };

  const handleStop = () => {
    setStartTimer(false);
    if (timerId) {
      clearInterval(timerId); // Limpa o intervalo atual
    }
  };

  const navigate = useNavigate(); // Corrigido: chamando useNavigate corretamente

  // Funções de navegação
  const goToEx9 = () => {
    navigate("/exercice-09");
  };
  const goToEx8 = () => {
    navigate("/exercice-08");
  };
  const goToEx7 = () => {
    navigate("/exercice-07");
  };
  const goToEx6 = () => {
    navigate("/exercice-06");
  };
  const goToEx5 = () => {
    navigate("/exercice-05");
  };
  const goToEx1 = () => {
    navigate("/exercice-01");
  };
  const goToEx3 = () => {
    navigate("/exercice-03");
  };
  const goToEx2 = () => {
    navigate("/exercice-02");
  };
  const goToEx10 = () => {
    navigate("/exercice-10");
  };

  return (
    <>
      <div className="timer">
        <p>Timer: {seconds}</p>
        <br />
        <button onClick={handleStart} className="button-btn-start">
          Start
        </button>
        <button onClick={handleStop} className="button-btn-stop">
          Stop
        </button>
      </div>

        <div className="navigation">
            <Link to ="/exercice-10" ><button onClick={goToEx10}>Exercicio 10</button></Link>
            <Link to ="/exercice-09"><button onClick={goToEx9}>Exercicio 09</button></Link>
            <Link to ="/exercice-08"><button onClick={goToEx8}>Exercicio 08</button></Link>
            <Link to ="/exercice-07"><button onClick={goToEx7}>Exercicio 07</button></Link>
            <Link to ="/exercice-06"><button onClick={goToEx6}>Exercicio 06</button></Link>
            <Link to ="/exercice-05"><button onClick={goToEx5}>Exercicio 05</button></Link>
            <Link to ="/exercice-03"><button onClick={goToEx3}>Exercicio 03</button></Link>
            <Link to ="/exercice-02"><button onClick={goToEx2}>Exercicio 02</button></Link>
            <Link to ="/exercice-01"><button onClick={goToEx1}>Exercicio 01</button></Link>

        </div>
    </>
    

    
 )
}


export default Ex4
