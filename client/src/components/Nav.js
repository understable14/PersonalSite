import { Link } from 'react-router-dom';

const Nav = ({language, onHideNav}) => {

  return (
    <div className='nav-bar'>
      <Link to="/" className="header-nav" onClick={onHideNav}>Home</Link>
      <Link to="/music" className="header-nav" onClick={onHideNav}>{language ? "Music" : "Música"}</Link>
      <Link to="/community" className="header-nav" onClick={onHideNav}>{language ? "Community" : "Comunidade"}</Link>
      <Link to="/youniverse" className="header-nav" onClick={onHideNav}>Youniverse</Link>
    </div>
  )
}

export default Nav
