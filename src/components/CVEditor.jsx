import '../styles/CVEditor.css'
import CVForm from './CVForm'
import CVPreview from './CVPreview'
import { useState } from 'react'
import PropTypes from 'prop-types'

function CVEditor(props) {

    // Ideally, state variables would be generated dynamically from the SECTION_DATA array, but I don't know how to do that yet
    
    // General information state variables
    const [nameInputText, setNameInputText] = useState(''); // State for the name input
    const [emailInputText, setEmailInputText] = useState(''); // State for the email input
    const [phoneInputText, setPhoneInputText] = useState(''); // State for the phone input
    const [addressInputText, setAddressInputText] = useState(''); // State for the address input
    const [postalCodeInputText, setPostalCodeInputText] = useState(''); // State for the postal code input
    const [cityInputText, setCityInputText] = useState(''); // State for the city input
    const [countryInputText, setCountryInputText] = useState(''); // State for the country input
    const [birthDateInputText, setBirthDateInputText] = useState(''); // State for the birth date input
    const [genderInputText, setGenderInputText] = useState(''); // State for the gender input
    const [photo, setPhoto] = useState(''); // State for the photo input
    
    // Education state variables
    const [schoolInputText, setSchoolInputText] = useState(''); // State for the school input
    const [studiesTitleInputText, setStudiesTitleInputText] = useState(''); // State for the studies title input
    const [studiesStartDateSelect, setStudiesStartDateSelect] = useState(''); // State for the studies start date input
    const [studiesEndDateSelect, setStudiesEndDateSelect] = useState(''); // State for the studies end date input
    const [studiesDescriptionInputText, setStudiesDescriptionInputText] = useState(''); // State for the studies description input
    const [studies, setStudies] = useState([]); // State for the studies array
    const [studiesId, setStudiesId] = useState(0); // State for the studies id
    
    // Experience state variables
    const [companyInputText, setCompanyInputText] = useState(''); // State for the company input
    const [jobPositionInputText, setJobPositionInputText] = useState(''); // State for the job title input
    const [jobStartDateSelect, setJobStartDateSelect] = useState(''); // State for the job start date input
    const [jobEndDateSelect, setJobEndDateSelect] = useState(''); // State for the job end date input
    const [jobDescriptionInputText, setJobDescriptionInputText] = useState(''); // State for the job description input
    const [jobs, setJobs] = useState([]); // State for the jobs array
    const [jobsId, setJobsId] = useState(0); // State for the jobs id

    // Skills state variables
    const [skillNameInputText, setSkillNameInputText] = useState(''); // State for the skill name input
    const [skillLevelRadio, setSkillLevelRadio] = useState('beginner'); // State for the skill level radio buttons
    const [skills, setSkills] = useState([]); // State for the skills array
    const [skillsId, setSkillsId] = useState(0); // State for the skills id

    // Contact state variables
    // Hobbies state variables

    // General information fields change handlers
    const handleNameInputChange = (event) => {
        setNameInputText(event.target.value);
    }

    const handleEmailInputChange = (event) => {
        setEmailInputText(event.target.value);
    }

    const handlePhoneInputChange = (event) => {
        setPhoneInputText(event.target.value);
    }

    const handleAddressInputChange = (event) => {
        setAddressInputText(event.target.value);
    }

    const handlePostalCodeInputChange = (event) => {
        setPostalCodeInputText(event.target.value);
    }

    const handleCityInputChange = (event) => {
        setCityInputText(event.target.value);
    }

    const handleCountryInputChange = (event) => {
        setCountryInputText(event.target.value);
    }

    const handleBirthDateInputChange = (event) => {
        setBirthDateInputText(event.target.value);
    }

    const handleGenderInputChange = (event) => {
        setGenderInputText(event.target.value);
    }

    const handlePhotoInputChange = (event) => {
        const image = event.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setPhoto(reader.result);
        }

        if (image) {
            reader.readAsDataURL(image);
        }
    }

    // Education fields change handlers
    const handleSchoolInputChange = (event) => {
        setSchoolInputText(event.target.value);
    }

    const handleStudiesTitleInputChange = (event) => {
        setStudiesTitleInputText(event.target.value);
    }

    const handleStudiesStartDateSelectChange = (event) => {
        setStudiesStartDateSelect(event.target.value);
    }

    const handleStudiesEndDateSelectChange = (event) => {
        setStudiesEndDateSelect(event.target.value);
    }

    const handleStudiesDescriptionInputChange = (event) => {
        setStudiesDescriptionInputText(event.target.value);
    }

    const handleAddStudiesClick = () => {
        setStudies([...studies, {id: studiesId, school: schoolInputText, title: studiesTitleInputText, startDate: studiesStartDateSelect, endDate: studiesEndDateSelect, description: studiesDescriptionInputText}]);
        setStudiesId(studiesId + 1);
        setSchoolInputText('');
        setStudiesTitleInputText('');
        setStudiesStartDateSelect('');
        setStudiesEndDateSelect('');
        setStudiesDescriptionInputText('');
    }

    // Experience fields change handlers
    const handleCompanyInputChange = (event) => {
        setCompanyInputText(event.target.value);
    }

    const handleJobPositionInputChange = (event) => {
        setJobPositionInputText(event.target.value);
    }

    const handleJobStartDateSelectChange = (event) => {
        setJobStartDateSelect(event.target.value);
    }

    const handleJobEndDateSelectChange = (event) => {
        setJobEndDateSelect(event.target.value);
    }

    const handleJobDescriptionInputChange = (event) => {
        setJobDescriptionInputText(event.target.value);
    }

    const handleAddJobClick = () => {
        setJobs([...jobs, {id: jobsId, company: companyInputText, position: jobPositionInputText, startDate: jobStartDateSelect, endDate: jobEndDateSelect, description: jobDescriptionInputText}]);
        setJobsId(jobsId + 1);
        setCompanyInputText('');
        setJobPositionInputText('');
        setJobStartDateSelect('');
        setJobEndDateSelect('');
        setJobDescriptionInputText('');
    }

    // Skills fields change handlers
    const handleSkillNameInputChange = (event) => {
        setSkillNameInputText(event.target.value);
    }

    const handleSkillLevelRadioChange = (event) => {
        setSkillLevelRadio(event.target.value);
    }

    const handleAddSkillClick = () => {
        setSkills([...skills, {id: skillsId, name: skillNameInputText, level: skillLevelRadio}]);
        setSkillsId(skillsId + 1);
        setSkillNameInputText('');
        setSkillLevelRadio('Beginner');
    }

    return (
        <div className='book-style'>
            <CVForm 
                cuSection={props.cuSection} 
                onNextClick={props.onNextClick} 
                // General information props
                nameInputText={nameInputText} 
                onNameChange={handleNameInputChange} 
                emailInputText={emailInputText} 
                onEmailChange={handleEmailInputChange} 
                phoneInputText={phoneInputText} 
                onPhoneChange={handlePhoneInputChange} 
                addressInputText={addressInputText} 
                onAddressChange={handleAddressInputChange} 
                postalCodeInputText={postalCodeInputText} 
                onPostalCodeChange={handlePostalCodeInputChange} 
                cityInputText={cityInputText} 
                onCityChange={handleCityInputChange} 
                countryInputText={countryInputText} 
                onCountryChange={handleCountryInputChange} 
                birthDateInputText={birthDateInputText} 
                onBirthDateChange={handleBirthDateInputChange} 
                genderInputText={genderInputText} 
                onGenderChange={handleGenderInputChange} 
                photoImage={photo} 
                onPhotoChange={handlePhotoInputChange} 
                // Education props
                schoolInputText={schoolInputText} 
                onSchoolChange={handleSchoolInputChange} 
                studiesTitleInputText={studiesTitleInputText} 
                onStudiesTitleChange={handleStudiesTitleInputChange} 
                studiesStartDateSelect={studiesStartDateSelect} 
                onStudiesStartDateChange={handleStudiesStartDateSelectChange} 
                studiesEndDateSelect={studiesEndDateSelect} 
                onStudiesEndDateChange={handleStudiesEndDateSelectChange} 
                studiesDescriptionInputText={studiesDescriptionInputText} 
                onStudiesDescriptionChange={handleStudiesDescriptionInputChange} 
                studies={studies} 
                onAddStudiesClick={handleAddStudiesClick} 
                // Experience props
                companyInputText={companyInputText} 
                onCompanyChange={handleCompanyInputChange} 
                jobPositionInputText={jobPositionInputText} 
                onJobPositionChange={handleJobPositionInputChange} 
                jobStartDateSelect={jobStartDateSelect} 
                onJobStartDateChange={handleJobStartDateSelectChange} 
                jobEndDateSelect={jobEndDateSelect} 
                onJobEndDateChange={handleJobEndDateSelectChange} 
                jobDescriptionInputText={jobDescriptionInputText} 
                onJobDescriptionChange={handleJobDescriptionInputChange} 
                jobs={jobs} 
                onAddJobClick={handleAddJobClick} 
                // Skills props
                skillNameInputText={skillNameInputText} 
                onSkillNameChange={handleSkillNameInputChange} 
                skillLevelRadio={skillLevelRadio} 
                onSkillLevelChange={handleSkillLevelRadioChange} 
                skills={skills} 
                onAddSkillClick={handleAddSkillClick} 
            />
            <CVPreview 
                // General information props
                namePreviewText={nameInputText} 
                emailPreviewText={emailInputText} 
                phonePreviewText={phoneInputText} 
                addressPreviewText={addressInputText} 
                postalCodeInputText={postalCodeInputText} 
                cityPreviewText={cityInputText} 
                countryPreviewText={countryInputText} 
                birthDatePreviewText={birthDateInputText} 
                genderPreviewText={genderInputText} 
                photoImage={photo} 
                // Education props
                schoolPreviewText={schoolInputText} 
                studiesTitlePreviewText={studiesTitleInputText} 
                studiesStartDatePreviewText={studiesStartDateSelect} 
                studiesEndDatePreviewText={studiesEndDateSelect} 
                studiesDescriptionPreviewText={studiesDescriptionInputText} 
                studies={studies}
                // Experience props
                companyPreviewText={companyInputText} 
                jobPositionPreviewText={jobPositionInputText} 
                jobStartDatePreviewText={jobStartDateSelect} 
                jobEndDatePreviewText={jobEndDateSelect} 
                jobDescriptionPreviewText={jobDescriptionInputText} 
                jobs={jobs} 
                // Skills props
                skills={skills} 
                skillNamePreviewText={skillNameInputText} 
                skillLevelPreviewText={skillLevelRadio} 
            />
        </div>
    )
}

CVEditor.propTypes = {
    cuSection: PropTypes.number.isRequired,
    onNextClick: PropTypes.func.isRequired
}

export default CVEditor