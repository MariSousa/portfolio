import React from "react";

import "../css/tab__habilidades.css";

const Habilidades = () => {
  return (
    <div className="secao__habilidades">
      <div className="habilidades__grid">
        {/* esquerda */}
        <div className="habilidades__grid__item">
          {/* HTMl/CSS*/}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>HTML/CSS</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* javascript */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Javascript</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* react */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>React</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* figma */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Figma</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Adobe XD */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>AdobeXD</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* WordPress */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>WordPress</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Photoshop */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Photoshop</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
        </div>
        {/* direito */}
        <div className="habilidades__grid__item">
          {/* Liderança*/}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Liderança</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Trabalho em equipe */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Trabalho em equipe</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Autodidata */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Autodidata</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Comunicação */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Comunicação</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Confiança */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Confiança</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Pontualidade */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Pontualidade</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
          {/* Honestidade */}
          <div className="habilidade__item">
            <div className="habilidade__item__titulo">
              <h3>Honestidade</h3>
            </div>
            <div className="habilidade__item__borda"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
