import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_GRAPHQL_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            autor {
              biografia
              nome
              id
              foto {
                url
              }
            }
            createdAt
            slug
            titulo
            resumo
            imagemPrincipal {
              url
            }
            categorias {
              nome
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        autor {
          biografia
          nome
          id
          foto {
            url
          }
        }
        createdAt
        slug
        titulo
        resumo
        imagemPrincipal {
          url
        }
        categorias {
          nome
          slug
        }
        conteudo {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
