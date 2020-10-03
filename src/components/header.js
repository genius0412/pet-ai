import React from 'react'
import Profile from '../profile.png'
import './header.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

function Header() {
  return (
    <header>
        <div id="header-title">
            <img id="logo" src= {Profile}></img>
            <div id="title">
                PetAI<br/>펫 인공지능
            </div>
        </div>
        <nav>
            <Switch>
                <Route path="/">
                    <Link to="/" className="nav-link">메인</Link>
                    <Link to="/about" className="nav-link">소개</Link>
                    <Link to="/project" className="nav-link">프로젝트</Link>
                </Route>
            </Switch>
            
        </nav>
    </header>
  );
}

export default Header;

/*
<div className="Header">
        <header className="Header-header">
            <div className = "slogan">
                <div className = "logo">
                    <img className = "logo" src = "./media/profile.png" />
                </div>
                <div className = "title">
                    PetAI
                    <br />펫 인공지능
                </div>
            </div>
            <div className = "nav">
                <ul className = "nav">
                    <li id = "navButton1" onclick="location.href='../project'">프로젝트</li>
                    <li id = "navButton2" onclick="location.href='../intro'">소개</li>
                    <li id = "navButton3" onclick="location.href='../main'">메인</li>
                </ul>
            </div>
        </header>
    </div>



    <div id="header-title">
            <img id="logo" src= {Profile}></img>
            <div id="title">
                PetAI<br/>펫 인공지능
            </div>
        </div>
    */