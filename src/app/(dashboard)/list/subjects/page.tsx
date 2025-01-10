import Pagination from "@/components/Pagination";
import ProcentageChart from "@/components/ProcentageChart";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type subject = {
  id: number;
  name: string;
  bought: string;
  price: string;
  salePrice?: string;
};

const columns = [
  { header: "Тренування", accessor: "info" },
  {
    header: "Куплено",
    accessor: "bought",
    className: "hidden md:table-cell",
  },
  {
    header: "Прайс",
    accessor: "price",
    className: "hidden md:table-cell",
  },
  {
    header: "Знижка",
    accessor: "salePrice",
    className: "hidden md:table-cell",
  },
  { header: "Дії", accessor: "action" },
];

const SubjectsPage = () => {
  const renderRow = (item: subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buddaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.bought}</td>
      <td className="hidden md:table-cell">{item.price}</td>
      <td className="hidden md:table-cell">{item?.salePrice}</td>
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
    <div className="flex flex-col gap-4">
      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">Всі пакети</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
                <Image src="/filter.png" alt="Фільтр" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
                <Image
                  src="/sort.png"
                  alt="Сортування"
                  width={14}
                  height={14}
                />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
                <Image src="/plus.png" alt="Додати" width={14} height={14} />
              </button>
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={subjectsData} />
        {/* PAGINATION */}
        <Pagination />
      </div>{" "}
      {/* CHART */}
      <div className="p-4">
        <ProcentageChart />
      </div>
    </div>
  );
};

export default SubjectsPage;
