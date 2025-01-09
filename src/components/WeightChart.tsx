"use client";

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

const data = [
  { date: "1.01", weight: 98.3 },
  { date: "2.01", weight: 98 },
  { date: "3.01", weight: 97.5 },
  { date: "4.01" },
  { date: "5.01", weight: 97 },
  { date: "6.01", weight: 96.5 },
  { date: "7.01", weight: 96.7 },
  { date: "8.01", weight: 96.3 },
  { date: "9.01", weight: 94 },
  { date: "10.01", weight: 92 },
  { date: "11.01", weight: 98.3 },
  { date: "12.01", weight: 98 },
  { date: "13.01", weight: 97.5 },
  { date: "14.01" },
  { date: "15.01", weight: 97 },
  { date: "16.01", weight: 96.5 },
  { date: "17.01", weight: 96.7 },
  { date: "18.01", weight: 96.3 },
  { date: "19.01", weight: 94 },
  { date: "20.01", weight: 92 },
  { date: "21.01", weight: 98.3 },
  { date: "22.01", weight: 98 },
  { date: "23.01", weight: 97.5 },
  { date: "24.01" },
  { date: "25.01", weight: 97 },
  { date: "26.01", weight: 96.5 },
  { date: "27.01", weight: 96.7 },
  { date: "28.01", weight: 96.3 },
  { date: "29.01", weight: 94 },
  { date: "30.01", weight: 92 },
];

const WeightChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          axisLine={false}
          tick={{ fill: "#d1d5db" }}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis domain={[60, "dataMax"]} axisLine={false} tickMargin={20} />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="weight"
          stroke="#CFCEFF"
          fill="#CFCEFF"
          strokeWidth={5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
