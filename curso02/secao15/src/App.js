import React from "react";

import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";

import history from './services/history'
import GlobalStyle from './styles/GlobalStyles'
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Header/>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
