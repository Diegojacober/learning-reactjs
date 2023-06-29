import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';

const req = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000);
});

function* exampleRequest() {
    try{
        yield call(req);
        yield put(actions.btnClickSuccess());
    } catch {
        toast.error('Não foi possível se comunicar');
        yield put(actions.btnClickFailure());
    }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),]);
