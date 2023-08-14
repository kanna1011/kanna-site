import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type DataItem = {
  name: string;
  level: number;
};

type HorizontalBarChartProps = {
  data: DataItem[];
};



const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data }) => {
  const chartHeight = data.length * (40 + 20);

  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" domain={[0, 5]}  ticks={[0, 1, 2, 3, 4, 5]}/>
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="level" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBarChart;
