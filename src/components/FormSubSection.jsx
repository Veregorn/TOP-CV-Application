import '../styles/FormSubSection.css'
import PropTypes from 'prop-types'
import Input from './Input'
import Select from './Select'
import Label from './Label'

function FormSubSection(props) {
    
    const fields = props.fields.map((field) => {
        
        if (field.id == 'ed-school') {
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
        <div className='form-subsection'>
            {fields}
        </div>
    )

}

FormSubSection.propTypes = {
    fields: PropTypes.array.isRequired,
    schoolInputText: PropTypes.string.isRequired,
    onSchoolChange: PropTypes.func.isRequired,
    studiesTitleInputText: PropTypes.string.isRequired,
    onStudiesTitleChange: PropTypes.func.isRequired,
    studiesStartDateSelect: PropTypes.string.isRequired,
    onStudiesStartDateChange: PropTypes.func.isRequired,
    studiesEndDateSelect: PropTypes.string.isRequired,
    onStudiesEndDateChange: PropTypes.func.isRequired,
    studiesDescriptionInputText: PropTypes.string.isRequired,
    onStudiesDescriptionChange: PropTypes.func.isRequired
}

export default FormSubSection