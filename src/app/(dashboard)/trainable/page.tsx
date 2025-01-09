import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import WeightChart from "@/components/WeightChart";


const TrainablePage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-xl">
          <h1 className="text-lg font-semibold">Календар ваги</h1>
          <div className="">
            <BigCalendar />
          </div>
        </div>
        <div className="h-full bg-white p-4 rounded-xl">
          <h2 className="text-lg font-semibold mb-7">Зміна ваги</h2>
          <WeightChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default TrainablePage;
