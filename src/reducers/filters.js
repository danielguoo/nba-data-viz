//individual means player in this app
import { ADD_FILTER } from '../actions'

const filters = (state = {}, action) => {
	switch(action.type) {
        case ADD_FILTER:
            const category = action.cat
            return {
                ...state,
                [category]: action.option
            }

        default:
            return state
        }
}

export default filters