import { useState, useEffect } from "react";

function Timer(){
    const[seconds, setSeconds] = useState(0);
    const[startTimer, setStartTimer] = useState(false)

    useEffect(() => {
       const interval = setInterval(() =>{
            setSeconds(prevSeconds =>prevSeconds + 1)
        },1000)
    
    }, [])

    return(
        <div>
            <p>timer: {seconds}</p>
        </div>

    )
}

export default Timer