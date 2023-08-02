import { useState, useEffect } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import MusicPage from './components/MusicPage';
import RandomPage from './components/RandomPage';
import Youniverse from './components/YouniversePage';
import MainPage from './components/MainPage';
import Nav from './components/Nav';
import AuthenticationPage from './components/AuthenticationPage';
import Footer from './components/Footer';


function App() {

  //wtf is going on
  const host = "https://141.147.118.36:8443";

  const [showNav, setShowNav] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

  const [language, setLanguage] = useState(true);

  const [authSession, setAuthSession] = useState(false);
  const [username, setUsername] = useState(null);

  const authenticate = (authType, username, password) => 
  {
    if(authType === "Log In")
    {
      console.log("LOGGIN IN USER: " + username);
      fetch(`${host}/api/user/login`, 
      {
        method: 'POST', 
        body: JSON.stringify({username: username, password: password}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }})
      .then((res) => res.json())
      .then((res) => 
      {
        switch(res.msg)
        {
          case "WrongPsw":
            return;
          case "NotAUser":
            return;
          case "Success":
            setShowAuth(false);
            setAuthSession(true);
            setUsername(username);
          break;
        }
      })
      .catch((err) => console.log("ERROR: " + err))
    }
    else
    {
      console.log("REGISTERING USER : " + username);
      fetch(`${host}/api/user`, 
      {
        method: 'POST',
        body: JSON.stringify({username: username, password: password}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }})
        .then((res) => res.json())
        .then((res) => 
        {
          if(res.msg === "Username taken")
          {
            console.log(res.msg);
            return;
          }
          console.log("Register successfull");
          setShowAuth(false);
          setAuthSession(true);
          setUsername(username);
        })
        .catch((err) => 
        {
          console.log("ERROR: " + err);
          return;
        });
    }
  }

  return (
    <Router>
    <div className='root'>
        <Header 
          onShowNav = {() => {setShowNav(!showNav)}} showNav= {showNav} 
          onShowAuth = {() => {setShowAuth(!showAuth)}} showAuth = {showAuth}
          onLogOut = {() => {setAuthSession(false); setUsername('null')}} authSession = {authSession} username={username}
          onSetLanguage = {(language) => {setLanguage(language)}}
        />
        {showNav ? <Nav language={language} onHideNav = {() => {setShowNav(false)}}/> : ''}
        {showAuth ? <AuthenticationPage 
        onSubmitAuth={(authType, username, password) => {authenticate(authType, username, password) }} 
        language={language} 
        onClose={() => {setShowAuth(false)}}/> : ''}
        <Routes>
        <Route path='/' exact element={
          (
            <>
              <MainPage language={language}/>
            </>
          )}
        />
        <Route path='/music' exact element={
          (
            <>
              <MusicPage language={language}/>
            </>
          )}
        />
        <Route path='/community' exact element={
          (
            <>
              <RandomPage authSession = {authSession} username={username} language={language} host={host}/>
            </>
          )}
        />
        <Route path='/youniverse' exact element={
          (
            <>
              <Youniverse language={language}/>
            </>
          )}
        />
        </Routes>
        <Footer language={language}/>
    </div>
    </Router>
  );
}

export default App;
