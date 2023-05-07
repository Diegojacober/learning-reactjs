import { useEffect, useState } from 'react';
import { useParams, useNavigate, json } from 'react-router-dom'
import api from '../../services/api';
import './filme.css'
import { toast } from 'react-toastify';

function Filme(){
  const { id } = useParams();
  const navigation = useNavigate()
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);


  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix")

    let filmesSalvos = JSON.parse(minhaLista) || []

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if (!hasFilme) {

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        
        toast.success('Filme salvo com sucesso', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

    } else {
        toast.warn('Esse filme ja está adicionado em sua lista', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        return
    }
  }

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "b61329eeeafc2d005a464e4a33bddb30",
          language: "pt-BR",
        }
      })
      .then((response)=>{
        setFilme(response.data);
        setLoading(false);
      })
      .catch(()=>{
        navigation("/", {replace: true})
        return
      })
    }

    loadFilme();


    return () => {

    }
  }, [id, navigation])

  if(loading){
    return(
      <div className="loading">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }
  
  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avalição: {filme.vote_average.toFixed(2)} / 10</strong>

      <div className='area-buttons'>
        <button onClick={salvarFilme}>Salvar</button>
        <button><a href={`https://youtube.com/results?search_query=${filme.title}+trailer+dublado+portugues`} target='blank' rel='external'>Trailer</a></button>
      </div>
    </div>
  )
}

export default Filme;