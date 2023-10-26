import '../styles/NavBar.css'
import SECTION_DATA from '../assets/data'

function NavBar() {
    
    const sections = SECTION_DATA.map((section, index) => {
        return (
            <li key={section.id} className={index == 0 ? 'current' : ''}><button>{section.buttonTitle}</button></li>
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

export default NavBar