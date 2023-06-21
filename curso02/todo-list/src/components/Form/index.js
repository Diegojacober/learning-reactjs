import React from "react";
import propTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'
import './form.css'

export default function Form({ handleSubmit, handleInput, novaTarefa }) {
    return (
        <form action="#" className="form" onSubmit={handleSubmit}>
            <input type="text" value={novaTarefa} onChange={(e) => handleInput(e.target.value)} />

            <button type="submit"><FaPlus size={14} /></button>
        </form>
    )
}

// Form.defaultProps = {
//     novaTarefa: ''
// }

Form.propTypes = {
    handleInput: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    // novaTarefa: propTypes.string
    novaTarefa: propTypes.string.isRequired
}
