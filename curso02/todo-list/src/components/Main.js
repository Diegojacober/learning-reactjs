import React, { Component } from "react";
import './Main.css'

//Components statefull precisam do metodo render
export default class Main extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         novaTarefa: '',
    //     }

    //     this.handleInput = this.handleInput.bind(this)
    // }

    //Class fields
    state = {
        novaTarefa: '',
    }

    handleInput = (text) => {
        this.setState({
            novaTarefa: text
        })
    }

    render() {

        const { novaTarefa } = this.state

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <form action="#">
                    <input type="text" onChange={(e) => this.handleInput(e.target.value)} />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}
