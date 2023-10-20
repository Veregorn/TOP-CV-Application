import '../styles/NavBar.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <ol className='cd-multi-steps'>
                <li className='breadcrumb-item current'><a href='#0'>General Info</a></li>
                <li className='breadcrumb-item'><a href='#0'>Education</a></li>
                <li className='breadcrumb-item'><a href='#0'>Practical Exp</a></li>
                <li className='breadcrumb-item'><a href='#0'>Skills</a></li>
                <li className='breadcrumb-item'><a href='#0'>Contact</a></li>
                <li className='breadcrumb-item'><a href='#0'>Hobbies</a></li>
            </ol>
        </nav>
    )
}

export default NavBar