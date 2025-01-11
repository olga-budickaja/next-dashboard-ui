import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { feedbackData, role } from "@/lib/data";
import { cleanLink } from "@/utils/general";
import Image from "next/image";
import Link from "next/link";

type user = {
  id: number;
  name: string;
  phone: string;
  communication: string;
  date: string;
  time: string;
  call: boolean;
};

const columns = [
  { header: "Дата", accessor: "date" },
  { header: "Час", accessor: "time" },
  { header: "Ім'я", accessor: "info", className: "hidden md:table-cell" },
  {
    header: "Телефон",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Вид",
    accessor: "communication",
    className: "hidden md:table-cell",
  },
  {
    header: "Дзвонили",
    accessor: "call",
  },
  { header: "Дії", accessor: "action" },
];

const renderRow = (item: user) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buddaPurpleLight"
  >
    <td>{item.date}</td>
    <td>{item.time}</td>

    <td className="hidden md:table-cell">
      <h3 className="font-semibold">{item.name}</h3>
    </td>

    <td className="hidden md:table-cell">
      {item.communication === "telegram" ? (
        <Link href={`https://t.me/+${cleanLink(item.phone)}`} target="_blank">
          {item.phone}
        </Link>
      ) : item.communication === "whatsapp" ? (
        <Link href={`https://wa.me/${cleanLink(item.phone)}`} target="_blank">
          {item.phone}
        </Link>
      ) : item.communication === "phone" ? (
        <Link href={`tel:+${cleanLink(item.phone)}`} target="_blank">
          {item.phone}
        </Link>
      ) : (
        <Link
          href={`viber://chat?number=%2B${cleanLink(item.phone)}`}
          target="_blank"
        >
          {item.phone}
        </Link>
      )}
    </td>
    <td className="hidden md:table-cell">{item.communication}</td>
    <td>{item.call ? "✅" : "❌"}</td>
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

const FeedbackPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* TABLE */}
      <div className="bg-white p-4 rounded-xl flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">Зворотній зв`язок</h1>
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
        <Table columns={columns} renderRow={renderRow} data={feedbackData} />
        {/* PAGINATION */}
        <Pagination />
      </div>
    </div>
  );
};

export default FeedbackPage;
