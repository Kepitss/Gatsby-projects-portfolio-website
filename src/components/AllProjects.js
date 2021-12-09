import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

import SearchBarInput from "./SearchBarInput"
import AllProjectResults from "./AllProjectResults"

const BothTogether = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects {
        nodes {
          title
          coutryList
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

  const [selectCategory, setSelectCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="all-projects-container">
      {/* Title and decription */}
      <div className="all-projects-info">
        <h1>Search for Project</h1>
        <p>Search for all projects or search with category</p>
      </div>
      <SearchBarInput
        projectsData={data.allStrapiProjects.nodes}
        setSelectCategory={setSelectCategory}
        setSearchTerm={setSearchTerm}
      />
      <AllProjectResults
        selectCategory={selectCategory}
        searchTerm={searchTerm}
        projectsData={data.allStrapiProjects.nodes}
      />
    </div>
  )
}

export default BothTogether
