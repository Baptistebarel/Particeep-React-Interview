import React from "react"
import  "./Header.scss"
import Select from "../Select/Select"
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      moviesPerPage: state.setMoviesPerPageReducer,
  }
}

const Header = ({categories, moviesPerPage}) => {

  return(
    <header className="headerWrapper">
      <Select 
        label="Catégories : "
        options={categories}
        optionDefault="All"
      />
      <Select 
        label="Films par page : "
        options={[4, 8, 12]}
        optionDefault={parseInt(moviesPerPage)}
      />
    </header>
  )
}

export default connect(
  mapStateToProps,
  undefined
)(Header)