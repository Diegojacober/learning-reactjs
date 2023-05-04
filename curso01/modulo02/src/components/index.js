import React,{ Component } from "react";

class Membro extends Component{

    constructor(props){
        super(props)
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this)
        this.sair = this.sair.bind(this)
    }

    entrar(){
        let senha = String(prompt('Qual a senha? '))
        if (senha == '1234'){
            this.setState({nome: 'Diego'})
        } else {
            alert('Senha incorreta')
        }
    }

    sair(){
        this.setState({nome: 'Visitante'})
    }

    render(){
        return(
            <>
                <h6>Bem vindo(a) {this.state.nome}</h6>

                <button onClick={this.entrar}>Entrar como Diego</button>
                <button onClick={() => {this.setState({nome: 'Visitante'})}}>Sair</button>
            </>
        )
    }
}

export default Membro