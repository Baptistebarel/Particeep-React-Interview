import { SET_SELECTED_CATEGORY } from '../types'

export default setSelectedCategory = (selectedCategory) => {
    return {
        type: SET_SELECTED_CATEGORY,
        selectedCategory
    }
}