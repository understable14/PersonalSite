import menuIcon from "../assets/menuIcon.png";
import portugueseIcon from "../assets/portuguese.png";
import englishIcon from "../assets/english.png";

const Header = ({onShowNav, showNav, onShowAuth, showAuth, onLogOut, authSession, username, onSetLanguage}) => {

  const handleAuthClick = () => 
  {
    if(authSession)
    {
      onLogOut();
    }
    else
    {
      onShowAuth();
    }
  }

  return (
    <header className="header">
        <div className='nav-bar-control'>
          <button className='nav-control-btn' onClick={onShowNav}><img src={menuIcon}></img></button>
        </div>
        <div className="language-control">
              <button onClick={() => onSetLanguage(false)}><img src={portugueseIcon}></img></button>
              <button onClick={() => onSetLanguage(true)}><img src={englishIcon}></img></button>
          </div>
        <div className="authentication-control">
          {authSession && <h3>{`Hello ${username}`}</h3>}
          <button className="log-in-btn" onClick={handleAuthClick}>{authSession ? "Log out" : "Log in"}</button>
        </div>
    </header>
  )
}

export default Header
