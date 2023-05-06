import { useParams } from "react-router-dom"

function Produto() {

    const { id } = useParams()
    
    return(
        <>
            <h2>O produto digitado é o {id}</h2>
        </>
    )
}

export default Produto