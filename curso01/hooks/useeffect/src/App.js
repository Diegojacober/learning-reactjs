import React, {useState, useEffect} from 'react';

function App() {

  //primeiro parametro -> nome da state. segundo parametro -> função de atualização do state
  const [tarefas, setTarefas] = useState([
])

  const [nome, Setnome] = useState('Diego')

  const [input, setInput] = useState('')

  // toda vez que essa state(tarefas) for alterada ele chama essa função
  //substituir o component didUptade
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  //substituir o component didMount

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
    
  }, [])

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
