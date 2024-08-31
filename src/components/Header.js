import logo from '../logo.png';
import '../Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Jana Stories Logo" className="logo" />
      </div>
      <button className="button-36">Get Sourse Code</button>
    </header>
  );
}

export default Header;
