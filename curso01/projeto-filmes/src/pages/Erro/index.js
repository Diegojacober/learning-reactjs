import { Link } from "react-router-dom"
import './404.css'

function Erro() {
    return(
        <div className="erro">
        
            <h1>404</h1>
            <h3>Página não encontrada</h3>
            <Link to="/"> Veja todos os filmes</Link>

        </div>
    )
}

export default Erro