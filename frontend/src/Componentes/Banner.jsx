import React from "react";

import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

import "./css/banner.css";
import Botao from "./itens/Botao";

const Banner = () => {
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    playerRef.current.addEventListener("load", function (event) {
      create({
        player: "#fourteenthLottie",
        mode: "cursor",
        actions: [
          {
            type: "pauseHold",
          },
        ],
      });
    });
  }, []);

  return (
    <section className="container__banner" id="conteudoprincipal">
      <div className="banner__conteudo">
        <p className="conteudo__apresentacao">Olá, eu sou Mariana de Sousa</p>
        <h1 className="conteudo__titulo">Desenvolvedora Front-End Júnior</h1>
        <p className="conteudo__resumo">
          Sou formada em técnico em informática, trabalho há 3 anos com
          desenvolvimento de site e quero ser especialista em React e
          acessibilidade web.
        </p>
        <div className="chamada__acao">
          <p className="conteudo__chamada">
            Conheça mais sobre mim, ou entre em contato
          </p>
          <Botao
            texto="Me mande uma mensagem"
            url="https://api.whatsapp.com/send?phone=5521976276176&text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20%7Bdigite%20seu%20nome%7D.%20Estou%20entrando%20em%20contato%20por%20meio%20do%20seu%20portf%C3%B3lio.%20Gostaria%20de%20%7Bdigite%20sua%20mensagem%7D."
            target="_blank"
          />
        </div>
      </div>
      <div className="banner__lottie">
        <lottie-player
          ref={playerRef}
          id="fourteenthLottie"
          // controls
          mode="normal"
          src="https://assets2.lottiefiles.com/packages/lf20_pjbrsyr7.json"
          style={{ width: "320px" }}
          className="lottie__animacao"
        ></lottie-player>
      </div>
    </section>
  );
};

export default Banner;
