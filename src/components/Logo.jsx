import logo from '../assets/images/cvonthego-logo.png'
import '../styles/Logo.css'

function Logo() {
    return (
        <div className='logo-div'>
            <img src={logo} className="logo-img" alt="CV on the go logo" />
            <a href='../index.html'><h1 className='logo-h1'>On The Go</h1></a>
        </div>
    )
}

export default Logo