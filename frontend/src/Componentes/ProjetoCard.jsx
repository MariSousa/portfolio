import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

//mui
import VisibilityIcon from "@mui/icons-material/Visibility";

//contexto
import { DadosPosts } from "../Contexto";

//css
import "./css/projeto__card.css";

export function ProjetoCard() {
  const posts = useContext(DadosPosts);
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <div className="projeto__card__grid" key={post.node.titulo}>
          {/* item 1 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* item 5 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* item 6 */}
          <div className="projeto__card__item">
            <div className="bloco__conteudo">
              <div className="bloco__conteudo___img">
                <Link
                  to={`/post/${post.node.slug}`}
                  className="bloco__conteudo__img_link"
                >
                  <img
                    src={post.node.imagemPrincipal.url}
                    alt=""
                    className="item__imagem"
                  />
                </Link>
              </div>
              <div className="bloco__conteudo__texto">
                <div className="conteudo__texto__titulo">
                  <h3>{post.node.titulo}</h3>
                  <div>
                    {post.node.categorias.map((categoria, index) => (
                      <p key={index}>{categoria.nome}</p>
                    ))}
                  </div>
                </div>
                <div className="conteudo__texto__resumo">
                  <p>{post.node.resumo}</p>
                </div>
                <div className="conteudo__texto__botao">
                  <Link
                    to={`/post/${post.node.slug}`}
                    className="conteudo__texto__botao__label"
                  >
                    <p>Saiba mais</p>
                    <div>
                      <VisibilityIcon className="conteudo__texto__botao__icone" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjetoCard;
