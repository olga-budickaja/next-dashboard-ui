"use client";

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Video from "@/components/Video";
import { role, videoDescriptionData, videosData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";

type item = {
  id: number;
  name: string;
  shortDesc: string;
  description: string;
};

const columns = [
  { header: "Назва", accessor: "info" },
  {
    header: "Короткий опис",
    accessor: "shortDesc",
    className: "hidden md:table-cell",
  },
  { header: "Дії", accessor: "action" },
];

const VideoPage = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (id: number) => {
    setIndex(id);
  };

  const renderRow = (item: item) => (
    <tr
      key={item.id}
      className={`border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buddaPurpleLight ${
        index === item.id - 1 ? "bg-buddaPurpleLight font-bold" : ""
      }`}
      onClick={() => handleClick(item.id - 1)}
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.shortDesc}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/subjects/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-buddaSky">
              <Image src="/view.png" alt="Дивитись" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-buddaPurple">
              <Image src="/delete.png" alt="Видалити" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-2">Курс з тренувань</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        {/* LEFT */}
        <div className="flex-1 bg-white p-4 rounded-xl">
          {/* TOP */}
          <h2 className="text-md text-gray-500 font-semibold mb-4">
            Модуль {videosData[0].id}
          </h2>
          <div className="w-[100%]">
            <Suspense fallback={<p>Loading video...</p>}>
              <Video src={videosData[index].src} hight="415" />
            </Suspense>
          </div>
          <div className="text-sm text-gray-600 mt-10">
            {videoDescriptionData[index].description}
          </div>
        </div>
        {/* RIGHT */}
        <div className="flex-1 bg-white p-4 rounded-xl">
          <div className="flex-1 bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <h1 className="hidden md:block text-lg font-semibold">
                Перелік модулів
              </h1>
              {role === "admin" && (
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-4 self-end">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
                      <Image
                        src="/plus.png"
                        alt="Додати"
                        width={14}
                        height={14}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* LIST */}
            <Table
              columns={columns}
              renderRow={renderRow}
              data={videoDescriptionData}
            />
            {/* PAGINATION */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
