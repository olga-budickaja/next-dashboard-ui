import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import { trainingsCalendarEvents } from "@/lib/data";

const TrainingsPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-xl">
          <h1 className="text-lg font-semibold">Календар ваги</h1>
          <div className="">
            <BigCalendar calendarEvents={trainingsCalendarEvents} />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* LIST */}
        <EventCalendar />
        {/* <Announcements /> */}
      </div>
    </div>
  );
};

export default TrainingsPage;
