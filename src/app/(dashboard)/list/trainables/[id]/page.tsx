import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import WeightChart from "@/components/WeightChart";
import { calendarEvents, weightData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const SingleTrainablePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 xl:flex-row p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-buddaSky py-6 px-4 rounded-lg flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Фото JOnh Doe"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-lg font-semibold">Leonard Snyder</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full flex gap-1 items-center">
                  <Image src="/man.png" alt="Іконка" width={14} height={14} />
                  <span>44 роки</span>
                </div>
                <div className="w-full flex gap-1 items-center">
                  <Image
                    src="/birthday.png"
                    alt="Іконка"
                    width={14}
                    height={14}
                  />
                  <span>10.06.1980</span>
                </div>
                <div className="w-full flex gap-1 items-center">
                  <Image src="/mail.png" alt="Іконка" width={14} height={14} />
                  <Link href="mailto:some@gmail.com">
                    <span>some@gmail.com</span>
                  </Link>
                </div>
                <div className="w-full flex gap-1 items-center">
                  <Image src="/phone.png" alt="Іконка" width={14} height={14} />
                  <Link href="tel:+3809909909999">
                    <span>+38(099)999-99-99</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="Іконка календаря"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">3 рази</h2>
                <span className="text-sm text-gray-400">Занять в тижд.</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="Іконка списку"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">6 модулів</h2>
                <span className="text-sm text-gray-400">Пройдено</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleWeight.png"
                alt="Іконка календаря"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">5.3 кг</h2>
                <span className="text-sm text-gray-400">Мінус ваги</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleTape.png"
                alt="Іконка календаря"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h2 className="text-xl font-semibold">9.5 см</h2>
                <span className="text-sm text-gray-400">Мінус об`єм</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-xl p-4 h-[800px]">
          <h2 className="text-lg font-semibold">Досягнення</h2>
          <BigCalendar calendarEvents={calendarEvents} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl">
          <h2 className="text-lg font-semibold">Пакети тренувань</h2>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-buddaSkyLight" href="/">
              Тренування1
            </Link>
            <Link className="p-3 rounded-md bg-buddaYellowLight" href="/">
              Тренування2
            </Link>
            <Link className="p-3 rounded-md bg-buddaPurpleLight" href="/">
              Тренування3
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold">Графік зміни ваги</h2>
          <WeightChart data={weightData} dataMax={70} color="#7876d4" />
        </div>
        <div className="bg-white rounded-xl p-4">
          <h2 className="text-lg font-semibold">Графік зміни об`єму</h2>
          <WeightChart data={weightData} dataMax={90} color="#78bcd6" />
        </div>

        <Announcements />
      </div>
    </div>
  );
};

export default SingleTrainablePage;
