import '../styles/PreviewSection.css'
import CVFieldPreview from './CVFieldPreview'
import PropTypes from 'prop-types'

function PreviewSection({ key, title, fields, namePreviewText}) {
    const sectionFields = fields.map((field) => {
        return (
            <CVFieldPreview 
                key={field.id} 
                value={field.id == 'name' ? namePreviewText : 'John Doe'} 
            />
        )
    })

    return (
        <div className='preview-section' id={key}>
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
    key: PropTypes.string
}

export default PreviewSection