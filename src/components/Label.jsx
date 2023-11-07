import '../styles/Label.css'
import PropTypes from 'prop-types'

function Label(props) {
    return (
        <label htmlFor={props.for}>{props.text}</label>
    )
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
    for: PropTypes.string.isRequired
}

export default Label