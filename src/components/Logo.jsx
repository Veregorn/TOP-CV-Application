import logo from '../assets/images/cvonthego-logo.png'
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