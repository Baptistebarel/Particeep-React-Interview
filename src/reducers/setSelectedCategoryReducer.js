import { SET_SELECTED_CATEGORY } from '../actions/types'

let setSelectedCategoryReducer = (state='All', action) => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return action.selectedCategory
        default:
            return state
    }
}

export default setSelectedCategoryReducer