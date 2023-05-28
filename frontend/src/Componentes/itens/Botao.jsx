import React from "react";

import "../itens/botao.css";

const Botao = ({ texto, url, target, id }) => {
  return (
    <a href={url} target={target} className="botao__padrao" id={id}>
      {texto}
    </a>
  );
};

export default Botao;
