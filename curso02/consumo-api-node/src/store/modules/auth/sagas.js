import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import history from '../../../services/history';
import { get } from 'lodash';


function* loginRequest({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(axios.post, '/auth', { email, password });
        yield put(actions.loginSuccess({ ...response.data }));

        toast.success('Seja bem vindo novamente');

        axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        payload.history.push(payload.prevPath);
        payload.history.go(0);
    } catch (e) {
        toast.error('Usuário ou senha inválidos');
        yield put(actions.loginFailure());
    }
}

function* registerRequest({ payload }) {
   const { nome, email, password, id } = payload;
   
    try {
        if (id) {
            yield call(axios.put, `/user/${id}` , {
                email,
                nome,
                password: password || undefined
            });

            toast.success('Conta alterada com sucesso!');
            yield put(actions.registerSuccess({ nome, email, password }))
        } else {
            yield call(axios.post, `/users` , {
                email,
                nome,
                password
            });

            toast.success('Conta criada com sucesso!');
            yield put(actions.registerSuccess({ nome, email, password }))
        }
    
    } catch(e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);

        if (errors.lenght > 0) {
            errors.map(err => toast.error(err));
        } else {
            toast.error('Erro desconhecido');
        }

        yield put(actions.registerFailure());

        if (status === 401) {
            
        }
    }

   console.log(payload); 
}

function persistRehydrate({ payload }) {
    const token = get(payload, 'auth.token', '');

    if (!token) {
        axios.defaults.headers.Authorization = `Bearer ${token}`;

    }
}

export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.REGISTER_REQUEST, registerRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
