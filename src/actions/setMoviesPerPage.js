import { SET_MOVIES_PER_PAGE } from '../types'

export default setMoviesPerPage = (moviesPerPage) => {
    return {
        type: SET_MOVIES_PER_PAGE,
        moviesPerPage
    }
}