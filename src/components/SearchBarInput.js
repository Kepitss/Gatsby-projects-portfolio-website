import React from "react"

const SearchBarInput = ({ projectsData, setSelectCategory, setSearchTerm }) => {
  // Create category list
  const categoryListItems = projectsData.map(item => {
    return item.coutryList
  })
  // create new array without same values
  const uniqueCategoryListItems = Array.from(new Set(categoryListItems))

  return (
    <div className="all-projects-search">
      {/* Create dropdown select tag with unique Category items */}
      <select onChange={e => setSelectCategory(e.target.value)}>
        <option value="all">all</option>
        {uniqueCategoryListItems.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          )
        })}
      </select>
      {/* Create input element */}
      <input type="text" onChange={e => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default SearchBarInput
