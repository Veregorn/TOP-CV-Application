import '../styles/Input.css'
import PropTypes from 'prop-types'

function Input(props) {
    return (
        <input
            className='input' 
            type={props.type} 
            placeholder={props.placeholder} 
        />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Input