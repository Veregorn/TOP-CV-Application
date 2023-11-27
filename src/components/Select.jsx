import '../styles/Select.css'
import PropTypes from 'prop-types'

function Select(props) {
    return (
        <select
            id={props.id}
            value={props.value}
            onChange={props.onChange} 
            required={props.required} 
        >
            <option value="" disabled>---</option>
            {props.options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}

Select.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool.isRequired
}

export default Select