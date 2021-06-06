import React, {useState, useEffect} from "react"
import  "./Pagination.scss"
import { connect } from 'react-redux'
import Button from '../Button/Button'

export const mapStateToProps = state => {
  return {
      selectedCategory: state.setSelectedCategoryReducer,
      actualPage: state.setActualPageReducer
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setActualPageReducer: (actualPage) => dispatch({ type: 'SET_ACTUAL_PAGE', actualPage})
  }
}

const Pagination = ({pagesNumber, actualPage, selectedCategory, setActualPageReducer}) => {

  const [disabledPrevious, setDisabledPrevious] = useState(false)
  const [disabledNext, setDisabledNext] = useState(false)

  useEffect(() => {
    setActualPageReducer(1)
  }, [selectedCategory, setActualPageReducer])


  useEffect(() => {
    setDisabledPrevious(actualPage === 1 ? true : false)
    setDisabledNext(actualPage === pagesNumber || pagesNumber === 0)
  }, [actualPage, pagesNumber])

  let previousPage = () => {
      actualPage--
      setActualPageReducer(actualPage)
  }

  let nextPage = () => {
      actualPage++
      setActualPageReducer(actualPage)
  }

  return(
    <div className="pagination">
      <div className="pagination--buttons">
        <Button
          disabled={disabledPrevious}
          onclick={previousPage}
          text='Page précédente'
        />
        <Button  
          disabled={disabledNext}
          onclick={nextPage}
          text='Page suivante'
        />
      </div>
      <span className="pagination--text">{actualPage} / {pagesNumber}</span>
    </div>
  )
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)