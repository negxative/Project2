import React from 'react';
import './Dash.css';
import Main from './Main';
import Profile from './Profile';
import Side from './Side';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Sidebar from './Sidebar';
import Prof from './Prof';

const Dash = () => {
    
    return (
        
        <>
        <Router>
        <div class="d-flex justify-content-start " id="flexb">
            <Side />
            <Routes>
                <Route path="/" element={<><Main/><Profile/></>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/prof" element={<Prof/>}/>
            </Routes>
        </div>
        </Router>
       </>
       );
}

export default Dash;