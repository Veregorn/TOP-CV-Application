import '../styles/NavBar.css'

function NavBar() {
    return (
        <nav className='navbar'>
            <ol className='cd-multi-steps text-center count'>
                <li className='visited'><a href="#0">General Info</a></li>
                <li className='visited'><a href="#0">Education</a></li>
                <li className='current'><a href="#0">Practical Exp</a></li>
                <li><a href="#0">Skills</a></li>
                <li><a href="#0">Contact</a></li>
                <li><a href="#0">Hobbies</a></li>
            </ol>
        </nav>
    )
}

export default NavBar