import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Koibhi  from './Koibhi';
import { Register } from './Register';
import MediaPage  from './MediaPage'
import { Documents } from "./Documents";
import { Media } from "./Media";
import MetaMask from "./MetaMask";

function App() {
  const[currentForm, setCurrentForm]=useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
    <div className="App">
      
    {/* currentForm ==="login" ? <Login onFormSwitch={toggleForm} />:<Register onFormSwitch={toggleForm} /> */}
    <Router>
      <Routes>
        <Route path = "/" element = {<Koibhi/>}/>
        <Route path = "/Register" element = {<Register/>}/>
        {/* <Route path = "/Login" element = {<Login/>}/> */}
        <Route path = "/MediaPage" element = {<MediaPage/>}/>
        <Route path = "/Media" element = {<Media/>}/>
        <Route path = "/Documents" element = {<Documents/>}/>

      </Routes>
    </Router>

     </div>
  
  )   
  
}

export default App;
