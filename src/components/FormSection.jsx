import '../styles/FormSection.css'
import PropTypes from 'prop-types';

function FormSection(props) {
    return (
        <>
            <h2>{props.title}</h2>
        </>
    )
}

FormSection.propTypes = {
    title: PropTypes.string.isRequired
}

export default FormSection