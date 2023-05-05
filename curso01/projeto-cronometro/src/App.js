import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numero: 0
        }
        this.timer = null
        this.start = this.start.bind(this)
        this.clear = this.clear.bind(this)
        this.stop = this.stop.bind(this)
    }

    start() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let state = this.state
            state.numero += 0.1
            this.setState(state)
        },100)
    }

    stop() {
        clearInterval(this.timer)
    }

    clear() {
        clearInterval(this.timer)
        this.timer = null
        this.setState({numero: 0})
    }

    render() {
        return (
            <div className='container'>
                <img className='img' src={require('./assets/cronometro.png')} alt='Imagem de um cronômetro'></img>
                <a className='timer'>{this.state.numero.toFixed(1)}</a>

                <div className='buttons'>
                    <a className='btn green' onClick={this.start}>START</a>
                    <a className='btn red' onClick={this.stop}>STOP</a>
                    <a className='btn gray' onClick={this.clear}>CLEAR</a>
                </div>
            </div>
        )
    }
}

export default App