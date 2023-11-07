import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Button from './Button';
import Select from './Select';

function FormSection(props) {
    
    const fields = props.fields.map((field) => {
        if (field.id == 'gi-name') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')}
                        type={field.type} 
                        required={field.required}
                        value={props.birthDateInputText} 
                        onChange={props.onBirthDateChange} 
                    />
                </div>
            )
        } else if (field.id == 'gi-gender') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
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
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.type} 
                        accept='image/*'
                        required={field.required}
                        onChange={props.onPhotoChange} 
                    />
                </div>
            )
        } else if (field.id == 'ed-school') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.type} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.schoolInputText}
                        onChange={props.onSchoolChange}
                    />
                </div>
            )
        } else if (field.id == 'ed-study-title') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.type} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.studiesTitleInputText}
                        onChange={props.onStudiesTitleChange}
                    />
                </div>
            )
        } else if (field.id == 'ed-start-date') {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let i = currentYear; i >= currentYear - 80; i--) {
                years.push(String(i));
            }
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-select')} />
                    <Select 
                        id={field.id + ('-select')} 
                        required={field.required} 
                        value={props.studiesStartDateSelect} 
                        onChange={props.onStudiesStartDateChange} 
                        options={years.map((year) => ({value: year, label: year}))}
                    />
                </div>
            )
        } else if (field.id == 'ed-end-date') {
            const currentYear = new Date().getFullYear();
            const years = [];
            for (let i = currentYear; i >= currentYear - 80; i--) {
                years.push(String(i));
            }
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-select')} />
                    <Select 
                        id={field.id + ('-select')} 
                        required={field.required} 
                        value={props.studiesEndDateSelect} 
                        onChange={props.onStudiesEndDateChange} 
                        options={years.map((year) => ({value: year, label: year}))}
                    />
                </div>
            )
        } else if (field.id == 'ed-description') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.type} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.studiesDescriptionInputText}
                        onChange={props.onStudiesDescriptionChange}
                    />
                </div>
            )
        }
    })
    
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            {fields}
            <Button text='Next >' onClick={props.onNextClick}/>
        </div>
    )
}

FormSection.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool.isRequired
    })).isRequired,
    onNextClick: PropTypes.func,
    // General Info prop types
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
    onPhotoChange: PropTypes.func,
    // Education prop types
    schoolInputText: PropTypes.string,
    onSchoolChange: PropTypes.func,
    studiesTitleInputText: PropTypes.string,
    onStudiesTitleChange: PropTypes.func,
    studiesStartDateSelect: PropTypes.string,
    onStudiesStartDateChange: PropTypes.func,
    studiesEndDateSelect: PropTypes.string,
    onStudiesEndDateChange: PropTypes.func,
    studiesDescriptionInputText: PropTypes.string,
    onStudiesDescriptionChange: PropTypes.func
}

export default FormSection