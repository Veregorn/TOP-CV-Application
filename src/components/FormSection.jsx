import '../styles/FormSection.css'
import PropTypes from 'prop-types';

function FormSection(props) {
    
    const fields = props.fields.map((field, index) => {
        return (
            <div key={index} className='field'>
                <label htmlFor={field.id}>{field.label}</label>
                <input 
                    type={field.type} 
                    id={field.id} 
                    name={field.name} 
                    placeholder={field.placeholder} 
                    required={field.required}
                />
            </div>
        )
    })
    
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            {fields}
        </div>
    )
}

FormSection.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired
    })).isRequired
}

export default FormSection