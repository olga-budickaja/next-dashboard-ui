import Announcement from "@/components/Announcement";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { announcementsData } from "@/lib/data";
import Image from "next/image";

type announcement = {
  id: number;
  title: string;
  src: string;
  categories: string[];
  date: string;
  link: string;
};

const AnnouncementsPage = () => {
  return (
    <div className="bg-white p-4 rounded-xl m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between w-full mb-8">
        <h1 className="hidden md:block text-lg font-semibold">
          Свіженькі події
        </h1>
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
      <div className="flex flex-wrap">
        {announcementsData.map((item) => (
          <Announcement key={item.id} item={item} />
        ))}
      </div>
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AnnouncementsPage;
