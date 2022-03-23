import React from 'react';
import menu from "./menus.png"
import './Dash.css';
import wall from './Subt.svg'
import trans from './trans.svg'
import prof from './prof.svg'
import scan from './paym.svg'
import home from './home.svg'
import { Link } from 'react-router-dom';
const Sidebar = () => {
     
    const imd=()=>{
        if(window.innerWidth>1000){
        document.getElementById("mas").style.maxWidth="50%";
         document.getElementById("mas").style.minWidth="50%";
        }
        else if(window.innerWidth>750){
        document.getElementById("mas").style.maxWidth="60%";
        document.getElementById("mas").style.minWidth="50%";}
        else {
        document.getElementById("mas").style.maxWidth="100%";
        document.getElementById("mas").style.minWidth="50%";}
}
const dis= ()=>{
    if(window.innerWidth>1200)
    document.getElementById("mas").style.minWidth="75%";
    else
    document.getElementById("mas").style.minWidth="100%";
}
    return(
       <>
       <button id="god" className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><img alt='' src={menu}></img></button>
        
        <div className="offcanvas offcanvas-start"  data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel" > </h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" >
          <div id="main2" style={{margin: "5% 0% 5% 3%",minWidth:"20%" }}>
                <div>
                <div className="p-2 bd-highlight mb-3" >
                        
                        <Link id="cp"  onClick={imd} to="/"><img src={home} alt="r" id="icon" /> Dashboard</Link> 
                   </div>
                   <div className="p-2 bd-highlight mb-3">
                       <Link id="cp"  onClick={dis} to="/main"> <img src={wall} alt="r" id="icon" />Wallet</Link> 
                   </div> <div className="p-2 bd-highlight mb-3">
                        <Link id="cp" to="/trans"><img src={trans} alt="r" id="icon" />Transaction</Link>  
                   </div> <div className="p-2 bd-highlight mb-3">
                       <Link id="cp" to="/prof"> <img src={prof} alt="r" id="icon" />Profile</Link>  
                   </div> <div className="p-2 bd-highlight mb-3">
                       <Link id="cp"  onClick={dis} to="/main"> <img src={scan} alt="r" id="icon" />Payment</Link>   
                   </div>
                </div>
                <div>
                     <div style={{background:"linear-gradient(145deg, rgba(94,88,238,0.2) 0%, rgb(248, 209, 229,0.2) 100%)", marginTop:"10%",padding: "40% 20% 20% 20% ",color:"grey",borderRadius:"20px",fontSize:"12px",border:"solid 0.7px white  "}}>
                            <center>
                                <div style={{padding:""}} >
                                <h5 style={{color:"black"}}>Annual Report</h5>
                                Annually Detailed Report <br />
                                <button style={{background:"#5E58EE",border:"solid 0.7px white  ",borderRadius:"20px",padding:"10% 5% 5% 5%",minWidth:"100%",color:"white",marginTop:"10px"}}>
                                    <h6>Download</h6>
                                 </button>
                                 </div>

                            </center>
                     </div>
                </div>
            </div>

          </div>
        </div>
        </>
    );
}
// style={{ background: "rgba(240, 248, 255, 0.0)", border: "none", marginRight: "10px" }}
export default Sidebar;