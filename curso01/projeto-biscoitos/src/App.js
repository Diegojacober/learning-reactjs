import React, { Component } from 'react'
import './index.css'
import './estilo.css'


class App extends Component{

  constructor(props) {
      super(props)
      this.state = {}
      this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.']

      this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito() {
    let state = this.state

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

    state.textoFrase = '" '+this.frases[numeroAleatorio] + ' "'
    this.setState(state)
  }

  render() {
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className='img' alt='Imagem de um biscoito da sorte'/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    )
  }

}

class Botao extends Component{
  render() {
    return(
      <>
       <button className='btn' onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </>
    )
  }
}

export default App;
