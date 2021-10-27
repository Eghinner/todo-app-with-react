import React, {useState} from 'react'
// import PropTypes from 'prop-types'
//
const Elemento = ({task}) => {

	// definir states
	const [complete, setComplete] = useState(false);


	return (
		<div>
			<li
				className={complete
				 ?
				 "list-group-item d-flex justify-content-between text-decoration-line-through "
				 :
				 "list-group-item d-flex justify-content-between"}
			>
				<div>
					<input
						className="form-check-input mx-3"
						type="checkbox"
						onChange={e=>setComplete(e.target.checked)}
					/>
					{task}
				</div>

				<i class="fas fa-trash"></i>
			</li>
		</div>
	)
}

// Elemento.propTypes = {

// }

export default Elemento