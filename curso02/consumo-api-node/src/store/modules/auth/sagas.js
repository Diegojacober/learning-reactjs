import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import { toast } from 'react-toastify';


function* loginRequest({ payload }) {
    const { email, password } = payload;
    
    console.log(email, password);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest),]);
