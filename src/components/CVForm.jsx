import '../styles/CVForm.css'
import FormSection from './FormSection'
import SECTION_DATA from '../assets/data'
import PropTypes from 'prop-types';

function CVForm({ nameInputText, onNameChange }) {
    
    const sections = SECTION_DATA.map((section, index) => {
        
        // If the section id is 'generalInfo', then we want to pass the nameInputText and onNameChange props to the FormSection component
        if (section.id == 'generalInfo') {
            return (
                <FormSection 
                    key={section.id} 
                    title={section.longTitle} 
                    className={index == 0 ? 'section current' : 'section'} 
                    fields={section.fields} 
                    nameInputText={nameInputText}
                    onNameChange={onNameChange}
                />
            )
        }
        else {
            return (
                <FormSection 
                    key={section.id} 
                    title={section.longTitle} 
                    className={index == 0 ? 'section current' : 'section'} 
                    fields={section.fields} 
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
    nameInputText: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired
}

export default CVForm