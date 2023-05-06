import { Link } from "react-router-dom"
import './style.css'

function Header() {
    return(
        <header>

            <img alt="Logo do site" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUTyNDRuNrdiXkrXG2InGIjxvYmatq-DQj53KjK3LJUO4Hoq4b-9lWuHg2830_5hKcneA&usqp=CAU" className="logo--image"/>

            <ul className="options">
                <li><Link className="option" to="/">Home</Link></li>
                <li><Link className="option" to="/sobre">Sobre</Link></li>
                <li><Link className="option" to="/contato">Contato</Link></li>
            </ul>
        </header>
    )
}

export default Header