import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Cabecalho from "./Componentes/Cabecalho";
import Home from "./Componentes/Home";
import Preloader from "./Componentes/Preloader";

import Contexto from "./Contexto";

function App() {
  const [carregando, setCarregando] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 4000);
  }, []);

  if (carregando) {
    return <Preloader />;
  }

  return (
    <>
      <BrowserRouter>
        <Contexto>
          <Cabecalho />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Contexto>
      </BrowserRouter>
    </>
  );
}

export default App;
