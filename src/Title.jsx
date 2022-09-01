import React from 'react'

const Title = (props) => {
	console.log(props, 'TITLE')

	const handleChange = (event) => {
		console.log(event.target.value, 'eventTARG')
	}

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type="text" onChange={handleChange}/>
			</div>
		</div>
	)
}

export default Title
