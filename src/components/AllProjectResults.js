import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const AllProjectResults = ({ selectCategory, searchTerm, projectsData }) => {
  // Function for showing each project data
  const mapItems = array => {
    return array.map((item, index) => {
      const readyImage = getImage(
        item.image1.localFile.childImageSharp.gatsbyImageData
      )
      const slug = slugify(item.title, { lower: true })

      return (
        <Link className="list-item" to={`/projects/${slug}`} key={index}>
          <div className="item-hover">
            <h1>Open project</h1>
          </div>
          <GatsbyImage className="img" image={readyImage} alt={item.title} />
          <h3>{item.title}</h3>
        </Link>
      )
    })
  }

  // Function whats filters Projects data
  const searchResults = () => {
    const filteredProjects = projectsData
      .filter(item => {
        if (selectCategory === "all") {
          return item
        } else if (selectCategory === item.coutryList) {
          return item
        }
        return false
      })
      // Filter projects list by input value
      .filter(value => {
        if (searchTerm === "") {
          return value
        } else if (
          value.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value
        }
        return false
      })

    // if length of filteredProjects is more than 0 show project items
    // else show "No results found"
    if (filteredProjects.length > 0) {
      return mapItems(filteredProjects)
    } else {
      return <p className="no-projects-found-text">No results found.</p>
    }
  }

  return <div className="all-projects-list">{searchResults()}</div>
}

export default AllProjectResults
