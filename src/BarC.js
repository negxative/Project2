import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import data from "./chart.json"
import './Dash.css';

const BarC = () => {
    return (
        
    <div id="line">
            <BarChart width={350} height={150} data={data} margin={{
                    top:0,
                    left:50,
                    right:30,
                    bottom:0
            }} id="chart2">
                <Bar  dataKey="expense"  barSize={6} fill="#FFBB94" />
                <Bar  dataKey="income" barSize={6} fill="#5E58EE"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="Name" />
                <YAxis domain={[0,3000]} tickCount={4} minTickGap={1}  interval={0} />
                <Legend iconType="line" verticalAlign='top'/>
                <Tooltip />
            </BarChart>
    </div>
    );
}
export default BarC;