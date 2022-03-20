import React from 'react';
import data from "./chart.json"
import './Dash.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const Chart = () => {


    return (
        <>
        <div  id="line">
            <LineChart width={300} height={100} data={data} id="chart" >
                <Line type="monotone" dataKey="Expense" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="Name" />
                <YAxis domain={[12,13]} tickCount={4} minTickGap={1}  interval={0} />
                <Tooltip />
                <Legend verti/>
            </LineChart>
        </div>
        </>
    );
}

export default Chart;