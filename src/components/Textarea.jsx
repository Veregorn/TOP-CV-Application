import '../styles/Textarea.css'
import PropTypes from 'prop-types'

function Textarea(props) {
    return (
        <textarea
            id={props.id} 
            rows={props.rows} 
            cols={props.cols} 
            placeholder={props.placeholder} 
            value={props.value} 
            onChange={props.onChange} 
            required={props.required} 
        />
    )
}

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool.isRequired,
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Textarea