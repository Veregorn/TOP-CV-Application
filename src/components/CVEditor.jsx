import '../styles/CVEditor.css'
import CVForm from './CVForm'
import CVPreview from './CVPreview'
import { useState } from 'react'

function CVEditor() {

    const [nameInputText, setNameInputText] = useState(''); // State for the name input

    const handleNameInputChange = (event) => {
        setNameInputText(event.target.value);
    }

    return (
        <div className='book-style'>
            <CVForm 
                nameInputText={nameInputText}
                onNameChange={handleNameInputChange}
            />
            <CVPreview 
                namePreviewText={nameInputText}
            />
        </div>
    )
}

export default CVEditor