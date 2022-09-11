import { COMMENT_DELETE, COMMENT_UPDATE, CREATE_COMMENT } from './types'

const initialState = {
	comments: []
}

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.data]
			}
		case COMMENT_UPDATE:
			const findIndex = state.comments.findIndex(
				(comment) => comment.id === action.data.id
			)

			const nextComments = [
				...state.comments.slice(0, findIndex),
				action.data,
				...state.comments.slice(findIndex + 1)
			]

			return {
				...state,
				comments: nextComments
			}
		case COMMENT_DELETE:
			return (() => {
				const findIndex = state.comments.findIndex(
					(comment) => comment.id === action.id
				)

				const nextComments = [
					...state.comments.slice(0, findIndex),
					...state.comments.slice(findIndex + 1)
				]

				return {
					...state,
					comments: nextComments
				}
			})()
		default:
			return state
	}
}
