import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const data = [
  {
    name: "Monday",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Wednesday",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Thursday",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sunday",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

function CustomLineChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={5}
          strokeOpacity={0.3}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
          strokeWidth={5}
          strokeOpacity={0.3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
