import storage from 'redux-persist/lib/storage';
// Vai salvar os dados no localstorage do navegador
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line import/no-anonymous-default-export
export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'CONSUMO-API',
            storage,
            whitelist: ['auth'],
        },reducers);

    return persistedReducers;
};