"use client";

import Image from "next/image";

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
  {
    name: "Січ.",
    дохід: 4000,
    витрати: 2400,
  },
  {
    name: "Лют.",
    дохід: 3000,
    витрати: 1398,
  },
  {
    name: "Бер.",
    дохід: 2000,
    витрати: 9800,
  },
  {
    name: "Квіт.",
    дохід: 2780,
    витрати: 3908,
  },
  {
    name: "Ерав.",
    дохід: 1890,
    витрати: 4800,
  },
  {
    name: "Черв.",
    дохід: 2390,
    витрати: 3800,
  },
  {
    name: "Лип.",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Серп.",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Вер.",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Жовт.",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Лист.",
    дохід: 3490,
    витрати: 4300,
  },
  {
    name: "Груд.",
    дохід: 3490,
    витрати: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Фінанси</h2>
        <Image
          src="/moreDark.png"
          alt="Дізнатися більше"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <div className="h-full">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis axisLine={false} tickMargin={20} />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line
              type="monotone"
              dataKey="дохід"
              stroke="#C3EBFA"
              strokeWidth={5}
            />
            <Line
              type="monotone"
              dataKey="витрати"
              stroke="#CFCEFF"
              strokeWidth={5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinanceChart;
