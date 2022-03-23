import React from 'react';
import tab from "./tab.json"
import './Dash.css';
import Sidebar from './Sidebar';
const TransTab = () => {
   
    return (
    <>
   
    <div className='container' id="table" >
    <Sidebar/>
        <table className="table"  >
            <thead >
                <tr style={{ fontSize: "14px" }}>
                    <th scope="col">User</th>
                    <th scope="col">Name{" &"} Status </th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            {
                tab.map((el) => {
                    return <>

                        <tbody style={{ fontSize: "12px",color:"grey"}}>
                            <tr style={{ borderBottom: "2px solid rgba(255, 255, 255, 0.548)" }}>
                                <th scope="row"><img id="imh" src={el.icon} alt="" /></th>
                                <td>
                                    <div >
                                        <span style={{fontSize:"14px",color:'black',fontWeight:"500"}}>{el.name}</span> <br /> <br id="break" />   {el.status}
                                    </div>
                                </td>
                                <td>{el.amount}</td>
                            </tr>
                        </tbody>


                    </>
                })
            }
        </table>
    </div>
    </>
    );
}

export default TransTab;
 
// microprocessoi, data bus, adress bus, programm instruction alu cu  registers ----> defionition 
// fe3atures of 808, features of 8085, adressing modes ,data lines and adress lines

