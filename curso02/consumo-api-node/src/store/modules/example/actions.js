import * as types from '../types';

export function btnClickRequest() {
    return {
        type: types.BOTAO_CLICADO_REQUEST,
    }
}

export function btnClickSuccess() {
    return {
        type: types.BOTAO_CLICADO_SUCCESS,
    }
}


export function btnClickFailure() {
    return {
        type: types.BOTAO_CLICADO_FAILURE,
    }
}
