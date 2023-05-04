import { Component } from "react";
import Membro from "./components";

//Ciclo de vida dos componentes
// class App extends Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       hora: '00:00:00'
//     }

   
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({hora: new Date().toLocaleTimeString()})
//     }, 1000)
//   }

//   componentDidUpdate() {
//     console.log('Atualizou')
//   }


//   render() {
//     return(
//       <>
//        <h1>Olá Diego {this.state.hora}</h1>
//       </>  
//     )
//   }
// }

//Eventos
class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      status: false
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({status: true})
  }

  sair() {
    this.setState({status: false})
  }

  // render() {
  //   return(
  //     <div>
  //      <Membro nome="Visitante"/>
  //     </div>  
  //   )
  // }

  //renderização condicional
  render() {
    return(
      <>

      {/* {this.state.status == 1 &&
      <h1>Bem vindo ao sistema</h1>
      }

      <div>
        <p>Curso de react</p>
      </div> */}
      
      {this.state.status ? 
        <div>
          <h2>Bem vindo ao sistema</h2>
          <button onClick={this.sair}>Sair do sistema</button>
        </div>  :
        <div>
        <h6>Faça login para continuar</h6>
        <button onClick={this.entrar}>Entrar no sistema</button>
        </div>
    }

    </>
    )
  }
}

export default App;
