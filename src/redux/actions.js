import {
	COMMENT_DELETE,
	COMMENT_UPDATE,
	COMMENTS_LOAD,
	CREATE_COMMENT,
	DECREMENT,
	INCREMENT,
	INPUT_TEXT,
	LOADER_DISPLAY_OFF,
	LOADER_DISPLAY_ON
} from './types'

export const incrementLikes = () => {
	return {
		type: INCREMENT
	}
}

export const decrementLikes = () => {
	return {
		type: DECREMENT
	}
}

export const inputText = (text) => {
	return {
		type: INPUT_TEXT,
		text
	}
}

export const createComment = (text, id) => {
	return {
		type: CREATE_COMMENT,
		data: {
			text,
			id
		}
	}
}

export const commentUpdate = (text, id) => {
	return {
		type: COMMENT_UPDATE,
		data: {
			text,
			id
		}
	}
}

export const commentDelete = (id) => {
	return {
		type: COMMENT_DELETE,
		id
	}
}

export const loaderOn = () => {
	return {
		type: LOADER_DISPLAY_ON
	}
}

export const loaderOff = () => {
	return {
		type: LOADER_DISPLAY_OFF
	}
}

export const commentsLoad = () => {
	return async (dispatch) => {
		dispatch(loaderOn())
		const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
		const jsonData = await response.json()

		setTimeout(() => {
			dispatch({
				type: COMMENTS_LOAD,
				data: jsonData
			})
			dispatch(loaderOff())
		}, 1000)
	}
}
