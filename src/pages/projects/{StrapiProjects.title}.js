import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    description1,
    description2,
    description3,
    image1,
    image2,
    image3,
  } = data.strapiProjects
  const readyImage1 = getImage(image1.localFile.childImageSharp.gatsbyImageData)
  const readyImage2 = getImage(image2.localFile.childImageSharp.gatsbyImageData)
  const readyImage3 = getImage(image3.localFile.childImageSharp.gatsbyImageData)

  return (
    <div className="project-container">
      <div className="row-1">
        <div className="text-side">
          <h1>{title}</h1>
          <p>{description1}</p>
        </div>
        <GatsbyImage
          className="image-side"
          image={readyImage1}
          alt="Project image one"
        />
      </div>

      <div className="row-2">
        <GatsbyImage
          className="image-side"
          image={readyImage2}
          alt="Project image two"
        />
        <div className="text-side">
          <p>{description2}</p>
        </div>
      </div>

      <div className="row-3">
        <div className="text-side">
          <p>{description3}</p>
        </div>
        <GatsbyImage
          className="image-side"
          image={readyImage3}
          alt="Project image three"
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProjects(title: { eq: $title }) {
      title
      description1
      description2
      description3
      image1 {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      image2 {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      image3 {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`

export default ProjectTemplate
