import React from "react";

const Titulos = ({
  paragrafo__introducao,
  titulo__secao,
  paragrafo__resumo,
}) => {
  return (
    <div>
      <p className="paragrafo__introducao">{paragrafo__introducao}</p>
      <h2 className="titulo__secao">{titulo__secao}</h2>
      <p className="paragrafo__resumo">{paragrafo__resumo}</p>
    </div>
  );
};

export default Titulos;
