import React from 'react';
import './Dash.css';
import vec from "./Vector.png"
import gp from "./Group.png"
import re from './Re.png'
import sc from './scan.png'
import sd from './send.png'
import rec from './rec.png'
import wall from './wall.png'
import Rea from './Rea.png'
import Reb from './Reb.png'
import Recc from './Recc.png'
import Red from './Red.png'


const Profile = () => {
    return (
        <>  
            <div id="hot"  style={{ margin: "3% 1% 1% 1%", minWidth: "20%",maxWidth:"100%" }}>
                <div class="d-flex justify-content-end flex-row bd-highlight align-items-center">
                    <img src={vec} alt="" style={{ maxHeight: "20px", marginRight: "15px" }} />
                    <img src={gp} alt="" style={{ maxHeight: "40px" }} />
                </div>
                <div class="d-flex justify-content-center flex-column bd-highlight align-items-center mb-4">
                    <img src={re} alt="" style={{ maxHeight: "80px" }} /> <br />
                    <h5>Jonas Kanwald</h5>

                </div>
                <div class="d-flex justify-content-center flex-row bd-highlight align-items-center mb-4" >
                    <button type="button" class="btn btn-primary" style={{ background: "rgba(248, 209, 229, 0)", border: " none" }}>
                        <img id="for" src={wall} alt="" style={{ maxHeight: "40px" }} />
                    </button>
                    <button type="button" class="btn btn-primary" style={{ background: "rgba(248, 209, 229, 0)", border: " none" }}>
                        <img id="for" src={sc} alt="" style={{ maxHeight: "40px" }} />
                    </button>
                    <button type="button" class="btn btn-primary" style={{ background: "rgba(248, 209, 229, 0)", border: " none" }}>
                        <img id="for" src={sd} alt="" style={{ maxHeight: "40px" }} />
                    </button>
                    <button type="button" class="btn btn-primary" style={{ background: "rgba(248, 209, 229, 0)", border: " none" }}>
                        <img id="for" src={rec} alt="" style={{ maxHeight: "40px" }} />
                    </button>
                </div>
                <span>
                    <h6> Recent Transactions</h6>
                </span>
                <span style={{ color: "grey", fontSize: "14px", fontWeight: "600" ,marginTop:"0px",marginBottom: "10px"}}>
                    Today
                </span>
                <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">

                    <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">
                        <img src={Rea} alt="" />
                        <span>
                            <h6 style={{ fontSize: "13px", marginLeft: "20px" }}>Tom holland</h6>
                            <span style={{ fontSize: "11px", marginLeft: "20px", color: "grey" }}>  Payment Received </span>
                        </span>
                    </div>
                    <span style={{ color: "rgb(94,88,238)", fontWeight: "700" }}>
                        + $250
                    </span>
                </div>
                <center> <hr style={{ width: "80%", background: "white", height: "2px" }} />
                </center>
                <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">

                    <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">
                        <img src={Reb} alt="" />
                        <span>
                            <h6 style={{ fontSize: "13px", marginLeft: "20px" }}>Chris Jordan </h6>
                            <span style={{ fontSize: "11px", marginLeft: "20px", color: "grey" }}>  Payment Sent </span>
                        </span>
                    </div>
                    <span style={{ color: "#EE8E58", fontWeight: "700" }}>
                        - $250
                    </span>
                </div>
                <center> <hr style={{ width: "80%", background: "white", height: "2px" }} />
                </center>
                <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">

                    <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">
                        <img src={Recc} alt="" />
                        <span>
                            <h6 style={{ fontSize: "13px", marginLeft: "20px" }}>John Cena</h6>
                            <span style={{ fontSize: "11px", marginLeft: "20px", color: "grey" }}>  Payment Sent </span>
                        </span>
                    </div>
                    <span style={{ color: "#EE8E58", fontWeight: "700" }}>
                        - $250
                    </span>
                </div>
                <span style={{ color: "grey", fontSize: "14px", marginTop: "10px",marginBottom: "10px", fontWeight: "600" }}>
                    Yesterday
                </span>
                <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">

                    <div class="d-flex justify-content-between flex-row bd-highlight align-items-center">
                        <img src={Red} alt="" />
                        <span>
                            <h6 style={{ fontSize: "13px", marginLeft: "20px" }}>Chris Evans</h6>
                            <span style={{ fontSize: "11px", marginLeft: "20px", color: "grey" }}>  Payment Received </span>
                        </span>
                    </div>
                    <span style={{ color: "rgb(94,88,238)", fontWeight: "700" }}>
                        + $250
                    </span>
                </div>
            </div>

        </>
    );
}

export default Profile;