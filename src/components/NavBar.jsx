import '../styles/NavBar.css'
import SECTION_DATA from '../assets/data'
import PropTypes from 'prop-types'

function NavBar(props) {
    
    const sections = SECTION_DATA.map((section, index) => {
        if (index < props.cuSection) {
            return (
                <li key={section.id} className='visited'><button onClick={() => props.onSectionClick(index)}>{section.buttonTitle}</button></li>
            )
        } else if (index == props.cuSection) {
            return (
                <li key={section.id} className='current'><button onClick={() => props.onSectionClick(index)}>{section.buttonTitle}</button></li>
            )
        }
        else {
            return (
                <li key={section.id}><button onClick={() => props.onSectionClick(index)}>{section.buttonTitle}</button></li>
            )
        }
    })
    
    return (
        <nav className='navbar'>
            <ol className='cd-multi-steps text-center count'>
                {sections}
            </ol>
        </nav>
    )
}

NavBar.propTypes = {
    cuSection: PropTypes.number.isRequired,
    onSectionClick: PropTypes.func.isRequired
}

export default NavBar