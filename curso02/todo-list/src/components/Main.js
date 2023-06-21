import React, { Component } from "react";

import Form from "./Form";
import './Main.css'
import Tarefas from "./Tarefas";

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
        tarefas: [],
        index: -1,
    }

    // Quando o componente é montado chama essa função
    componentDidMount() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'))

        if (!tarefas) return

        this.setState({
            tarefas
        })
    }

    // A cada vez que o componente for atualizado essa função é chamada
    componentDidUpdate(prevProps, prevState) {
        //Props anteriores e States anteriores
        const { tarefas } = this.state

        if (tarefas === prevState.tarefas) return

        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }

    handleInput = (text) => {
        this.setState({
            novaTarefa: text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { tarefas, index } = this.state
        let { novaTarefa } = this.state
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1) return;

        if (index === -1) {
            this.setState({
                tarefas: [...tarefas, novaTarefa],
                novaTarefa: ''
            })
        } else {
            const novasTarefas = [...tarefas]
            novasTarefas[index] = novaTarefa

            this.setState({
                tarefas: [...novasTarefas],
                index: -1
            })
        }
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state
        const novasTarefas = [...tarefas]
        novasTarefas.splice(index, 1)

        this.setState({
            tarefas: [...novasTarefas]
        })
    }

    handleEdit = (e, index) => {
        const { tarefas, novaTarefa } = this.state
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    render() {

        const { novaTarefa, tarefas } = this.state

        return (
            <div className="main">
                <h1>Lista de Tarefas</h1>

                <Form handleSubmit={this.handleSubmit} handleInput={this.handleInput} novaTarefa={this.state.novaTarefa} />

                <Tarefas tarefas={tarefas} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />

            </div>
        )
    }
}
