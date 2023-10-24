import '../styles/CVEditor.css'
import CVForm from './CVForm'
import CVPreview from './CVPreview'

function CVEditor() {
    return (
        <div className='book-style'>
            <CVForm />
            <CVPreview />
        </div>
    )
}

export default CVEditor