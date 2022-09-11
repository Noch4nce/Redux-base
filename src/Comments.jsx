import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment'
import { useDispatch, useSelector } from 'react-redux'
import { commentsLoad, createComment } from './redux/actions'
import uniqid from 'uniqid'

const Comments = () => {
	const [textComment, setTextComment] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(commentsLoad())
	}, [])

	const comments = useSelector((state) => {
		const { commentsReducer } = state

		return commentsReducer.comments
	})

	const handleInput = (e) => {
		setTextComment(e.target.value)
	}
	console.log(comments, 'comments')

	const handleSubmit = (e) => {
		e.preventDefault()

		const id = uniqid()
		dispatch(createComment(textComment, id))
	}

	return (
		<div className="card-comments">
			<form onSubmit={handleSubmit} className="comments-item-create">
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			{!!comments.length &&
				comments.map((comment) => {
					return <SingleComment key={comment.id} data={comment} />
				})}
		</div>
	)
}

export default Comments
