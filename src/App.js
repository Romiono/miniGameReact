import React from "react";
import "./styles/App.css";
import logo from "./images/logo.png";
function App() {
  return (
    <div className="App">
        <header className="headerStyle">
            <img className="logoImage" src= {logo} alt="logo.png"/>
            <nav className="navStyle">
                <a href="#" className="linkStyle">Главная</a>
                <a href="/games" className="linkStyle">Игры</a>
                <a href="/signIn" className="linkStyle">Войти</a>
            </nav>
        </header>
    </div>
  );
}

export default App;
