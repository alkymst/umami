import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"
import Container from "../components/container"

const AllRecipes = ({ data }) => (
  <Layout>
    <Container>
      <h1>Recipes</h1>
      <ul>
        {data.allNodeRecipe.edges.map(({ node }) => (
          <li key={node.path.alias}>
            <Link to={node.path.alias}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export default AllRecipes

export const query = graphql`
  query {
    allNodeRecipe(limit: 1000) {
      edges {
        node {
          title
          path {
            alias
          }
        }
      }
    }
  }
`
