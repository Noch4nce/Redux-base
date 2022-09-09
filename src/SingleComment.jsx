import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentUpdate } from './redux/actions'

const SingleComment = ({ data }) => {
	const [commentText, setCommentText] = useState('')
	const { text, id } = data
	const dispatch = useDispatch()

	useEffect(() => {
		if (text) {
			setCommentText(text)
		}
	}, [text])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(commentText, 'commentText')
		dispatch(commentUpdate(text, id))
	}

	const handleInput = (e) => {
		setCommentText(e.target.value)
	}

	return (
		<form onSubmit={handleSubmit} className="comments-item">
			<div className="comments-item-delete">&times;</div>
			<input type="text" value={commentText} onChange={handleInput} />
			<input type="submit" hidden />
		</form>
	)
}

export default SingleComment
