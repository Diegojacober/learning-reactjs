import React, { Component } from "react";
import './Main.css'

import { FaPlus } from 'react-icons/fa'

import { FaEdit, FaWindowClose } from 'react-icons/fa'

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
        
        if(tarefas.indexOf(novaTarefa) !== -1) return;
        
        if(index === -1) {
            this.setState({
                tarefas: [...tarefas, novaTarefa],
                novaTarefa: ''
            })
        } else{
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

                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <input type="text" value={novaTarefa} onChange={(e) => this.handleInput(e.target.value)} />

                    <button type="submit"><FaPlus size={14}/></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>{tarefa}
                            <span>
                                <FaEdit onClick={e => this.handleEdit(e, index)} className="edit"/>
                                <FaWindowClose onClick={e => this.handleDelete(e, index)} className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}