import React from 'react';

export default class BotaoIncClasse extends React.Component{

    constructor() {
        super();
        this.state = { contador: 0 };
    }

    incrementar() {
        console.log("Incrementando valor...")
        this.setState({contador: this.state.contador+1});
        console.log(this.state.contador);
    }

    render() {
        return (
            <>
                <p>Contador (classe): {this.state.contador}</p>
                <button onClick={()=> this.incrementar()}>
                    Incrementar
                </button>
            </>
        );
    }
}