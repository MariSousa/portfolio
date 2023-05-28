import React, { createContext } from "react";

import { getPosts } from "../src/Servicos/index";

export const DadosPosts = createContext();

const Contexto = ({ children }) => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.log("Erro ao buscar os posts:" + error);
      }
    }
    fetchPosts();
  }, []);

  return <DadosPosts.Provider value={posts}>{children}</DadosPosts.Provider>;
};

export default Contexto;
