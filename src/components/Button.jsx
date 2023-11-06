import '../styles/Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className='button' onClick={props.onClick}>{props.text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button