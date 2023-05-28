import React from "react";

import "../css/tab__sobremim.css";

import logo from "../../assets/logo.png";

const SobreMim = () => {
  return (
    <div className="sobre__mim secao__tabpanel">
      <div className="sobre__mim__conteudo">
        <h3>Desenvolvedora front-end júnior</h3>
        <p>
          Olá, meu nome é <strong>Mariana de Sousa</strong> . Eu sou formada em
          técnico em informática, e trabalho com desenvolvimento web. Atualmente
          me foco é projetos feito em React. Tenho passado boa parte do meu
          tempo adquirindo conhecimentos por estudar, fazer cursos e praticar
          muito.{" "}
        </p>
        <p>
          Tenho um objetivo na minha carreira: me tornar especialista em React e
          acessibilidade web. E o objetivo principal da minha vida é poder ter
          flexibilidade no trabalho para continuar fazendo parte dos serviços
          voluntários que participo de forma integral.
        </p>
        <div className="sobre__mim__bloco">
          {/* nome */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>Nome</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>Mariana de Sousa</p>
            </div>
          </div>
          {/* telefone */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>WhatsApp</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>(21) 9.7627-6176</p>
            </div>
          </div>
          {/* email */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>E-mail</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>mari.sousa.136@gmail.com</p>
            </div>
          </div>
          {/* experiencia */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>Experiência</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>3 anos</p>
            </div>
          </div>
          {/* forma de trabalaho */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>Trabalho</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>Freelancer(PJ) / CLT</p>
            </div>
          </div>
          {/* linguas */}
          <div className="sobre__mim__item">
            <div className="sobre__mim__info__titulo">
              <p>Línguas</p>
            </div>
            <div className="sobre__mim__divisor">
              <p>:</p>
            </div>
            <div className="sobre__mim__info__texto">
              <p>Inglês(Int) / Francês(Bas)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sobre__mim__imagem">
        <img
          src={logo}
          alt="Logotipo com as letras M S grandes de cor branca sob um fundo verde escuro."
        />
      </div>
    </div>
  );
};

export default SobreMim;
