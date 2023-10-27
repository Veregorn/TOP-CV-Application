import '../styles/CVFieldPreview.css'
import PropTypes from 'prop-types'

function CVFieldPreview(props) {
    return (
        <div className='field' id={props.key}>
            <p>{props.value}</p>
        </div>
    )
}

CVFieldPreview.propTypes = {
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default CVFieldPreview