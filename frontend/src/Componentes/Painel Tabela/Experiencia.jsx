import React from "react";

// mui icons
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import "../css/tab__experiencia.css";

const Experiencia = () => {
  return (
    <div className="experiencia">
      <div className="experiencia__grid">
        {/* grid esquerdo */}
        <div className="experiencia__grid__esquerda">
          {/* linha */}
          <div className="bloco__linha linha__esquerda">
            {/* borda 1 */}
            <div className="formato__borda"></div>
            {/* ponto um */}
            <div className="ponto__um">
              <div className="formato__bolinha"></div>
              <div className="efeito__ponto"></div>{" "}
            </div>
            {/* ponto dois */}
            <div className="ponto__dois">
              <div className="formato__bolinha"></div>
              <div className="efeito__ponto"></div>{" "}
            </div>
          </div>
          {/* bloco de experiencias */}
          <div className="bloco__experiencias">
            {/* item - robotica*/}
            <div className="bloco__item__experiencia">
              <div className="experiencia__item">
                {/* data */}
                <div className="experiencia__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>02/2014 - 11/2015</p>
                </div>
                {/* titulo */}
                <div className="experiencia__item__titulo">
                  <h3>Estágio Robótica</h3>
                  <p>Colégio Realengo</p>
                </div>
                {/* descrição */}
                <div className="experiencia__item__descricao">
                  <p>
                    Durante meu estágio em robótica entre fevereiro de 2014 e
                    novembro de 2015, eu tive a oportunidade de trabalhar com
                    projetos desafiadores e empolgantes utilizando a placa
                    arduino e a linguagem de programação C++. Através do
                    desenvolvimento desses projetos, fui capaz de aprimorar
                    minhas habilidades em programação e desenvolver uma
                    compreensão mais profunda do funcionamento dos robôs.
                  </p>
                </div>
              </div>
            </div>
            {/* item - segurança eletronica*/}
            <div className="bloco__item__experiencia">
              <div className="experiencia__item">
                {/* data */}
                <div className="experiencia__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>11/2019 - 01/2020</p>
                </div>
                {/* titulo */}
                <div className="experiencia__item__titulo">
                  <h3>Segurança Eletrônica</h3>
                  <p>NewLine</p>
                </div>
                {/* descrição */}
                <div className="experiencia__item__descricao">
                  <p>
                    Durante o período em que trabalhei na área de Segurança
                    Eletrônica fui responsável por diversas atividades,
                    incluindo a instalação de câmeras de segurança, centrais de
                    alarme e sua programação. Como eu havia aprendido sozinha
                    sobre o assunto, tive que ser autodidata e buscar
                    conhecimento em diversos materiais, mas isso me permitiu
                    adquirir um grande aprendizado prático e teórico na área.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* grid direito */}
        <div className="experiencia__grid__direito">
          {/* linha */}
          <div className="bloco__linha linha__direito">
            {/* borda 1 */}
            <div className="formato__borda"></div>
            {/* ponto um */}
            <div className="ponto__um">
              <div className="formato__bolinha"></div>
              <div className="efeito__ponto"></div>{" "}
            </div>
            {/* ponto dois */}
            <div className="ponto__dois">
              <div className="formato__bolinha"></div>
              <div className="efeito__ponto"></div>{" "}
            </div>
          </div>
          {/* bloco de experiencias */}
          <div className="bloco__experiencias">
            {/* item - manutenção de computadores*/}
            <div className="bloco__item__experiencia">
              <div className="experiencia__item">
                {/* data */}
                <div className="experiencia__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>01/2018 - 10/2019</p>
                </div>
                {/* titulo */}
                <div className="experiencia__item__titulo">
                  <h3>Manutenção de Computadores</h3>
                  <p>Autônomo</p>
                </div>
                {/* descrição */}
                <div className="experiencia__item__descricao">
                  <p>
                    Conserto de computadores e notebooks. Trabalhava de forma
                    autônoma, buscando meus próprios clientes. Meu foco era mais
                    parte de software, como formatação e resolver problemas de
                    lentidão. Também fazia limpeza de sistema e instalação de
                    alguns softwares.
                  </p>
                </div>
              </div>
            </div>
            {/* item - desenvolvedora web*/}
            <div className="bloco__item__experiencia">
              <div className="experiencia__item">
                {/* data */}
                <div className="experiencia__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>02/2020 - Presente</p>
                </div>
                {/* titulo */}
                <div className="experiencia__item__titulo">
                  <h3>Desenvolvimento web</h3>
                  <p>Freelancer / PJ / CLT</p>
                </div>
                {/* descrição */}
                <div className="experiencia__item__descricao">
                  <p>
                    Como Frontend Developer Freelancer desde fevereiro de 2020,
                    tenho trabalhado em projetos de criação de páginas web para
                    agências de marketing e desenvolvimento web. Nesses
                    projetos, utilizo tecnologias como HTML, CSS, Wordpress,
                    Javascript e Webflow para desenvolver soluções criativas e
                    profissionais para meus clientes. Durante esse período,
                    aprendi muito sobre marketing digital para divulgar meus
                    serviços, o que inclui aprender sobre campanhas pagas no
                    Google Ads e como atrair mais clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
