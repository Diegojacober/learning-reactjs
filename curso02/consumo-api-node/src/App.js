import React from "react";

import { Router } from "react-router-dom";
import RoutesApp from "./routes";

import history from './services/history'
import GlobalStyle from './styles/GlobalStyles'
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <RoutesApp />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
