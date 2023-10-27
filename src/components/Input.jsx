import '../styles/Input.css'
import PropTypes from 'prop-types'

function Input(props) {
    return (
        <input
            id={props.id}
            type={props.type} 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.value} 
            onChange={props.onChange} 
        />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Input