import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Projeto 2 Aula 3 - PokeAPI</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <div>
      <button type="button" class="btn btn-dark">💬 Estamos online! Deixe uma mensagem</button>
        <p> lorem ipsum 2 </p>
      </div>
    </Layout>
  )
}

export default IndexPage
export const Head = () => <title>Home | PokeAPI - Aula 3</title>