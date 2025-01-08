"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Пн.",
    присутні: 9,
    відсутні: 1,
  },
  {
    name: "Вт.",
    присутні: 7,
    відсутні: 3,
  },
  {
    name: "Ср.",
    присутні: 8,
    відсутні: 2,
  },
  {
    name: "Чт.",
    присутні: 7,
    відсутні: 3,
  },
  {
    name: "Пт.",
    присутні: 9,
    відсутні: 1,
  },
  {
    name: "Сб.",
    присутні: 8,
    відсутні: 2,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Присутність</h2>
        <Image
          src="/moreDark.png"
          alt="Дізнатися більше"
          width={20}
          height={20}
        />
      </div>
      <div className="h-full">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis dataKey="name" axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
            <YAxis axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="присутні"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="відсутні"
              fill="#FAE27C"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
