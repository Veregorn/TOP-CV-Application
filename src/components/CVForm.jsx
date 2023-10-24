import '../styles/CVForm.css'
import Label from './Label'

function CVForm() {
    return (
        <div className='form'>
            <h2>General Information</h2>
            <Label text='First Name' />
            <Label text='Last Name' />
            <Label text='Email' />
            <Label text='Phone' />
            <Label text='Address' />
            <Label text='Postal Code' />
            <Label text='City' />
            <Label text='Country' />
        </div>
    )
}

export default CVForm