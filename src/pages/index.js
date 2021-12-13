import React from "react"

import Slider from "../components/Slider"
import SomeProjects from "../components/SomeProjects"
import Seo from "../helper-components/Seo"

const Home = () => {
  return (
    <>
      <Seo title="Home" />
      <Slider />
      <SomeProjects />
    </>
  )
}

export default Home
