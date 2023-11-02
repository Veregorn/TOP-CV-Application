import '../styles/CVPreview.css'
import PreviewSection from './PreviewSection'
import PropTypes from 'prop-types'
import SECTION_DATA from '../assets/data'

function CVPreview({ 
    namePreviewText, 
    emailPreviewText,
    phonePreviewText,
    addressPreviewText,
    postalCodeInputText,
    cityPreviewText,
    countryPreviewText,
    birthDatePreviewText,
    genderPreviewText,
    photoImage 
}) {
    
    const sections = SECTION_DATA.map((section) => {
        
        // If the section id is 'generalInfo', then we want to pass the namePreviewText and onNameChange props to the PreviewSection component
        if (section.id == 'generalInfo') {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')}
                    title={section.longTitle} 
                    fields={section.fields} 
                    namePreviewText={namePreviewText}
                    emailPreviewText={emailPreviewText}
                    phonePreviewText={phonePreviewText} 
                    addressPreviewText={addressPreviewText} 
                    postalCodeInputText={postalCodeInputText} 
                    cityPreviewText={cityPreviewText} 
                    countryPreviewText={countryPreviewText} 
                    birthDatePreviewText={birthDatePreviewText} 
                    genderPreviewText={genderPreviewText} 
                    photoImage={photoImage} 
                />
            )
        }
        else {
            return (
                <PreviewSection 
                    key={section.id + ('-preview')} 
                    title={section.longTitle} 
                    fields={section.fields} 
                />
            )
        }
    })

    return (
        <div className='preview'>
            {sections}
        </div>
    )
    
}

CVPreview.propTypes = {
    namePreviewText: PropTypes.string.isRequired,
    emailPreviewText: PropTypes.string.isRequired,
    phonePreviewText: PropTypes.string.isRequired,
    addressPreviewText: PropTypes.string.isRequired,
    postalCodeInputText: PropTypes.string.isRequired,
    cityPreviewText: PropTypes.string.isRequired,
    countryPreviewText: PropTypes.string.isRequired,
    birthDatePreviewText: PropTypes.string.isRequired,
    genderPreviewText: PropTypes.string.isRequired,
    photoImage: PropTypes.string
}

export default CVPreview