import '../styles/Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    if (props.visibility) {
        return (
            <button className={props.classes} onClick={props.onClick} style={{display: props.visibility}} disabled={props.disabled}>{props.text}</button>
        )
    } else {
        return (
            <button className={props.classes} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    visibility: PropTypes.string,
    classes: PropTypes.string,
    disabled: PropTypes.bool
}

export default Button