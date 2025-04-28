import './HeaderLogo.css';
import logo from '../../assets/imgs/logo.svg';

function HeaderLogo(){
    return(
        <div className="logo">
          <img src={logo} 
          alt="logo" 
          className="logo-img"></img>
          <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default HeaderLogo;