import React, {useEffect, useState} from 'react'; 
import './style.css'


//Carregar informações quando o projeto for aberto

function App() {

  const [nutri, setNutri] = useState([])

  // assim que carregar a tela, porque  está vazui
  useEffect(() => {
    async function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      
      let results = await fetch(url).then((r) => r.json())
      console.log(results)
      setNutri(results)
    }

    loadApi()
  }, [])

  return (
    <main>
      <header>
        <strong>React Nutri</strong>
      </header>

     <div className='posts'>
     {nutri.map((item) => {
        return(
          <article key={item.id} className='post' id={item.id}>
            <h5 className='titulo'>{item.titulo}</h5>
           
            <picture>
              <img src={item.capa} alt={item.titulo} className='capa'/>
            </picture>
            <caption className='subtitulo'>{item.subtitulo}</caption>
            
            <a className='btn' href={`#${item.id}`}>Acessar</a>
          </article>
        )
      })}
     </div>
    </main>
      
  );
}

export default App;
