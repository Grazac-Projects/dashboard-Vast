import React, { useState, useEffect } from "react";
import "./BarChart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart3 = () => {
  const [chart, setChart] = useState({});

  var data = {
    labels: [
      "P2P Transfer",
      "Account Top Up",
      " Card Funding",
      "Card Debit Transaction",
      "Card Withdrawal",
      "Bank Transfer",
      "Card Creation",
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [
          "#888888",
          // 'red'
        ],
        barThickness: 60,
        borderRadius: 2,
        
        //   borderDash: [10,10]
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    legend: {
      labels: {
        fontSize: 26,
        color:"#3484ED"
      },
    },
  };
  return (
    <div className='barchart-box2'>
    {/* */}
 <div className='bar-chart'>
  <div>
  <p className='chart-p'>Month on Month Breakdown for Transactions </p>
    <span className='chart-span'>Total Customer’s Account Balance: </span> <span className='chart-p'>90,000</span>
    </div>
<div>
<Bar
   data={data}
   height={400}
   options={options}

 />
</div>
 </div>
</div>
  );
};

export default BarChart3;
