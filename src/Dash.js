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
import Prof from './Prof';
import TransTab from './TransTab';

const Dash = () => {
    
    return (
        
        <>
        <Router>
        <div className="d-flex justify-content-start " id="flexb">
            <Side />
            <Routes>
                <Route path="/" element={<><Main/><Profile/></>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/prof" element={<Prof/>}/>
                <Route path="/trans" element={<TransTab/>}/>
            </Routes>
        </div>
        </Router>
       </>
       );
}

export default Dash;