import React from 'react';
import data from "./chart.json"
import './Dash.css';
import { PieChart, Pie, Sector, ResponsiveContainer,Cell, Tooltip, Legend } from 'recharts';

let tot=[0,0]
    for(let i=0;i<data.length ;i++){
        tot[0]+=data[i].income
        tot[1]+=data[i].expense
    }

const pieD=[{name:"Tota Income",value:tot[0]},{name:"Total Expense",value:tot[1]}]
const colors=["#5E58EE","#EE8E58"]

const PieC = () => {
    
    return (
        <>
        <div className='' >
        <PieChart width={300} height={150}  className="">
          <Pie data={pieD} innerRadius={50} outerRadius={60}  startAngle={75} endAngle={435} paddingAngle={5} fill="#8884d8" dataKey="value" >
          {pieD.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          </Pie>
         
          <Legend iconType="line" align='center'/>
          <Tooltip/>
        </PieChart>
        <div className='z-index-2' id="line2">
                              <center><h5>{tot[0]-tot[1]}</h5>
                              <span>+{Math.round(((tot[0]-tot[1])/tot[0])*100)}%</span>
                              </center>
         </div>
        </div>
        </>
    );
}

export default PieC;