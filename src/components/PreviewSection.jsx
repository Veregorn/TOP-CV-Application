import '../styles/PreviewSection.css'
import CVFieldPreview from './CVFieldPreview'
import PropTypes from 'prop-types'

function PreviewSection({ 
    title, 
    fields, 
    namePreviewText, 
    emailPreviewText,
    phonePreviewText,
    addressPreviewText,
    postalCodeInputText,
    cityPreviewText,
    countryPreviewText,
    birthDatePreviewText,
    genderPreviewText,
    photoPreviewText
 }) {
    const sectionFields = fields.map((field) => {
        if (field.id == 'gi-name') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={namePreviewText} 
                />
            )
        } else if (field.id == 'gi-email') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={emailPreviewText} 
                />
            )
        } else if (field.id == 'gi-phone') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={phonePreviewText} 
                />
            )
        } else if (field.id == 'gi-address') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={addressPreviewText} 
                />
            )
        } else if (field.id == 'gi-postal') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={postalCodeInputText} 
                />
            )
        } else if (field.id == 'gi-city') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={cityPreviewText} 
                />
            )
        } else if (field.id == 'gi-country') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={countryPreviewText} 
                />
            )
        } else if (field.id == 'gi-birth') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={birthDatePreviewText} 
                />
            )
        } else if (field.id == 'gi-gender') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={genderPreviewText} 
                />
            )
        } else if (field.id == 'gi-photo') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    value={photoPreviewText} 
                />
            )
        }
    })

    return (
        <div className='preview-section'>
            <h3>{title}</h3>
            {sectionFields}
        </div>
    )
}

PreviewSection.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        required: PropTypes.bool.isRequired
    })).isRequired,
    namePreviewText: PropTypes.string,
    emailPreviewText: PropTypes.string,
    phonePreviewText: PropTypes.string,
    addressPreviewText: PropTypes.string,
    postalCodeInputText: PropTypes.string,
    cityPreviewText: PropTypes.string,
    countryPreviewText: PropTypes.string,
    birthDatePreviewText: PropTypes.string,
    genderPreviewText: PropTypes.string,
    photoPreviewText: PropTypes.string
}

export default PreviewSection