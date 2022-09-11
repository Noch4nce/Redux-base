import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentDelete, commentUpdate } from './redux/actions'

const SingleComment = ({ data }) => {
	const [commentText, setCommentText] = useState('')
	const { text, id } = data
	const dispatch = useDispatch()

	useEffect(() => {
		if (text) {
			setCommentText(text)
		}
	}, [text])

	const handleDelete = (e) => {
		e.preventDefault()
		dispatch(commentDelete(id))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(commentUpdate(commentText, id))
	}

	const handleInput = (e) => {
		setCommentText(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit} className="comments-item">
			<div onClick={handleDelete} className="comments-item-delete">
				&times;
			</div>
			<input type="text" value={commentText} onChange={handleInput} />
			<input type="submit" hidden />
		</form>
	)
}

export default SingleComment
