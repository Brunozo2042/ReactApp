import React, { useState } from 'react'

// export default function Counter(props){

//     const [count, setCount] = useState(props.count)

//     function add(){
//         setCount(count + 1)
//     }
    
//     function sub(){
//         setCount(count - 1)
//     }

//     return(
//         <div>
//             <h1>Counter: {count}</h1>
//             <button onClick={add}>add</button>
//             <button onClick={sub}>sub</button>
//         </div>
//     )

// }

export default class Counter extends React.Component{

    // método inicializador do componente
    constructor(props){
        super(props);

        this.state = {count : this.props.count}
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
    }

    add(){
        // this.setState({count: this.state.count + 1})
        this.setState((state)=>{
            return(
                {count: state.count + 1}
            )
        }, ()=>{
            localStorage.setItem("state",JSON.stringify(this.state))
        })
    }

    sub(){
        // this.setState({count: this.state.count - 1})
        this.setState((state)=>{
            return(
                {count: state.count - 1}
            )
        })
    }

    // método chamado qnd o componente é apresentado na tela
    componentDidMount(){}

    // método chamado qnd o componente é removido da tela
    componentWillUnmount(){}

    shouldComponentUpdate(){
        return true
    }

    // método chamado toda vez que ocorre alguma modificação nas propriedades ou no estado do componente
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.sub}>Sub</button>
            </div>
        )
    }

}