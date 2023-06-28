const initialState = {
    botaoClicado: false,
}

export default function (state = initialState, action) {
   switch(action.type) {
        case 'BOTAO_CLICADO': {
            // Sempre retornar o state atual ou um novo state
            const newState = { ...state }
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }

        default: {
            return state;
        }
   };
};
