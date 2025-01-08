"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Всього",
    count: 106,
    fill: "white",
  },
  {
    name: "14-18",
    count: 3,
    fill: "#C3EBFA",
  },
  {
    name: "19-29",
    count: 17,
    fill: "#FAE27C",
  },
  {
    name: "30-49",
    count: 70,
    fill: "#CFCEFF",
  },
  {
    name: "50+",
    count: 6,
    fill: "#fac3f3",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Вік підопічних</h2>
        <Image
          src="/moreDark.png"
          alt="Дізнатися більше"
          width={20}
          height={20}
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              //   label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/easy_hard.png"
          alt="Вік підопічних"
          width={89}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-buddaSky rounded-full"></div>
          <h2 className="font-bold">1,234</h2>
          <h2 className="text-xs text-gray-300">14-18 (3%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-buddaYellow rounded-full"></div>
          <h2 className="font-bold">1,234</h2>
          <h2 className="text-xs text-gray-300">19-29 (17%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-buddaPurple rounded-full"></div>
          <h2 className="font-bold">1,234</h2>
          <h2 className="text-xs text-gray-300">30-49 (70%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-buddaPink rounded-full"></div>
          <h2 className="font-bold">1,234</h2>
          <h2 className="text-xs text-gray-300">50+ (6%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
