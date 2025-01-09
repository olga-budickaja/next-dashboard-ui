import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, trainablesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type trainable = {
  id: number;
  trainableId: string;
  name: string;
  shortName?: string;
  email?: string;
  phone: string;
  telegram?: string;
  whatsapp?: string;
  photo?: string;
  subjects?: string[];
};

const columns = [
  { header: "ПІБ", accessor: "info" },
  {
    header: "Тренування",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden md:table-cell",
  },
  { header: "Телефон", accessor: "phone", className: "hidden lg:table-cell" },
  {
    header: "WhatsApp",
    accessor: "whatsapp",
    className: "hidden md:table-cell",
  },
  {
    header: "Telegram",
    accessor: "telegram",
    className: "hidden md:table-cell",
  },
  { header: "Дії", accessor: "action" },
];

const TrainablesPage = () => {
  const renderRow = (item: trainable) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buddaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo ? item.photo : "/avatar.png"}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.shortName}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.subjects ? item?.subjects.join(",") : []}</td>
      <td className="hidden md:table-cell">{item?.email}</td>
      <td className="hidden md:table-cell">{item?.phone}</td>
      <td className="hidden md:table-cell">{item?.telegram}</td>
      <td className="hidden md:table-cell">{item?.whatsapp}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/trainables/${item.id}`}>
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
    <div className="bg-white p-4 rounded-xl flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Всі підопічні</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
              <Image src="/filter.png" alt="Фільтр" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
              <Image src="/sort.png" alt="Сортування" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buddaYellow">
              <Image src="/plus.png" alt="Додати" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={trainablesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TrainablesPage;
