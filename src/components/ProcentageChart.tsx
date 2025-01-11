"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";

const data = [
  { name: "Training1", value: 70 },
  { name: "Training2", value: 250 },
  { name: "Training3", value: 10 },
];

const COLORS = ["#FAE27C", "#CFCEFF", "#fac3f3"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ProcentageChart = () => {
  return (
    <div className="bg-white rounded-xl w-full md:w-1/2 h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Продажі</h2>
        <Image
          src="/moreDark.png"
          alt="Дізнатися більше"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[350px]">
        <ResponsiveContainer width="100%" height="90%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute md:top-0 bottom-0 flex  md:flex-col justify-center gap-4">
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-buddaYellow rounded-full"></div>
            <h2 className="font-bold">Training1</h2>
            <h2 className="text-xs text-gray-400">70 (21%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-buddaPurple rounded-full"></div>
            <h2 className="font-bold">Training2</h2>
            <h2 className="text-xs text-gray-400">250 (76%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="w-5 h-5 bg-buddaPink rounded-full"></div>
            <h2 className="font-bold">Training3</h2>
            <h2 className="text-xs text-gray-400">10 (3%)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcentageChart;
