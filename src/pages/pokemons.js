import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const Pokemons = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
      allRestApiApiV1Dogs {
        edges {
          node {
            name
            origin
            image
          }
        }
      }
    }
  `);

  return (
      <Layout>
        <h1>Nosso Time - freetestapi </h1>
        <hr />
        <div>
          <table width="100%">
            <tr>
              <th>Name</th>
              <th>Origin</th>
              <th>Size</th>
              <th>Image</th>
            </tr>
  
            {data.allRestApiApiV1Dogs.edges.map(edge => {
              return (
                <tr>
                  <td >{edge.node.name}</td>
                  <td>{edge.node.origin}</td>
                  <td>{edge.node.size}</td>
                  <td>{edge.node.image}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </Layout>
    )

};


export default  Pokemons
export const Head = () => <title>Os Pokemons</title>