import '../styles/Label.css'
import PropTypes from 'prop-types'

function Label(props) {
    if (props.for.includes('checkbox')) {
        return (
            <label htmlFor={props.for} className={props.classes}>
                <img id={props.imgId} className='hobbies-image' src={props.src} alt={props.alt} />
                <input className='hobbies-checkbox' type='checkbox' id={props.for} onChange={props.onChange} />
            </label>
        )
    } else {
        return (
            <label htmlFor={props.for}  className={props.classes}>{props.text}</label>
        )
    }
}

Label.propTypes = {
    text: PropTypes.string,
    for: PropTypes.string.isRequired,
    src: PropTypes.string,
    alt: PropTypes.string,
    onChange: PropTypes.func,
    imgId: PropTypes.string,
    classes: PropTypes.string
}

export default Label