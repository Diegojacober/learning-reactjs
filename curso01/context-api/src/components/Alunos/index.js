import Nome from "../Nome";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Alunos({nome, mudaNome}) {

    const { alunos,setAlunos,qtdAlunos } = useContext(UserContext)

    return (
      <div>
        <small>A escola possui {qtdAlunos} alunos</small><br/>
        <input value={alunos} onChange={(e) => setAlunos(e.target.value)}/>
        <h2>Component alunos</h2>
        <Nome/>
      </div>
    );
  }
  
  export default Alunos;