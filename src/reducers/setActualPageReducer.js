import { SET_ACTUAL_PAGE } from '../actions/types'

let setActualPageReducer = (state=1, action) => {
    switch (action.type) {
        case SET_ACTUAL_PAGE:
            return action.actualPage
        default:
            return state
    }
}

export default setActualPageReducer