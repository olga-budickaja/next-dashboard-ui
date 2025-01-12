"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { parseISO } from "date-fns";
import uk from "javascript-time-ago/locale/uk";
import Link from "next/link";
import FormModal from "./FormModal";
import { role } from "@/lib/data";

TimeAgo.addLocale(uk);

const Announcement = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    src: string;
    categories: string[];
    date: string;
    link: string;
  };
}) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const formattedDateString = item.date.replace(" ", "T");
    const parsedDate = parseISO(formattedDateString);
    setDate(parsedDate);
  }, [item.date]);

  if (!date) {
    return null;
  }

  return (
    <Link
      href={item.link}
      className="w-full md:w-[calc(50%-2rem)] h-[400px] relative m-[1rem]"
    >
      <Image
        className="relative brightness-50 rounded-md"
        src={item.src}
        alt={item.title}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-between p-8">
        {/* TOP */}
        <div className='flex items-center justify-between'>
                  <div className="flex gap-2">
          {item.categories.map((cat, idx) => (
            <span
              key={idx}
              className="bg-buddaYellow px-2 py-1 text-sm text-gray-800"
            >
              {cat}
            </span>
          ))}
        </div>

        {role === "admin" &&
        <div className="flex items-center gap-4">
          <FormModal table="announsements" type="update" data={item} />
          <FormModal table="announsements" type="delete" id={item.id} />
          </div> }
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] text-white text-bold uppercase">
            {item.title}
          </h2>
          <div className="flex items-center gap-2">
            <Image
              src="/clock.png"
              alt="Clock"
              width={20}
              height={20}
              priority
            />
            <ReactTimeAgo date={date} locale="uk" style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Announcement;
