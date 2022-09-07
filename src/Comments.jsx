import React, { useState } from 'react'
import SingleComment from './SingleComment'
import { useDispatch } from 'react-redux'
import { createComment } from './redux/actions'
import uniqid from 'uniqid'

const Comments = (props) => {
	console.log(props, 'COMMNETS')
	const [textComment, setTextComment] = useState('')
	const dispatch = useDispatch()

	const handleInput = (e) => {
		setTextComment(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(textComment, 'textComment')
		const id = uniqid()
		dispatch(createComment(textComment, id))
	}

	return (
		<div className="card-comments">
			<form onSubmit={handleSubmit} className="comments-item-create">
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			<SingleComment />
		</div>
	)
}

export default Comments
