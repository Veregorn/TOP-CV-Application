import '../styles/Input.css'
import PropTypes from 'prop-types'

function Input(props) {
    if (props.type == 'file') {
        return (
            <input
                id={props.id}
                type={props.type} 
                accept={props.accept}
                required={props.required} 
                onChange={props.onChange} 
            />
        )
    } else {
        return (
            <input
                id={props.id}
                type={props.type} 
                placeholder={props.placeholder} 
                required={props.required} 
                value={props.value} 
                onChange={props.onChange} 
                disabled={props.disabled} 
            />
        )
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    accept: PropTypes.string,
    disabled: PropTypes.bool
}

export default Input