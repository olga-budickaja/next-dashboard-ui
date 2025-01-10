"use client";

import { Calendar, dateFnsLocalizer, View, Views } from "react-big-calendar";
import { Locale, uk } from "date-fns/locale";
import { format } from "date-fns";
import { parse } from "date-fns";
import { startOfWeek } from "date-fns";
import { getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

interface CustomEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

const locales = {
  uk: uk,
};

const localizer = dateFnsLocalizer({
  format: (date: Date, formatStr: string, options?: any) =>
    format(date, formatStr, options),
  parse: (value: string, formatStr: string, baseDate: Date, options?: any) =>
    parse(value, formatStr, baseDate, options),
  startOfWeek: (date: Date, options?: { locale?: Locale }) =>
    startOfWeek(date, { locale: uk }),
  getDay: (date: Date) => getDay(date),
  locales,
});

const messages = {
  today: "Сьогодні",
  previous: "Назад",
  next: "Вперед",
  week: "Тиждень",
  day: "День",
};

// Кастомний компонент для відображення події
const CustomEvent = ({ event }: any) => {
  const { weight, cal, title, integration } = event;

  // Умова для визначення знаку
  let icon = weight <= 80 || cal <= 1600 ? "✅" : "❌"; // Використовуємо зелений для нормальної ваги, червоний для високої
  let iconIntegration = integration === "online" ? "🌐" : "🏋️‍♀️";

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {weight ? (
        <>
          <span style={{ marginRight: "10px" }}>{icon}</span>
          <span>{title}</span>
        </>
      ) : integration ? (
        <>
          <span style={{ marginRight: "10px" }}>{iconIntegration}</span>
          <span>{title}</span>
        </>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

const BigCalendar = ({
  calendarEvents,
}: {
  calendarEvents: (
    | {
        title: string;
        allDay: boolean;
        start: Date;
        end: Date;
        weight: number;
      }
    | {
        title: string;
        allDay: boolean;
        start: Date;
        end: Date;
        weight?: undefined;
      }
  )[];
}) => {
  const [view, setView] = useState<View>(Views.WEEK);

  const handleChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  // Функція для зміни стилю подій
  const eventStyleGetter = (event: any) => {
    const dayOfWeek = getDay(event.start); // Отримуємо день тижня для події
    let backgroundColor = "#fefce8"; // Колір за замовчуванням

    // Задаємо різні кольори для подій в залежності від дня
    if (dayOfWeek === 1) {
      // Понеділок
      backgroundColor = "#e0f7fa";
    } else if (dayOfWeek === 0) {
      backgroundColor = "#fce4ec";
    } else if (dayOfWeek === 1) {
      backgroundColor = "#F1F0FF";
    } else if (dayOfWeek === 3) {
      backgroundColor = "#fde4fa";
    } else if (dayOfWeek === 4) {
      backgroundColor = "#CDEBFD";
    } else if (dayOfWeek === 6) {
      backgroundColor = "#fde4fa";
    }

    return {
      style: {
        backgroundColor, // Змінюємо колір фону
        color: "#000", // Колір тексту
      },
    };
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "98%" }}
      culture="uk"
      views={["week", "day"]}
      view={view}
      formats={{
        dayRangeHeaderFormat: ({ start, end }: any) =>
          `${format(start, "LLLL dd", { locale: uk })} - ${format(end, "dd", {
            locale: uk,
          })}`, // Формат для української локалізації
      }}
      messages={messages}
      timeslots={1} // Відображення кожної години
      step={60} // Крок у 60 хвилин
      min={new Date(2025, 0, 1, 7, 0)} // Початок з 7:00
      max={new Date(2025, 0, 1, 21, 0)} // Кінець о 20:00
      onView={handleChangeView}
      components={{
        event: CustomEvent, // Використовуємо кастомний компонент
      }}
      eventPropGetter={eventStyleGetter} // Використовуємо нашу функцію для стилізації подій
    />
  );
};

export default BigCalendar;
