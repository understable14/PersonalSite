import { useState} from "react";
import closeButton from "../assets/closeButton.png"

const AuthenticationPage = ({onSubmitAuth, language, onClose}) => {

  const [authType, setAuthType] = useState("Log In");

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => 
  {
    event.preventDefault();
    onSubmitAuth(authType, username, password);
  };

  return (
    <div className="authentication-page">
        <button className="close-auth" onClick={onClose}><img src={closeButton}></img></button>
        <button className="swap-auth" onClick={() => {(authType === "Log In") ? setAuthType("Register") : setAuthType("Log In")}}>Swap</button>
        <h2>{authType}</h2>
        {(authType === "logIn")
          ?
          <form onSubmit={handleSubmit}>
            <label htmlFor="author">{language ? "Username" : "Nome de usuário"}</label><br></br>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/><br></br>
            <label htmlFor="text">{language ? "Password" : "Palavra passe"}</label><br></br>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br></br>
            <input type="submit" value="Login" />
          </form>
          :
          <form onSubmit={handleSubmit}>
            <label htmlFor="author">{language ? "Username" : "Nome de usuário"}</label><br></br>
            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}/><br></br>
            <label htmlFor="text">{language ? "Password" : "Palavra passe"}</label><br></br>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/><br></br>
            <input type="submit" value="Login" />
        </form>
        }
    </div>
  )
}

export default AuthenticationPage
