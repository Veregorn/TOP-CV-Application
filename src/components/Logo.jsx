import logo from '../assets/images/cv-on-the-go-logo(80x80).png'
import '../styles/Logo.css'

function Logo() {
    return (
        <div className='logo-div'>
            <img src={logo} className="logo-img" alt="CV on the go logo" />
            <h1 className='logo-h1'>On The Go</h1>
        </div>
    )
}

export default Logo