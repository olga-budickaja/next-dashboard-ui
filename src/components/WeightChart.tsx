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


const WeightChart = ({
  data,
  dataMax,
  color,
}: {
  data: (
    | {
        date: string;
        meaning: number;
      }
    | {
        date: string;
        meaning?: undefined;
      }
  )[];
  dataMax?: number;
  color: string;
}) => {
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
        <YAxis domain={[dataMax ? dataMax : 0, "dataMax"]} axisLine={false} tickMargin={20} />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="meaning"
          stroke={color}
          fill={color}
          strokeWidth={5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeightChart;
