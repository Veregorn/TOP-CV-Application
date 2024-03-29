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
                <div className='gi-field-container'>
                    <p className='gi-label'>{props.label}</p>
                    {props.value == '' ? <p className='gi-value'>{props.value}</p> : <p className='gi-value'>{formatDate(props.value)}</p>}
                </div>
            )
    } else if (props.id.startsWith('gi-')) {
        if (props.value != '') {
            return (
                <div className='gi-field-container'>
                    <p className='gi-label'>{props.label}</p>
                    <p className='gi-value'>{props.value}</p>
                </div>
            )
        }
    } else if (props.id == 'x-preview' || props.id == 'instagram-preview' || props.id == 'linkedin-preview' || props.id == 'github-preview' || props.id == 'youtube-preview' || props.id == 'dribbble-preview' || props.id == 'behance-preview' || props.id == 'twitch-preview') {
        if (props.value != '') {
            return (
                <div className='contact-field'>
                    <div className='contact-icon'>
                        <img src={props.imageURL} className='contact-image' />
                    </div>
                    <div className='contact-info'>
                        <b>{props.serviceURL}</b>
                        <p>{'/' + props.value}</p>
                    </div>
                </div>
            )
        }
    } else if (props.id == 'traveling-preview' || props.id == 'music-preview' || props.id == 'reading-preview' || props.id == 'gaming-preview' || props.id == 'bicycling-preview' || props.id == 'running-preview' || props.id == 'cooking-preview' || props.id == 'shopping-preview' || props.id == 'dancing-preview' || props.id == 'swimming-preview' || props.id == 'painting-preview' || props.id == 'photography-preview' || props.id == 'fishing-preview' || props.id == 'hiking-preview' || props.id == 'yoga-preview' || props.id == 'surfing-preview' || props.id == 'skiing-preview' || props.id == 'gym-preview' || props.id == 'movies-preview' || props.id == 'ball-sports-preview') {
        return (
            <div className='hobbies-field'>
                <img className='hobby-image-preview' src={props.imageURL} alt={props.value} />
                <p>{props.value}</p>
            </div>
        )
    } else if (props.id.startsWith('skill-level-')) {
        if (props.value == 'beginner') {
            return (
                <div className='stars-container'>
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                </div>
            )
        } else if (props.value == 'elementary') {
            return (
                <div className='stars-container'>
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                </div>
            )
        } else if (props.value == 'intermediate') {
            return (
                <div className='stars-container'>
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                </div>
            )
        } else if (props.value == 'advanced') {
            return (
                <div className='stars-container'>
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/empty-star.png' />
                </div>
            )
        } else if (props.value == 'expert') {
            return (
                <div className='stars-container'>
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                    <img className='star-image' src='../../public/images/filled-star.png' />
                </div>
            )
        }
    } else {
        return (
            <p>{props.value}</p>
        )
    }
}

CVFieldPreview.propTypes = {
    value: PropTypes.string,
    id: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    serviceURL: PropTypes.string,
    label: PropTypes.string
}

export default CVFieldPreview