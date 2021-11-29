import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Slider = () => {
  const [index, setIndex] = useState(0)
  const data = useStaticQuery(graphql`
    {
      allFile(limit: 4) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          }
        }
      }
      site {
        siteMetadata {
          motto
          description
        }
      }
    }
  `)
  const { nodes: slides } = data.allFile
  const { motto, description } = data.site.siteMetadata

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1
        if (index > slides.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  })

  return (
    <div className="slider">
      <div className="slide-over-container">
        <h1>{motto}</h1>
        <p>{description}</p>
      </div>

      {slides.map((slide, slideIndex) => {
        const readyImage = getImage(slide.childImageSharp.gatsbyImageData)
        let position = "inactiveSlide"
        if (slideIndex === index) {
          position = "activeSlide"
        }

        return (
          <article className={`slide-container ${position}`} key={slideIndex}>
            <GatsbyImage
              image={readyImage}
              alt="slide image"
              className="slide-img"
            />
          </article>
        )
      })}
    </div>
  )
}

export default Slider
