import '../styles/CVFieldPreview.css'
import PropTypes from 'prop-types'

function CVFieldPreview(props) {
    return (
        <div className='field'>
            <p>{props.value}</p>
        </div>
    )
}

CVFieldPreview.propTypes = {
    value: PropTypes.string.isRequired
}

export default CVFieldPreview