import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {
    const { alunos, setAlunos } = useContext(UserContext)
    
    return (
      <div>
        <span style={{color: '#F00'}}>Bem vindo: {alunos}</span>
        <br/>
        <button onClick={() => setAlunos('Diego Alencar')}>Trocar nome</button>
      </div>
    );
  }
  
  export default Nome;