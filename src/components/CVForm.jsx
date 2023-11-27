import '../styles/CVForm.css'
import FormSection from './FormSection'
import SECTION_DATA from '../assets/data'
import PropTypes from 'prop-types'

function CVForm({ 
    cuSection,
    onNextClick,
    // General Info
    nameInputText, 
    onNameChange, 
    emailInputText, 
    onEmailChange, 
    phoneInputText, 
    onPhoneChange, 
    addressInputText, 
    onAddressChange, 
    postalCodeInputText, 
    onPostalCodeChange,
    cityInputText, 
    onCityChange, 
    countryInputText, 
    onCountryChange, 
    birthDateInputText,
    onBirthDateChange, 
    genderInputText, 
    onGenderChange, 
    photoImage,
    onPhotoChange,
    // Education
    schoolInputText,
    onSchoolChange,
    studiesTitleInputText,
    onStudiesTitleChange,
    studiesStartDateSelect,
    onStudiesStartDateChange,
    studiesEndDateSelect,
    onStudiesEndDateChange,
    studiesDescriptionInputText,
    onStudiesDescriptionChange,
    studies,
    onAddStudiesClick,
    // Experience
    companyInputText,
    onCompanyChange,
    jobPositionInputText,
    onJobPositionChange,
    jobStartDateSelect,
    onJobStartDateChange,
    jobEndDateSelect,
    onJobEndDateChange,
    jobDescriptionInputText,
    onJobDescriptionChange,
    jobs,
    onAddJobClick
    // Skills
    // Contact
    // Hobbies
}) {
    
    const sections = SECTION_DATA.map((section, index) => {
        
        // If the section id is 'generalInfo', then we want to pass the nameInputText and onNameChange props to the FormSection component
        if (section.id == 'generalInfo') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={index == cuSection ? 'section current' : 'section'} 
                    fields={section.fields} 
                    nameInputText={nameInputText}
                    onNameChange={onNameChange} 
                    emailInputText={emailInputText} 
                    onEmailChange={onEmailChange} 
                    phoneInputText={phoneInputText} 
                    onPhoneChange={onPhoneChange} 
                    addressInputText={addressInputText} 
                    onAddressChange={onAddressChange} 
                    postalCodeInputText={postalCodeInputText} 
                    onPostalCodeChange={onPostalCodeChange} 
                    cityInputText={cityInputText} 
                    onCityChange={onCityChange} 
                    countryInputText={countryInputText} 
                    onCountryChange={onCountryChange} 
                    birthDateInputText={birthDateInputText} 
                    onBirthDateChange={onBirthDateChange} 
                    genderInputText={genderInputText} 
                    onGenderChange={onGenderChange} 
                    photoImage={photoImage} 
                    onPhotoChange={onPhotoChange} 
                    onNextClick={onNextClick}
                />
            )
        } else if (section.id == 'education') {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={index == cuSection ? 'section current' : 'section'} 
                    fields={section.fields} 
                    schoolInputText={schoolInputText} 
                    onSchoolChange={onSchoolChange} 
                    studiesTitleInputText={studiesTitleInputText} 
                    onStudiesTitleChange={onStudiesTitleChange} 
                    studiesStartDateSelect={studiesStartDateSelect} 
                    onStudiesStartDateChange={onStudiesStartDateChange} 
                    studiesEndDateSelect={studiesEndDateSelect} 
                    onStudiesEndDateChange={onStudiesEndDateChange} 
                    studiesDescriptionInputText={studiesDescriptionInputText} 
                    onStudiesDescriptionChange={onStudiesDescriptionChange} 
                    studies={studies} 
                    onNextClick={onNextClick} 
                    onAddStudiesClick={onAddStudiesClick} 
                />
            )
        } else if (section.id == 'practicalExp') {
            return ( 
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={index == cuSection ? 'section current' : 'section'} 
                    fields={section.fields} 
                    companyInputText={companyInputText} 
                    onCompanyChange={onCompanyChange} 
                    jobPositionInputText={jobPositionInputText} 
                    onJobPositionChange={onJobPositionChange} 
                    jobStartDateSelect={jobStartDateSelect} 
                    onJobStartDateChange={onJobStartDateChange} 
                    jobEndDateSelect={jobEndDateSelect} 
                    onJobEndDateChange={onJobEndDateChange} 
                    jobDescriptionInputText={jobDescriptionInputText} 
                    onJobDescriptionChange={onJobDescriptionChange} 
                    jobs={jobs} 
                    onNextClick={onNextClick} 
                    onAddJobClick={onAddJobClick} 
                />
            )
        } else {
            return (
                <FormSection 
                    key={section.id + ('-form')} 
                    title={section.longTitle} 
                    className={index == 0 ? 'form-section current' : 'form-section'} 
                    fields={section.fields} 
                    onNextClick={onNextClick} 
                />
            )
        }
    })

    return (
        <div className='form'>
            {sections}
        </div>
    )
}

CVForm.propTypes = {
    cuSection: PropTypes.number.isRequired,
    onNextClick: PropTypes.func.isRequired,
    // General Info prop types
    nameInputText: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    emailInputText: PropTypes.string.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    phoneInputText: PropTypes.string.isRequired,
    onPhoneChange: PropTypes.func.isRequired,
    addressInputText: PropTypes.string.isRequired,
    onAddressChange: PropTypes.func.isRequired,
    postalCodeInputText: PropTypes.string.isRequired,
    onPostalCodeChange: PropTypes.func.isRequired,
    cityInputText: PropTypes.string.isRequired,
    onCityChange: PropTypes.func.isRequired,
    countryInputText: PropTypes.string.isRequired,
    onCountryChange: PropTypes.func.isRequired,
    birthDateInputText: PropTypes.string.isRequired,
    onBirthDateChange: PropTypes.func.isRequired,
    genderInputText: PropTypes.string.isRequired,
    onGenderChange: PropTypes.func.isRequired,
    photoImage: PropTypes.string,
    onPhotoChange: PropTypes.func.isRequired,
    // Education prop types
    schoolInputText: PropTypes.string.isRequired,
    onSchoolChange: PropTypes.func.isRequired,
    studiesTitleInputText: PropTypes.string.isRequired,
    onStudiesTitleChange: PropTypes.func.isRequired,
    studiesStartDateSelect: PropTypes.string.isRequired,
    onStudiesStartDateChange: PropTypes.func.isRequired,
    studiesEndDateSelect: PropTypes.string.isRequired,
    onStudiesEndDateChange: PropTypes.func.isRequired,
    studiesDescriptionInputText: PropTypes.string.isRequired,
    onStudiesDescriptionChange: PropTypes.func.isRequired,
    studies: PropTypes.array.isRequired,
    onAddStudiesClick: PropTypes.func.isRequired,
    // Experience prop types
    companyInputText: PropTypes.string.isRequired,
    onCompanyChange: PropTypes.func.isRequired,
    jobPositionInputText: PropTypes.string.isRequired,
    onJobPositionChange: PropTypes.func.isRequired,
    jobStartDateSelect: PropTypes.string.isRequired,
    onJobStartDateChange: PropTypes.func.isRequired,
    jobEndDateSelect: PropTypes.string.isRequired,
    onJobEndDateChange: PropTypes.func.isRequired,
    jobDescriptionInputText: PropTypes.string.isRequired,
    onJobDescriptionChange: PropTypes.func.isRequired,
    jobs: PropTypes.array.isRequired,
    onAddJobClick: PropTypes.func.isRequired
    // Skills prop types
    // Contact prop types
    // Hobbies prop types
}

export default CVForm