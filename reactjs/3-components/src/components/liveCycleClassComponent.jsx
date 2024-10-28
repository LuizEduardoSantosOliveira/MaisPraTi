import {Component} from "react"

class LifeCycleClassComponents extends component{
    constructor(props){
        super(props)
        this.state = {count: 0}
    }

    componentDidMount(){
        console.log("Component montado")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componente atualizado! Propriedade e estados anteriores")
    }

    componentWillUnmont(){
        console.log("Componente sera desmontado")
    }

    increment(){
        this.state({count: this.state.count = 1})
    }

    render(){
        return(
            <div>
                <p>Contagem: {this.state.count}</p>
                <button onClick={this.this.increment}>Incrementar</button>
            </div>
        )
    }
}

