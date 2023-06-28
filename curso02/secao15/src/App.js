import React from "react";

import { Router } from "react-router-dom";
import RoutesApp from "./routes";

import history from './services/history'
import GlobalStyle from './styles/GlobalStyles'
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Header/>
      <RoutesApp />
    </Router>
    </Provider>
  );
}

export default App;
