import React from "react";

import "../Componentes/css/preloader.css";

import Typewriter from "typewriter-effect";

const Preloader = () => {
  return (
    <div className="container__preloader">
      <div className="preloader__animacao">
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
        <div className="animacao__linha"></div>
      </div>
      <div className="preloader__escrita">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Mari de Sousa").pauseFor(2000).start();
          }}
        />
      </div>
    </div>
  );
};

export default Preloader;
