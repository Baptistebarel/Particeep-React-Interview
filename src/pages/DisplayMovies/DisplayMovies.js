import React, { useEffect, useState } from "react"
import  "./DisplayMovies.scss"

import { movies$ } from '../../movies'
import Header from '../../components/Header/Header'
import Pagination from '../../components/Pagination/Pagination'
import MovieList from '../../components/MovieList/MovieList'

const DisplayMovies = () => {

  useEffect(() => {
    movies$
        .then(
            movies => {
                setMovies(movies)
                setIsLoaded(true)
            }
        )
        .catch(error => console.log(error))
  }, [])

  const [isLoaded, setIsLoaded] = useState(false)
  const [movies, setMovies] = useState([])
  const [pagesNumber, setPagesNumber] = useState(1)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories([...new Set(movies.map(movie => movie.category))])
  }, [movies])

  return(
    <>
      <Header categories={categories}/>
      <MovieList
        movies={movies}
        setMovies={setMovies}
        setPagesNumber={setPagesNumber}
        categories={categories}
        setCategories={setCategories}
        isLoaded={isLoaded}
      />
      <Pagination pagesNumber={pagesNumber}/>
    </>
  )
}
 
export default DisplayMovies;