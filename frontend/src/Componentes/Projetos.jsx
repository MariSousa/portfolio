import React from "react";
import Titulos from "./Titulos";
import ProjetoDisplay from "./ProjetoDisplay";

const Projetos = () => {
  return (
    <section className="projetos secao__container">
      <Titulos
        paragrafo__introducao="Projetos prontos..."
        titulo__secao="Demo e documentação de alguns projetos"
        paragrafo__resumo="Já finalizei alguns projetos, tanto profissionalmente como de forma fictícia. Você pode conferir tanto o projeto ao vivo, seu repositório e uma explicação detalhada sobre o processo de desenvolvimento."
      />
      <ProjetoDisplay />
    </section>
  );
};

export default Projetos;
