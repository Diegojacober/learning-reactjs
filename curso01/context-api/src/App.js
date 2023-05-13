import { useState } from "react";
import Alunos from './components/Alunos';
import './App.css';

function App() {

  const [nomeAluno, setNomeAluno] = useState('Roberto Justus')

  return (
    <div className="">
      <h1>Escola</h1>
      <hr/>
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno}/>

    </div>
  );
}

export default App;
