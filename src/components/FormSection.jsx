import '../styles/FormSection.css'
import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';
import Button from './Button';
import FormSubSection from './FormSubSection';

function FormSection(props) {

    if (props.title == 'General Information') {

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
                            type={field.inputType} 
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
                            type={field.inputType} 
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
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>

        )

    } else if (props.title == 'Education') {

        const subSections = props.studies.map((study) => {
            return (
                <FormSubSection 
                    key={('ed-sub-section') + String(study.id)} 
                    fields={props.fields} 
                    schoolInputText={study.school} 
                    onSchoolChange={props.onSchoolChange} 
                    studiesTitleInputText={study.title} 
                    onStudiesTitleChange={props.onStudiesTitleChange} 
                    studiesStartDateSelect={study.startDate} 
                    onStudiesStartDateChange={props.onStudiesStartDateChange} 
                    studiesEndDateSelect={study.endDate} 
                    onStudiesEndDateChange={props.onStudiesEndDateChange} 
                    studiesDescriptionInputText={study.description} 
                    onStudiesDescriptionChange={props.onStudiesDescriptionChange} 
                />
            )
        })
        
        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    schoolInputText={props.schoolInputText} 
                    onSchoolChange={props.onSchoolChange} 
                    studiesTitleInputText={props.studiesTitleInputText} 
                    onStudiesTitleChange={props.onStudiesTitleChange} 
                    studiesStartDateSelect={props.studiesStartDateSelect} 
                    onStudiesStartDateChange={props.onStudiesStartDateChange} 
                    studiesEndDateSelect={props.studiesEndDateSelect} 
                    onStudiesEndDateChange={props.onStudiesEndDateChange} 
                    studiesDescriptionInputText={props.studiesDescriptionInputText} 
                    onStudiesDescriptionChange={props.onStudiesDescriptionChange} 
                />
                <Button text='+ More studies' onClick={props.onAddStudiesClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Practical Experience') {
        
        const subSections = props.jobs.map((job) => {
            return (
                <FormSubSection 
                    key={('exp-sub-section') + String(job.id)} 
                    fields={props.fields} 
                    companyInputText={job.company} 
                    onCompanyChange={props.onCompanyChange} 
                    jobPositionInputText={job.position} 
                    onJobPositionChange={props.onJobPositionChange} 
                    jobStartDateSelect={job.startDate} 
                    onJobStartDateChange={props.onJobStartDateChange} 
                    jobEndDateSelect={job.endDate} 
                    onJobEndDateChange={props.onJobEndDateChange} 
                    jobDescriptionInputText={job.description} 
                    onJobDescriptionChange={props.onJobDescriptionChange} 
                />
            )
        })

        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    companyInputText={props.companyInputText} 
                    onCompanyChange={props.onCompanyChange} 
                    jobPositionInputText={props.jobPositionInputText} 
                    onJobPositionChange={props.onJobPositionChange} 
                    jobStartDateSelect={props.jobStartDateSelect} 
                    onJobStartDateChange={props.onJobStartDateChange} 
                    jobEndDateSelect={props.jobEndDateSelect} 
                    onJobEndDateChange={props.onJobEndDateChange} 
                    jobDescriptionInputText={props.jobDescriptionInputText} 
                    onJobDescriptionChange={props.onJobDescriptionChange} 
                />
                <Button text='+ More jobs' onClick={props.onAddJobClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Skills') {
        
        const subSections = props.skills.map((skill, index) => {
            return (
                <FormSubSection 
                    key={('sk-sub-section') + String(skill.id)} 
                    index={index} 
                    fields={props.fields} 
                    skillNameInputText={skill.name} 
                    onSkillNameChange={props.onSkillNameChange} 
                    skillLevelRadio={skill.level} 
                    onSkillLevelChange={props.onSkillLevelChange} 
                />
            )
        })

        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                {subSections}
                <FormSubSection 
                    fields={props.fields} 
                    skillNameInputText={props.skillNameInputText} 
                    onSkillNameChange={props.onSkillNameChange} 
                    skillLevelRadio={props.skillLevelRadio} 
                    onSkillLevelChange={props.onSkillLevelChange} 
                />
                <Button text='+ More skills' onClick={props.onAddSkillClick}/>
                <Button text='Next >' onClick={props.onNextClick}/>
            </div>
        )

    } else if (props.title == 'Contact') {
        console.log('Contact')
    } else if (props.title == 'Hobbies') {
        console.log('Hobbies')
    }
        
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
    onStudiesDescriptionChange: PropTypes.func,
    studies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        school: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    onAddStudiesClick: PropTypes.func,
    // Practical Experience prop types
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
    jobs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })),
    onAddJobClick: PropTypes.func,
    // Skills prop types
    skillNameInputText: PropTypes.string,
    onSkillNameChange: PropTypes.func,
    skillLevelRadio: PropTypes.string,
    onSkillLevelChange: PropTypes.func,
    skills: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired
    })),
    onAddSkillClick: PropTypes.func
}

export default FormSection