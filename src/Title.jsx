import React from 'react'
import { useDispatch } from 'react-redux'
import { inputText } from './redux/actions'

const Title = (props) => {
	console.log(props, 'TITLE')
	const dispatch = useDispatch()

	const handleChange = (event) => {
		dispatch(inputText(event.target.value))
	}

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type="text" onChange={handleChange} />
			</div>
		</div>
	)
}

export default Title
