import React from 'react'
// import PropTypes from 'prop-types'
import Elemento from './Elemento.js'

const Listado = ({tasks, eliminarCita}) => {
	return (
		<React.Fragment>
			{tasks.map(task=>(
				<Elemento
					task={task.state}
					key={task.id}
					id={task.id}
					eliminarCita={eliminarCita}
				/>
			))}

		</React.Fragment>
	)
}

// Listado.propTypes = {

// }

export default Listado