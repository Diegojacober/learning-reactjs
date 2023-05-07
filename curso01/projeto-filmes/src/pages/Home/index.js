import { useEffect, useState } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"
import './home.css'

// movie/now_playing?api_key=b61329eeeafc2d005a464e4a33bddb30

function Home() {

    const [filmes, setFilmes] = useState([])

    // roda quando a aplicação inicia
    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "b61329eeeafc2d005a464e4a33bddb30",
                    language: "pt-BR",
                    page: 1
                }
            })

            //pega os 10 primeiros filmes
            setFilmes(response.data.results.slice(0,10))
        }

        loadFilmes()
    }, [])

    return(
        <div className="container">
            <div className="filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home