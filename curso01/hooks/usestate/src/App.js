import React, {useState} from 'react';

function App() {

  //primeiro parametro -> nome da state. segundo parametro -> função de atualização do state
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar react hooks'
  ])

  const [nome, Setnome] = useState('Diego')

  const [input, setInput] = useState('')

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hooks</h1>
      {nome}
      <div>

        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>

      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
