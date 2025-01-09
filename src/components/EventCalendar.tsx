"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { uk } from "date-fns/locale";
import Image from "next/image";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

//TEMPORARY
const events = [
  {
    id: 1,
    title: "Тренування на витривалість",
    time: "10:00 - 11:00",
    description: "Тут короткий опис тренування. Що туди входить. і т. п.",
  },
  {
    id: 2,
    title: "Тренування аби як",
    time: "14:00 - 15:00",
    description: "Тут короткий опис тренування. Що туди входить. і т. п.",
  },
  {
    id: 3,
    title: "Тренування на витривалість",
    time: "18:00 - 19:00",
    description: "Тут короткий опис тренування. Що туди входить. і т. п.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-xl">
      <Calendar onChange={onChange} value={value} locale={uk.code} />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold my-4">Події</h2>
        <Image
          src="/moreDark.png"
          alt="Дізнатися більше"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-xl border-2 border-gray-100 border-t-4 odd:border-t-buddaSky even:border-t-buddaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-600">{event.title}</h2>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
