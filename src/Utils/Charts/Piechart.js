import React from "react";
import "./PieChart.css";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Active users", value: 900 },
  { name: "Inactive Users", value: 300 },
  
];
const datas=[
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
]
const COLORS = ["#539DFF", "#FE5050" ];
const COLOR = ["#32D387", "#725CFF" ];

const Piechart = () => {
  return (
    <div className='piechart-box2'>
      <div className='pie-chart'>
        <div className='right-piechart-box'>
          <PieChart width={800} height={400}>
            <Pie
              data={data}
            //   cx={120}
            //   cy={200}
              innerRadius={70}
              outerRadius={120}
              borderRadius={40}
            //   fill='#8884d8'
              paddingAngle={0}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className='right-piechart-box'>
          <PieChart width={800} height={400}>
            <Pie
              data={datas}
            //   cx={120}
            //   cy={200}
              innerRadius={70}
              outerRadius={120}
              fill='yellow'
              paddingAngle={-2}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOR[index % COLOR.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
