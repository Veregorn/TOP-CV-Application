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
            return (
                <div className='field'>
                    {props.value == '' ? <p>{props.value}</p> : <p>{formatDate(props.value)}</p>}
                </div>
            )
    } else if (props.id == 'gi-photo-preview') {
        return (
            <div className='field'>
                {!props.value ? <p>No photo selected</p> : <img src={props.value} alt='Profile photo' />}
            </div>
        )
    } else if (props.id == 'x-preview' || props.id == 'instagram-preview' || props.id == 'linkedin-preview' || props.id == 'github-preview' || props.id == 'youtube-preview' || props.id == 'dribbble-preview' || props.id == 'behance-preview' || props.id == 'twitch-preview') {
        return (
            <div className='field'>
                {props.value != '' && <img src={props.imageURL} />}
                {props.value != '' && <b>{props.serviceURL}</b>}
                {props.value != '' && <p>{'/' + props.value}</p>}
            </div>
        )
    } else if (props.id == 'traveling-preview' || props.id == 'music-preview' || props.id == 'reading-preview' || props.id == 'gaming-preview' || props.id == 'bicycling-preview' || props.id == 'running-preview' || props.id == 'cooking-preview' || props.id == 'shopping-preview' || props.id == 'dancing-preview' || props.id == 'swimming-preview' || props.id == 'painting-preview' || props.id == 'photography-preview' || props.id == 'fishing-preview' || props.id == 'hiking-preview' || props.id == 'yoga-preview' || props.id == 'surfing-preview' || props.id == 'skiing-preview' || props.id == 'gym-preview' || props.id == 'movies-preview' || props.id == 'ball-sports-preview') {
        return (
            <div className='field'>
                <img className='hobby-image-preview' src={props.imageURL} alt={props.value} />
                <p>{props.value}</p>
            </div>
        )
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
    id: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    serviceURL: PropTypes.string
}

export default CVFieldPreview