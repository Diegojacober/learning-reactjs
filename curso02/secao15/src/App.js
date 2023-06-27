import React from "react";

import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import GlobalStyle from './styles/GlobalStyles'
import Header from "./components/Header";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Header/>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
