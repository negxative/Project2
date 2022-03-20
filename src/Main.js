import React from 'react';
import BarC from './BarC';
import Chart from './Chart';
import './Dash.css';
import ser from './G38.png'
import men from './Gr1.png'
import PieC from './PieC';
import not from './Vector2.png'
import grp from './Grp.png'
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <>
            <div class="d-flex flex-column bd-highlight" style={{ margin: "1%  1% 1% 1% ", padding: "2%", minWidth: "50%" }} id="mas">
                <div class="d-flex justify-content-between flex-row bd-highlight mb-3" >
                    <div class="d-flex justify-content-start flex-row bd-highlight mb-3" style={{minWidth:"70%"}} >
                        <Sidebar/>
                        <div class="red" >
                            <button style={{ background: "rgba(240, 248, 255, 0.0)", border: "none", marginLeft: "10px" }}>
                                <img src={ser} style={{ height: "15px" }} alt="" />
                            </button>
                            <input type="text" style={{ border: "none", background: "rgba(240, 248, 255, 0.0)", fontSize: "14px", marginLeft: "10px" }} value="Search" />
                        </div>
                    </div>
                    <div class="p-2 bd-highlight">
                        <img src={not} alt="" id="icon" />
                        <img src={men} alt="" id="icon" />
                    </div>
                </div>
                <h4 style={{ marginTop: "5%" }}> Dashboard</h4>
                <div className="container">
                    <div class="d-flex flex-row justify-content-around wrap" id='wrapper'>
                        <div class="card">
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    Balance  <br />
                                    <h5>$53000</h5>
                                </div>
                                <div>
                                    Card <br />
                                    <h5>04</h5>
                                </div>
                            </div>
                            <div class="d-flex justify-content-around align-items-baseline mb-3">
                                <h6>
                                    <span>**** </span>
                                    <span>**** </span>
                                    <span>**** </span>
                                    <span>2456</span>
                                </h6>
                            </div>
                            <div class="d-flex justify-content-between ">
                                <div>
                                    Valid Through
                                    <h5>02/22</h5>
                                </div>
                                <div>
                                    Card Holder
                                    <h5>Jonas</h5>
                                </div>
                            </div>


                        </div>
                        <div class="card2">
                            <div class="d-flex justify-content-between">
                                <span> <h5>Exchange Rates</h5></span>
                                <span><h5><img src={grp} alt="" /></h5></span>
                            </div>
                            <Chart />

                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-around" id="wrapper">
                    <div class="card2" id="card3" style={{ minWidth: "50%", marginTop: "0" }}>
                        <div class="d-flex justify-content-between">
                            <span> <h5>History</h5></span>
                            <span><h5><img src={grp} alt="" /></h5></span>
                        </div>
                        <div class="d-flex justify-content-start">
                            <BarC />
                        </div>
                    </div>


                    <div class="card2" id="card4" style={{ minWidth: "30%", marginTop: "0", marginLeft: "10px", paddingLeft: "10px" }} >
                        <div class="d-flex justify-content-between">
                            <span> <h5>Efficiency</h5></span>
                            <span><h5><img src={grp} alt="" /></h5></span>
                        </div>
                        <div class="d-flex justify-content-center " id="chart3">
                            <PieC />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Main;