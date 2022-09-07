import React, { useState } from 'react'
import SingleComment from './SingleComment'

const Comments = (props) => {
	console.log(props, 'COMMNETS')
	const [textComment, setTextComment] = useState('')

	const handleInput = (e) => {
		setTextComment(e.target.value)
	}

	return (
		<div className="card-comments">
			<form className="comments-item-create">
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			<SingleComment />
		</div>
	)
}

export default Comments
