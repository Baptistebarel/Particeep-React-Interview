import React, {useEffect, useState} from "react"
import  "./MovieList.scss"
import MovieCard from '../MovieCard/MovieCard'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      selectedCategory: state.setSelectedCategoryReducer,
      moviesPerPage: state.setMoviesPerPageReducer,
      actualPage: state.setActualPageReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      setSelectedCategoryReducer: (selectedCategory) => dispatch({ type: 'SET_SELECTED_CATEGORY', selectedCategory}),
      setActualPageReducer: (actualPage) => dispatch({ type: 'SET_ACTUAL_PAGE', actualPage})
  }
}

const MovieList = ({ 
    movies, 
    isLoaded,
    setMovies, 
    selectedCategory, 
    setPagesNumber, 
    categories, 
    setCategories,
    moviesPerPage,
    actualPage,
    setSelectedCategoryReducer,
    setActualPageReducer
}) => {

  const [moviesList, setMoviesList] = useState(movies)
  const [moviesFiltered, setMoviesFiltered] = useState(moviesList)

  useEffect(() => {
    if (selectedCategory === 'All') {
        setMoviesList(movies)
    } else {
        setMoviesList( movies.filter(
            movie => movie.category === selectedCategory
        ))
    }
  }, [selectedCategory, movies])

  useEffect(() => {
    setPagesNumber(Math.ceil(moviesList.length / moviesPerPage))
  }, [moviesList, moviesPerPage, setPagesNumber])

  useEffect(() => {
    setMoviesFiltered(moviesList.slice(
      (actualPage - 1) * moviesPerPage, actualPage * moviesPerPage
    ))
  }, [moviesList, actualPage, moviesPerPage])

  let deleteMovie = (id, category) => {
    setMovies(movies.filter(movie => movie.id !== id))
    if (moviesFiltered.length === 1 && actualPage > 1) {
      setActualPageReducer(actualPage - 1)
    }
    if (movies.filter(movie => movie.category === category).length === 1) {
        setCategories(categories.filter(
            categories => categories !== category
        ))
        setSelectedCategoryReducer('All')
    }
  }

  let updateRatings = (id, rating) => {
    setMovies(movies.map(movie =>
      movie.id === id ?
        movie.userRating === rating ?
            {...movie, userRating: ''} :
            {...movie, userRating: rating} :
        movie
  ))
  }

  return(
    <main className="movieListWrapper">
      {movies.length > 0 ?  
        moviesFiltered.map(movie => 
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            userRating={movie.userRating}
            dislikes={movie.dislikes}
            deleteMovie={deleteMovie}
            updateRatings={updateRatings}
          />
        ) : isLoaded ?
          <span>Il n'y a pas de films</span>
          :
          <span>Chargement des films</span>

      }
    </main>
  )
}
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
