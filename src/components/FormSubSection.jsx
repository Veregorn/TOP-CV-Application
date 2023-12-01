import '../styles/FormSubSection.css'
import PropTypes from 'prop-types'
import Input from './Input'
import Select from './Select'
import Label from './Label'
import Textarea from './Textarea'
import Radio from './Radio'

function FormSubSection(props) {
    
    const fields = props.fields.map((field) => {
        
        if (field.id == 'ed-school') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.schoolInputText}
                        onChange={props.onSchoolChange} 
                        disabled={false} 
                    />
                </div>
            )
        } else if (field.id == 'ed-study-title') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.studiesTitleInputText}
                        onChange={props.onStudiesTitleChange} 
                        disabled={false} 
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
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.studiesDescriptionInputText}
                        onChange={props.onStudiesDescriptionChange} 
                        disabled={false} 
                    />
                </div>
            )
        } else if (field.id == 'exp-company') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.companyInputText}
                        onChange={props.onCompanyChange} 
                        disabled={false} 
                    />
                </div>
            )
        } else if (field.id == 'exp-job-position') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.jobPositionInputText}
                        onChange={props.onJobPositionChange} 
                        disabled={false} 
                    />
                </div>
            )
        } else if (field.id == 'exp-start-date') {
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
                        value={props.jobStartDateSelect} 
                        onChange={props.onJobStartDateChange} 
                        options={years.map((year) => ({value: year, label: year}))}
                    />
                </div>
            )
        } else if (field.id == 'exp-end-date') {
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
                        value={props.jobEndDateSelect} 
                        onChange={props.onJobEndDateChange} 
                        options={years.map((year) => ({value: year, label: year}))}
                    />
                </div>
            )
        } else if (field.id == 'exp-description') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Textarea 
                        id={field.id + ('-textarea')} 
                        rows={10} 
                        cols={50} 
                        placeholder={field.placeholder} 
                        required={field.required} 
                        value={props.jobDescriptionInputText} 
                        onChange={props.onJobDescriptionChange} 
                    />
                </div>
            )
        } else if (field.id == 'sk-name') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    <Label text={field.label} for={field.id + ('-input')} />
                    <Input 
                        id={field.id + ('-input')} 
                        type={field.inputType} 
                        placeholder={field.placeholder}
                        required={field.required}
                        value={props.skillNameInputText}
                        onChange={props.onSkillNameChange} 
                        disabled={false} 
                    />
                </div>
            )
        } else if (field.id == 'sk-level') {
            return (
                <div key={('form-') + field.id} className='form-field'>
                    
                    <Radio 
                        id={field.id} 
                        legend={field.label}  
                        name={props.index !== undefined ? field.id + '-' + props.index : field.id} 
                        options={field.options} 
                        required={field.required} 
                        value={props.skillLevelRadio} 
                        onChange={props.onSkillLevelChange} 
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
    fields: PropTypes.array,
    index: PropTypes.number,
    // Education
    schoolInputText: PropTypes.string,
    onSchoolChange: PropTypes.func,
    studiesTitleInputText: PropTypes.string,
    onStudiesTitleChange: PropTypes.func,
    studiesStartDateSelect: PropTypes.string,
    onStudiesStartDateChange: PropTypes.func,
    studiesEndDateSelect: PropTypes.string,
    onStudiesEndDateChange: PropTypes.func,
    studiesDescriptionInputText: PropTypes.string,
    onStudiesDescriptionChange: PropTypes.func,
    // Experience
    companyInputText: PropTypes.string,
    onCompanyChange: PropTypes.func,
    jobPositionInputText: PropTypes.string,
    onJobPositionChange: PropTypes.func,
    jobStartDateSelect: PropTypes.string,
    onJobStartDateChange: PropTypes.func,
    jobEndDateSelect: PropTypes.string,
    onJobEndDateChange: PropTypes.func,
    jobDescriptionInputText: PropTypes.string,
    onJobDescriptionChange: PropTypes.func,
    // Skills
    skillNameInputText: PropTypes.string,
    onSkillNameChange: PropTypes.func,
    skillLevelRadio: PropTypes.string,
    onSkillLevelChange: PropTypes.func
}

export default FormSubSection