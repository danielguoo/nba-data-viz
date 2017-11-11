import { TOGGLE_AXES } from '../actions'

const visualization = (state = {x: "min", y:"pts"}, action) => {
	switch(action.type) {
		case TOGGLE_AXES:
			switch(action.axis) {
				case 'x':
					return {...state, x: action.cat}
				case 'y':
					return {...state, y: action.cat}
				default:
					return state
			}
		default: 
			return state
	}
}

export default visualization