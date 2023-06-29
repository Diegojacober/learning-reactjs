import storage from 'redux-persist/lib/storage';
// Vai salvar os dados no localstorage do navegador
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'NOME-DA-APLICACAO',
            storage,
            // módulos que deseja salvar
            whitelist: ['example']
        },reducers);

    return persistedReducers;
};