import '../styles/Textarea.css'
import PropTypes from 'prop-types'

function Textarea(props) {
    return (
        <textarea
            id={props.id}
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.value} 
            onChange={props.onChange} 
            rows={props.rows} 
            cols={props.cols} 
        />
    )
}

Textarea.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    accept: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number
}

export default Textarea