import { combineReducers } from 'redux'

import setSelectedCategoryReducer from './setSelectedCategoryReducer'
import setActualPageReducer from './setActualPageReducer'
import setMoviesPerPageReducer from './setMoviesPerPageReducer'


const rootReducer = combineReducers({
    setSelectedCategoryReducer,
    setActualPageReducer,
    setMoviesPerPageReducer
})

export default rootReducer