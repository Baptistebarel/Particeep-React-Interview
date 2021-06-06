import React, {useState} from "react"
import  "./Select.scss"
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
  return {
      setSelectedCategoryReducer: (selectedCategory) => dispatch({ type: 'SET_SELECTED_CATEGORY', selectedCategory}),
      setMoviesPerPageReducer: (moviesPerPage) => dispatch({ type: 'SET_MOVIES_PER_PAGE', moviesPerPage})
  }
}

const Select = ({label, options, optionDefault,setSelectedCategoryReducer, setMoviesPerPageReducer }) => {

  const [selectOption, setSelectOption] = useState(optionDefault)

  let handleOptionChange = (e) => {
    setSelectOption(e.target.value)
    label === 'Catégories : ' && setSelectedCategoryReducer(e.target.value)
    label === 'Films par page : ' && setMoviesPerPageReducer(e.target.value)
}

  return(
    <div className="selectWrapper">
      <label htmlFor={label}>{label}</label>
      <select 
        name={label}
        value={selectOption}
        onChange={handleOptionChange}
      >
        <option value={optionDefault}>{optionDefault}</option>
        {options.map((option, i) =>
          option !== optionDefault &&
          <option key={i} value={option}>{option}</option>
        )}
      </select>
    </div>
  )
}
 
export default connect(
  undefined,
  mapDispatchToProps
)(Select)