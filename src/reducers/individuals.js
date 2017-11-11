//individual means player in this app
import { REQUEST_INDIVIDUAL_DATA, RECIEVE_INDIVIDUAL_DATA, SORT_INDIVIDUALS_BY } from '../actions'

const individuals = (state = {isFetching: false, individuals: [], currentSort: "min", sorted: true}, action) => {
	switch(action.type) {
		case REQUEST_INDIVIDUAL_DATA:
			return {
				...state,
				isFetching: true,
			}
		case RECIEVE_INDIVIDUAL_DATA:
			return {
				...state,
				isFetching: false,
				individuals: action.players 
			}
		case SORT_INDIVIDUALS_BY:
			if (action.cat === state.currentSort) {
				if (state.sorted) {
					return {
						...state,
						sorted: false
					}
				}
				else {
					return {
						...state,
						sorted: true,
						currentSort: "min"
					}
				}
			}
			else {
				return {
					...state,
					sorted: true,
					currentSort: action.cat
				}
			}
				
	default:
		return state
	}
}

export default individuals