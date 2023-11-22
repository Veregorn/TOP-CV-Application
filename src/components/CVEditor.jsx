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
    // Skills state variables
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
        console.log(studies);
        setStudiesId(studiesId + 1);
        setSchoolInputText('');
        setStudiesTitleInputText('');
        setStudiesStartDateSelect('');
        setStudiesEndDateSelect('');
        setStudiesDescriptionInputText('');
    }

    // Experience input change handlers

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
            />
        </div>
    )
}

CVEditor.propTypes = {
    cuSection: PropTypes.number.isRequired,
    onNextClick: PropTypes.func.isRequired
}

export default CVEditor