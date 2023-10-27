import '../styles/CVPreview.css'
import PreviewSection from './PreviewSection'
import PropTypes from 'prop-types'
import SECTION_DATA from '../assets/data'

function CVPreview({ namePreviewText }) {
    
    const sections = SECTION_DATA.map((section) => {
        
        // If the section id is 'generalInfo', then we want to pass the namePreviewText and onNameChange props to the PreviewSection component
        if (section.id == 'generalInfo') {
            return (
                <PreviewSection 
                    key={section.id}
                    title={section.longTitle} 
                    fields={section.fields} 
                    namePreviewText={namePreviewText}
                />
            )
        }
        else {
            return (
                <PreviewSection 
                    key={section.id} 
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
    namePreviewText: PropTypes.string.isRequired
}

export default CVPreview