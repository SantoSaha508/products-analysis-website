import React from 'react';
import './Dashboard.css'
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 150000,
            sell: 50241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 52323,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 169326,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 60229,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 320021,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 455270,
            revenue: 61000
        }
    ]
    return (
        <div className='chart-container'>
            <div className='line-container'>
                <LineChart width={600} height={500} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div>
                <BarChart width={700} height={500} data={data}>
                    <Bar dataKey={'investment'} fill="#884d8"></Bar>
                    <Bar dataKey={'sell'} fill="#8884d8"></Bar>
                    <Bar dataKey={'revenue'} fill="#3334d3"></Bar>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>

            <div>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey={'sell'} cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={110} outerRadius={140} fill="#82ca9d" label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
            </div>

        </div>
    );
};

export default Dashboard;