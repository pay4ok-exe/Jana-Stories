import logo from '../logo.png'
import '../Header.css'

function Header(){
    return(
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Jana Stories Logo" className="logo" />
            </div>
            {/* <h1 className="header-title">Jana Stories</h1> */}
        </header>
    )
}

export default Header;