import '../styles/PreviewSection.css'
import CVFieldPreview from './CVFieldPreview'
import PropTypes from 'prop-types'

function PreviewSection({ 
    title, 
    fields,
    // General information props
    namePreviewText, 
    emailPreviewText,
    phonePreviewText,
    addressPreviewText,
    postalCodeInputText,
    cityPreviewText,
    countryPreviewText,
    birthDatePreviewText,
    genderPreviewText,
    photoImage,
    // Education props
    schoolPreviewText,
    studiesTitlePreviewText,
    studiesStartDatePreviewText,
    studiesEndDatePreviewText,
    studiesDescriptionPreviewText,
    studies
 }) {
    const sectionFields = fields.map((field) => {
        // General information fields
        if (field.id == 'gi-name') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={namePreviewText} 
                />
            )
        } else if (field.id == 'gi-email') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={emailPreviewText} 
                />
            )
        } else if (field.id == 'gi-phone') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={phonePreviewText} 
                />
            )
        } else if (field.id == 'gi-address') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={addressPreviewText} 
                />
            )
        } else if (field.id == 'gi-postal') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={postalCodeInputText} 
                />
            )
        } else if (field.id == 'gi-city') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={cityPreviewText} 
                />
            )
        } else if (field.id == 'gi-country') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={countryPreviewText} 
                />
            )
        } else if (field.id == 'gi-birth') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={birthDatePreviewText} 
                />
            )
        } else if (field.id == 'gi-gender') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={genderPreviewText} 
                />
            )
        } else if (field.id == 'gi-photo') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')} 
                    value={photoImage} 
                />
            )
        }
        // Education fields
        else if (field.id == 'ed-school') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={schoolPreviewText} 
                />
            )
        } else if (field.id == 'ed-study-title') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesTitlePreviewText} 
                />
            )
        } else if (field.id == 'ed-start-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesStartDatePreviewText} 
                />
            )
        } else if (field.id == 'ed-end-date') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesEndDatePreviewText} 
                />
            )
        } else if (field.id == 'ed-description') {
            return (
                <CVFieldPreview 
                    key={field.id + ('-preview')} 
                    id={field.id + ('-preview')}
                    value={studiesDescriptionPreviewText} 
                />
            )
        }
    })

    if (!studies) {
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                {sectionFields}
            </div>
        )
    } else {
        const studiesFields = studies.map((study) => {
            return (
                <div key={study.id + ('-preview')}>
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.school} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.title} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.startDate} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.endDate} 
                    />
                    <CVFieldPreview 
                        id={study.id + ('-preview')}
                        value={study.description} 
                    />
                </div>
            )
        })
        
        return (
            <div className='preview-section'>
                <h3>{title}</h3>
                {sectionFields}
                {studiesFields}
            </div>
        )
    }

}

PreviewSection.propTypes = {
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        required: PropTypes.bool.isRequired
    })).isRequired,
    // General information props
    namePreviewText: PropTypes.string,
    emailPreviewText: PropTypes.string,
    phonePreviewText: PropTypes.string,
    addressPreviewText: PropTypes.string,
    postalCodeInputText: PropTypes.string,
    cityPreviewText: PropTypes.string,
    countryPreviewText: PropTypes.string,
    birthDatePreviewText: PropTypes.string,
    genderPreviewText: PropTypes.string,
    photoImage: PropTypes.string,
    // Education props
    schoolPreviewText: PropTypes.string,
    studiesTitlePreviewText: PropTypes.string,
    studiesStartDatePreviewText: PropTypes.string,
    studiesEndDatePreviewText: PropTypes.string,
    studiesDescriptionPreviewText: PropTypes.string,
    studies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        school: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }))
}

export default PreviewSection