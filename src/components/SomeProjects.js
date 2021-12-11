import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

import Title from "../helper-components/Title"

const SomeProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects(limit: 5) {
        nodes {
          title
          projectPosition
          image1 {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  const { nodes: someProjects } = data.allStrapiProjects

  return (
    <>
      <div className="some-projects-container">
        <Title title="some projects" />
        <div className="some-projects">
          {someProjects.map((project, index) => {
            const { title, image1, projectPosition } = project
            const readyImg = getImage(
              image1.localFile.childImageSharp.gatsbyImageData
            )
            const slug = slugify(title, { lower: true })

            return (
              <Link
                to={`/projects/${slug}`}
                className={`project
             ${projectPosition === "1" ? "project-1" : ""}
             ${projectPosition === "2" ? "project-2" : ""}
             ${projectPosition === "3" ? "project-3" : ""}
             ${projectPosition === "4" ? "project-4" : ""}
             ${projectPosition === "5" ? "project-5" : ""}
             `}
                key={index}
              >
                <div className="project-hover">
                  <h1>{title}</h1>
                </div>
                <GatsbyImage image={readyImg} alt={title} className="img" />
              </Link>
            )
          })}
        </div>
        <Link to="/projects" className="projects-btn">
          all projects
        </Link>
      </div>
    </>
  )
}

export default SomeProjects
