import { SET_ACTUAL_PAGE } from '../types'

export default setActualPage = (actualPage) => {
    return {
        type: SET_ACTUAL_PAGE,
        actualPage
    }
}