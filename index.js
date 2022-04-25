import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import './index.css';
import './first_background.css';
import App from './App';
import Chat from './chat';
import Log_in from './Log_in';
import Registration from './Registration';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Log_in />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
