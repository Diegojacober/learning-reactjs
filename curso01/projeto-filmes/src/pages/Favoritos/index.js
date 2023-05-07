import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const allMovies = localStorage.getItem("@primeflix")
        
        setFilmes(JSON.parse(allMovies) || [])
    },[])

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter( (filme) => {
            return (filme.id !== id)
        })   

        setFilmes(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus filmes</h1>

            {filmes.length == 0 && <span>Você ainda não possui nenhum filme salvo!</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Favoritos