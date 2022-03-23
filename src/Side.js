import React from 'react';
import './Dash.css';
import wall from './Subt.svg'
import trans from './trans.svg'
import prof from './prof.svg'
import scan from './paym.svg'
import home from './home.svg'
import data from './chart.json'
import { Link } from 'react-router-dom';
const Side = () => {
    
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
    return (
        <>
            <div id="main" style={{margin: "10% 0% 5% 3%",minWidth:"20%" }}>
                <div>
                    <div className="p-2 bd-highlight mb-3" >
                        
                         <Link id="cp" onClick={imd} to="/"><img src={home}  alt="" id="icon" /> Dashboard</Link> 
                    </div>
                    <div className="p-2 bd-highlight mb-3">
                        <Link id="cp" onClick={dis} to="/main" > <img src={wall}  alt="" id="icon" />Wallet</Link> 
                    </div> 
                    <div className="p-2 bd-highlight mb-3">
                         <Link id="cp" to="/trans"><img src={trans} alt="" id="icon" />Transaction</Link>  
                    </div> <div className="p-2 bd-highlight mb-3">
                        <Link  id="cp" to="/prof"> <img src={prof} alt="" id="icon" />Profile</Link>  
                    </div> <div className="p-2 bd-highlight mb-3">
                        <Link id="cp" onClick={dis} to="/main"> <img src={scan} alt="" id="icon" />Payment</Link>   
                    </div>
                </div>
                <div>
                     <div style={{background:"linear-gradient(145deg, rgba(94,88,238,0.2) 0%, rgb(248, 209, 229,0.2) 100%)", marginTop:"10%",padding: "40% 20% 20% 20% ",color:"grey",borderRadius:"20px",fontSize:"12px",border:"solid 0.7px white  "}}>
                            <center>
                                <div style={{padding:""}} >
                                <h5 style={{color:"black"}}>Annual Report</h5>
                                Annually Detailed Report <br />
                                <button style={{background:"#5E58EE",border:"solid 0.7px white  ",borderRadius:"20px",padding:"10% 5% 5% 5%",minWidth:"100%",color:"white",marginTop:"10px"}}>
                                    <h6> <a href={data} download>Download</a></h6>
                                 </button>
                                 </div>

                            </center>
                     </div>
                </div>
            </div>

        </>
       
    );
}

export default Side;


