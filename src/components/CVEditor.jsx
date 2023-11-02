import '../styles/CVEditor.css'
import CVForm from './CVForm'
import CVPreview from './CVPreview'
import { useState } from 'react'

function CVEditor() {

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

    return (
        <div className='book-style'>
            <CVForm 
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
            />
            <CVPreview 
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
            />
        </div>
    )
}

export default CVEditor