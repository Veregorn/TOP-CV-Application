import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';

function FormSection(props) {
    
    const fields = props.fields.map((field) => {
        if (field.id == 'gi-name') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.nameInputText}
                        onChange={props.onNameChange}
                    />
                </div>
            )
        } else if (field.id == 'gi-email') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.emailInputText} 
                        onChange={props.onEmailChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-phone') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.phoneInputText} 
                        onChange={props.onPhoneChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-address') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.addressInputText} 
                        onChange={props.onAddressChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-postal') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.postalCodeInputText} 
                        onChange={props.onPostalCodeChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-city') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.cityInputText} 
                        onChange={props.onCityChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-country') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.countryInputText} 
                        onChange={props.onCountryChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-birth') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.birthDateInputText} 
                        onChange={props.onBirthDateChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-gender') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        placeholder={field.placeholder} 
                        required={field.required}
                        value={props.genderInputText} 
                        onChange={props.onGenderChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-photo') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.type} 
                        accept='image/*'
                        required={field.required}
                        onChange={props.onPhotoChange} 
                    />
                </div>
            )
        }
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
    onNameChange: PropTypes.func,
    emailInputText: PropTypes.string,
    onEmailChange: PropTypes.func,
    phoneInputText: PropTypes.string,
    onPhoneChange: PropTypes.func,
    addressInputText: PropTypes.string,
    onAddressChange: PropTypes.func,
    postalCodeInputText: PropTypes.string,
    onPostalCodeChange: PropTypes.func,
    cityInputText: PropTypes.string,
    onCityChange: PropTypes.func,
    countryInputText: PropTypes.string,
    onCountryChange: PropTypes.func,
    birthDateInputText: PropTypes.string,
    onBirthDateChange: PropTypes.func,
    genderInputText: PropTypes.string,
    onGenderChange: PropTypes.func,
    onPhotoChange: PropTypes.func
}

export default FormSection