
//stateless comoponente
const Bemvindo = (props) => {
  return(
    <div>
      <h4>Bem vindo(a) {props.nome}</h4>
      <small>Você tem {props.idade} anos</small>
    </div>
  )
}

// Criando um componente chamado app
export default function App() {
  return (
    <div>
      {/* //chamando um componente e passando as propriedades */}
      <Bemvindo nome="Diego Alencar" idade="18"/>
      
      <h2>Diego Jacober</h2>
    </div>
  )
}