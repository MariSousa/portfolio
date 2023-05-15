import React from "react";

import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

import "./css/banner.css";

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
    <div className="container__banner">
      <div className="banner__conteudo">
        <p>Olá, eu sou Mariana de Sousa</p>
        <h1>Desenvolvedora Front-End Júnior</h1>
        <p>
          Sou formada em técnico em informática, trabalho há 3 anos com
          desenvolvimento de site, e quero ser especialista em CSS e React.
        </p>
        <p>Conheça mais sobre mim, ou entre em contato</p>
      </div>
      <div className="banner__lottie">
        <lottie-player
          ref={playerRef}
          id="fourteenthLottie"
          // controls
          mode="normal"
          src="https://assets9.lottiefiles.com/packages/lf20_qhrndegx.json"
          style={{ width: "320px" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default Banner;
