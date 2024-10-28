import { useState, useEffect } from "react";

function liveCycleClassComponentFunciton(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Componente Montado")
        return() =>{ console.log("componente sera desmontado")}
    })
    useEffect(() => {
        console.log("componente atualizado")
    })

    const increment = () => [
        setCount(count + 1)
    ]

   
        return(
            <div>
            <p>Contagem: {this.state.count}</p>
            <button onClick={this.incrementCount}>Incrementar</button>
            </div>
        )
    
}

export default liveCycleClassComponentFunction