import '../styles/CVFieldPreview.css'
import PropTypes from 'prop-types'

function formatDate(fecha) {
    const dateObject = new Date(fecha);
    
    // Obtener el día, mes y año
    const dia = String(dateObject.getDate()).padStart(2, '0'); // Añade un cero al inicio si el día es menor a 10
    const mes = String(dateObject.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript van de 0-11, así que se suma 1
    const ano = dateObject.getFullYear();
    
    // Formatear la fecha
    const fechaFormateada = `${dia}-${mes}-${ano}`;
    
    return fechaFormateada;
}
function CVFieldPreview(props) {
    
    if (props.id == 'gi-birth-preview') {
        if (props.value == '') {
            return (
                <div className='field'>
                    <p>{props.value}</p>
                </div>
            )
        } else {
            const formattedDate = formatDate(props.value);
        
            return (
                <div className='field'>
                    <p>{formattedDate}</p>
                </div>
            )
        }
    } else if (props.id == 'gi-photo-preview') {
        if (!props.value) {
            return (
                <div className='field'>
                    <p>No photo selected</p>
                </div>
            )
        } else {
            return (
                <div className='field'>
                    <img src={props.value} alt='Profile photo' />
                </div>
            )
        }
    } else {
        return (
            <div className='field'>
                <p>{props.value}</p>
            </div>
        )
    }
}

CVFieldPreview.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default CVFieldPreview