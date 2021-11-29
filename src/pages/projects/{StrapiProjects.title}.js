import React from "react"
import { graphql } from "gatsby"

const ProjectTemplate = props => {
  console.log(props)
  return (
    <>
      <h1>Project page</h1>
    </>
  )
}

export const query = graphql`
  query getSingleProject {
    strapiProjects {
      description1
      description2
      description3
      image1 {
        localFile {
          publicURL
        }
      }
      image2 {
        localFile {
          publicURL
        }
      }
      image3 {
        localFile {
          publicURL
        }
      }
      title
    }
  }
`

export default ProjectTemplate
