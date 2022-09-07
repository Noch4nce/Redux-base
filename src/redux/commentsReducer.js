import { CREATE_COMMENT } from './types'

const initialState = {
	comments: []
}

export const commentsReducer = (state = initialState, action) => {
	console.log(commentsReducer, action)
	switch (action.type) {
		case CREATE_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.data]
			}
		default:
			return state
	}
}
