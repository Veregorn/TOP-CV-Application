import '../styles/Label.css'
import PropTypes from 'prop-types'

function Label(props) {
    return (
        <label className='label'>{props.text}</label>
    )
}

Label.propTypes = {
    text: PropTypes.string.isRequired
}

export default Label