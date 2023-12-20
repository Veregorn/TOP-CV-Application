import '../styles/Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    if (props.visibility) {
        return (
            <button className={props.classes} onClick={props.onClick} style={{display: props.visibility}}>{props.text}</button>
        )
    } else {
        return (
            <button className={props.classes} onClick={props.onClick}>{props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    visibility: PropTypes.string,
    classes: PropTypes.string
}

export default Button