import '../styles/CVForm.css'
import FormSection from './FormSection'
import SECTION_DATA from '../assets/data'

function CVForm() {
    
    const sections = SECTION_DATA.map((section, index) => {
        return (
            <FormSection 
                key={section.id} 
                title={section.longTitle} 
                className={index == 0 ? 'section current' : 'section'} 
                fields={section.fields} 
            />
        )
    })

    return (
        <div className='form'>
            {sections}
        </div>
    )
}

export default CVForm