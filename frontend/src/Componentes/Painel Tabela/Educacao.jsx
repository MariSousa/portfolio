import React from "react";

// mui icons
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

import "../css/tab__educacao.css";

const Educacao = () => {
  return (
    <div className="educacao">
      <div className="educacao__grid">
        {/* grid esquerdo */}
        <div className="educacao__grid__esquerda">
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
          {/* bloco de educacao */}
          <div className="bloco__educacao">
            {/* técnico em informatica*/}
            <div className="bloco__item__educacao">
              <div className="educacao__item">
                {/* data */}
                <div className="educacao__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>02/2013 - 11/2015</p>
                </div>
                {/* titulo */}
                <div className="educacao__item__titulo">
                  <h3>Técnico em Informática</h3>
                  <p>Colégio Realengo</p>
                </div>
                {/* descrição */}
                <div className="educacao__item__descricao">
                  <p>
                    Foi durante o técnico em informática que fui apresentada ao
                    universo do desenvolvimento web. Fiz um projeto de conclusão
                    de curso totalmente puro no html, css e php. Era um site
                    para uma empresa fitcícia que tivemos que criar. Meu grupo
                    recebeu a nota máxima no projeto.
                  </p>
                </div>
              </div>
            </div>
            {/* UX e UI Design*/}
            <div className="bloco__item__educacao">
              <div className="educacao__item">
                {/* data */}
                <div className="educacao__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>01/2021 - 03/2021</p>
                </div>
                {/* titulo */}
                <div className="educacao__item__titulo">
                  <h3>UX e UI Design</h3>
                  <p>TIM Tec</p>
                </div>
                {/* descrição */}
                <div className="educacao__item__descricao">
                  <p>
                    Aprendi conceitos básicos, mas importantes, sobre UX/UI
                    desing e como esses conceitos são usados no dia a dia de um
                    profissional. Foram conceitos importantes para eu ficar
                    alerta no desenvolvimento de um site, se todo a aplicação
                    está fornecendo uma boa experiência para o usuário.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* grid direito */}
        <div className="educacao__grid__direito">
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
          {/* bloco de educacao */}
          <div className="bloco__educacao">
            {/* Marketing de Conteúdo para Web*/}
            <div className="bloco__item__educacao">
              <div className="educacao__item">
                {/* data */}
                <div className="educacao__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>03/2020 - 05/2020</p>
                </div>
                {/* titulo */}
                <div className="educacao__item__titulo">
                  <h3>Marketing de Conteúdo para Web</h3>
                  <p>Rock University</p>
                </div>
                {/* descrição */}
                <div className="educacao__item__descricao">
                  <p>
                    Nesse curso eu aprendi técnicas de busca de palavras chaves
                    para criar uma publicação para a web, como um post de blog.
                    Também aprendi todo o processo de uma escrita, desde o
                    planejamento, pesquisa do assunto, passando pela elaboração
                    do conteúdo e depois a revisão.
                  </p>
                </div>
              </div>
            </div>
            {/* Javascript e React*/}
            <div className="bloco__item__educacao">
              <div className="educacao__item">
                {/* data */}
                <div className="educacao__item__data">
                  <CalendarMonthOutlinedIcon />
                  <p>02/2022 - Presente</p>
                </div>
                {/* titulo */}
                <div className="educacao__item__titulo">
                  <h3>Javascript e React</h3>
                  <p>Origamid e outros cursos</p>
                </div>
                {/* descrição */}
                <div className="educacao__item__descricao">
                  <p>
                    Nesses cursos tenho aprendido desde os conceitos básicos até
                    avançado. Atualmente estou estudando mais sobre React, mas
                    sempre volto e estudo um pouco JavaScript para relembrar
                    alguns conceitos importantes.
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

export default Educacao;
