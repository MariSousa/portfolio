import React from "react";

import { getPostDetails } from "../Servicos";
import { useParams } from "react-router-dom";
import CarregandoPost from "./CarregandoPost";

import FomularioContato from "./FomularioContato";

//css
import styles from "./css/projetodetalhes.module.css";

const ProjetoDetalhes = () => {
  const params = useParams();
  const [posts, setPosts] = React.useState([]);

  const getContentFragment = (index, text, obj, type) => {
    console.log(obj, type);
    let modifiedText = text;
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }

      if (obj.href) {
        modifiedText = (
          <a key={index} href={obj.href} target="_blank">
            {obj.href}
          </a>
        );
      }

      if (obj.list) {
        modifiedText = (
          <ul key={index}>
            <li>{text}</li>
          </ul>
        );
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );

      default:
        return modifiedText;
    }
  };

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPostDetails(params.slug);
        setPosts(fetchedPosts);
      } catch (error) {
        console.log("Erro ao buscar os posts:" + error);
      }
    }
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <section className={`${styles.containerPostDetalhe} container`}>
        {posts.imagemPrincipal && (
          <div
            className={styles.container__imagemPrincipal}
            style={{ backgroundImage: `url('${posts.imagemPrincipal.url}')` }}
          ></div>
        )}

        <div className={styles.container__conteudo}>
          <h2>{posts.titulo}</h2>
          {posts.conteudo &&
            posts.conteudo.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );
              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
        </div>
      </section>
      <FomularioContato />
    </>
  );
};

export default ProjetoDetalhes;
