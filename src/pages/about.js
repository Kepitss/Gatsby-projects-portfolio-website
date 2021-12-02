import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import QuestionAccordion from "../components/QuestionAccordion"

const About = ({ data }) => {
  const { title, about_us_info, office_indoor_image, office_outdoor_image } =
    data.strapiAboutUs
  const readyOfficeIndoorImage = getImage(
    office_indoor_image.localFile.childImageSharp.gatsbyImageData
  )
  const readyOfficeOutdoorImage = getImage(
    office_outdoor_image.localFile.childImageSharp.gatsbyImageData
  )
  return (
    <>
      <div className="about-us-container">
        <div className="row-1">
          <div className="text-side">
            <h1>{`#${title}`}</h1>
          </div>
          <GatsbyImage
            className="image-side"
            image={readyOfficeOutdoorImage}
            alt="Office outdoor image"
          />
        </div>
        <div className="row-2">
          <GatsbyImage
            className="image-side"
            image={readyOfficeIndoorImage}
            alt="Office indoor image"
          />
          <div className="text-side">
            <p>{about_us_info}</p>
          </div>
        </div>
        <QuestionAccordion />
      </div>
    </>
  )
}

export const query = graphql`
  {
    strapiAboutUs {
      title
      about_us_info
      office_indoor_image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      office_outdoor_image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      AboutUsQuestions {
        question
        question_answer
      }
    }
  }
`

export default About
