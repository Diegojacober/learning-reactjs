//Sem classcomponent
// //stateless comoponente
// const Bemvindo = (props) => {
//   return(
//     <div>
//       <h4>Bem vindo(a) {props.nome}</h4>
//       <small>Você tem {props.idade} anos</small>
//     </div>
//   )
// }

// const Equipe = (props) => {
//   return(
//     <div>
//      <Sobre nome={props.nome} 
//      cargo={props.cargo}
//       idade={props.idade}/>
//       <Social github={props.github}/>
//       <hr/>
//     </div>
//   )
// }

// const Sobre = (props) => {
//   return(
//     <div>
//       <h2>Olá meu nome é {props.nome}</h2>
//       <small>Sou {props.cargo}</small>
//     </div>
//   )
// }

// const Social = (props) => {
//   return(
//     <div>
//       <ul>
//         <li><a href={props.github}>Github</a></li>
//       </ul>
//     </div>
//   )
// }

// // Criando um componente chamado app
// export default function App() {
//   return (
//     <div>
//       {/* //chamando um componente e passando as propriedades */}
//       {/* <Bemvindo nome="Diego Alencar" idade="18"/>

//       <h2>Diego Jacober</h2> */}


//       <h1>Conheça nossa equipe</h1>
//       <Equipe nome="Diego" cargo="Programador" idade="18" github="https://github.com/diegojacober"/>
//     </div>
//   )
// }


//Class component
import React, { Component } from "react";

class Equipe extends Component {
  render() {
    return (
      <>
        <h2>Olá meu nome é {this.props.nome}, sou {this.props.cargo}</h2>
        <Social github={this.props.github}/>
      </>
    )
  }
}

class Social extends Component {
  render() {
    return (
      <>
        <ul>
          <li><a href={this.props.github} target="_blank">Github</a></li>
        </ul>
      </>
    )
  }
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Diego" cargo="Programador" idade="18" github="https://github.com/diegojacober" />
    </div>
  )
}


export default App
