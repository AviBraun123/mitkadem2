import './App.css';
import Login from './Log_in';
import Registration from './Registration';
import {useState} from "react"
import {Outlet, Link} from 'react-router-dom'

export default function App() {

  

  return (
    <>
      <div className=".d-lg-none .d-xl-block" id="title">
        Welcome to CriChæt &nbsp;
        <i className="bi bi-emoji-laughing"></i>
      </div>
      <div className="App">
        <img src="logo_chat.png" id="logo" alt="..."></img>
      </div>
      <div>
        <img src="cricket.gif" id="cricki" alt="..."></img>
      </div>
      <div className='App'>
            
        </div>
      <Outlet></Outlet>
    </>
  );
}
