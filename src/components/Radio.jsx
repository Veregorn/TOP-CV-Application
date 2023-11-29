import '../styles/Radio.css'
import PropTypes from 'prop-types'

function Radio(props) {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            {props.options.map((option, index) => (
                <div key={index} className='radio'>
                    <input 
                        id={props.id + ('-') + option.value + ('-') + index} 
                        type='radio' 
                        name={props.name} 
                        value={option.value} 
                        onChange={props.onChange} 
                        required={props.required} 
                        checked={props.value == option.value} 
                    />
                    <label htmlFor={props.id + ('-') + option.value + ('-') + index}>{option.label}</label>
                </div>
            ))}
        </fieldset>
    )
}

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired,
    legend: PropTypes.string.isRequired
}

export default Radio