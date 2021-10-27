import React from 'react'
// import PropTypes from 'prop-types'
import Elemento from './Elemento.js'

const Listado = ({tasks}) => {
	return (
		<React.Fragment>
			{tasks.map(task=>(
				<Elemento
					task={task.state}
					key={task.id}
				/>
			))}

		</React.Fragment>
	)
}

// Listado.propTypes = {

// }

export default Listado