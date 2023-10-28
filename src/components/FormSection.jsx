import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

function FormSection(props) {
    
    const fields = props.fields.map((field) => {
        return (
            // If the field id is 'name', then we want to pass the nameInputText and onNameChange props to the Input component
            <div key={('form-') + field.id} className='form-field'>
                <Label text={field.label} />
                {field.id == 'gi-name' ? 
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.nameInputText}
                        onChange={props.onNameChange}
                    /> : 
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                    />
                }
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
    })).isRequired,
    nameInputText: PropTypes.string,
    onNameChange: PropTypes.func
}

export default FormSection