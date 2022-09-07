import { CREATE_COMMENT } from './types'

const initialState = {
	comments: []
}

export const commentsReducer = (state = initialState, action) => {
	console.log(commentsReducer, action)
	return state
	// switch (action.type) {
	// 	case CREATE_COMMENT:
	// 		return {
	// 			...state
	// 		}
	// 	default:
	// 		return state
	// }
}
