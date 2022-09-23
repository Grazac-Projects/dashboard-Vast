import React from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './PieChart.css'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, ],
        backgroundColor:[
          'red',
          'blue',
          
        ]
    },
    
  ],
  
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Red',
      'Yellow',
      
  ], 
 
};
const PieChart2 = () => {
    const [data, setData] = useState({
        datasets: [{
            data: [5, 25],
            backgroundColor:[
              'red',
              'blue',
              
            ],
            // cutout:'90%',
            innerRadius:'10'
        },
      ],
      
      labels: [
          'Red',
          'Yellow',
          
      ], 
    },
    
    );
    
  return (
    <div  className='piechart-box2'>
        <div  className='pie-chart'>
            <div className='left-piechart-box' style={{width:'30%', height:'30%',backgroundColor: '#fff'}}>
            <Doughnut data={data}/>
            </div>
            <div className='left-piechart-box' style={{width:'30%', height:'30%' ,backgroundColor: '#fff'}}>
            <Doughnut data={data} className='donut' />
            </div>

        </div>
    </div>
  )
}

export default PieChart2