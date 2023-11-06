import '../styles/NavBar.css'
import SECTION_DATA from '../assets/data'
import PropTypes from 'prop-types'

function NavBar(props) {
    
    const sections = SECTION_DATA.map((section, index) => {
        return (
            <li key={section.id} className={index == props.cuSection ? 'current' : ''}><button>{section.buttonTitle}</button></li>
        )
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
    cuSection: PropTypes.number.isRequired
}

export default NavBar