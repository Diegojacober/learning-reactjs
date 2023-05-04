import { Component } from "react";
import Membro from "./components";
import Post from "./components/Post";

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
      status: false,
      feed: [
        {id: 1, username: "Diego", curtidas:10, comentarios:2},
        {id: 2, username: "Ângelo", curtidas:5, comentarios:4},
        {id: 2, username: "Cadu", curtidas:0, comentarios:4}
      ],
      email: '',
      password: '',
      sexo: ''
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeSexo = this.changeSexo.bind(this)
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
  // render() {
  //   return(
  //     <>

  //     {/* {this.state.status == 1 &&
  //     <h1>Bem vindo ao sistema</h1>
  //     }

  //     <div>
  //       <p>Curso de react</p>
  //     </div> */}
      
  //     {this.state.status ? 
  //       <div>
  //         <h2>Bem vindo ao sistema</h2>
  //         <button onClick={this.sair}>Sair do sistema</button>
  //       </div>  :
  //       <div>
  //       <h6>Faça login para continuar</h6>
  //       <button onClick={this.entrar}>Entrar no sistema</button>
  //       </div>
  //   }

  //   </>
  //   )
  // }

  //trabalhando com listas
  // render() {
  //   return(
  //     <div>

  //   {this.state.feed.map((item) => {
  //           return(
  //             <Post username={item.username} 
  //             id={item.id}
  //             comentarios={item.comentarios} 
  //             curtidas={item.curtidas}/>
  //           )})
  //         }

  //   </div>
  //   )
  // }

  changeEmail(e) {
    let valorDigitado = e.target.value
    this.setState({email: valorDigitado})
  }

  changeSexo(e) {
    this.setState({sexo: e.target.value})
  }

  //formulário
  render() {
    return(
      <>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" name="email" value={this.state.email}
          onChange={this.changeEmail}/>
        <br/>
        <label for="password">Password:</label>
        <input type="password" name="password" value={this.state.password}
        onChange={(e) => {this.setState({password: e.target.value})}}/>
        <br/>
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.changeSexo}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      <div>
        <h3>{this.state.email}</h3>
        <h3>{this.state.password}</h3>
        <h3>{this.state.sexo}</h3>
      </div>
      </>

      
    )
  }
}

export default App;
