import React from "react";
import TabPanel from "./TabPanel";
import Titulos from "./Titulos";

const Curriculo = () => {
  return (
    <section className="curriculo secao__container">
      <Titulos
        paragrafo__introducao="Brevemente sobre mim..."
        titulo__secao="Saiba de algumas das minhas habilidades e meus conhecimentos"
        paragrafo__resumo="Depois de muitos cursos, muitas pesquisas, muitos estudos, desenvolvi
        algumas habilidades pessoais e profissionais, veja quais são."
      />
      <TabPanel />
    </section>
  );
};

export default Curriculo;
