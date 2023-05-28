import React from "react";
import Banner from "./Banner";
import Curriculo from "./Curriculo";
import Projetos from "./Projetos";

const Home = () => {
  return (
    <section className="container section__home" role="main">
      <Banner />
      <Curriculo />
      <Projetos />
    </section>
  );
};

export default Home;
