import '../styles/CVPreview.css'
import CVFieldPreview from './CVFieldPreview'

function CVPreview() {
    return (
        <div className='preview'>
            <h2>CVPreview</h2>
            <CVFieldPreview value='John Doe' />
        </div>
    )
}

export default CVPreview