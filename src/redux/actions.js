import {
	COMMENT_DELETE,
	COMMENT_UPDATE,
	CREATE_COMMENT,
	DECREMENT,
	INCREMENT,
	INPUT_TEXT
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
