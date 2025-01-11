import Video from "@/components/Video";
import { videosData } from "@/lib/data";
import { Suspense } from "react";



const VideoPage = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl  m-4 mt-0">
      <h1 className="text-lg font-semibold">Курс з тренувань</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-8">
        {videosData.map((video) => (
                  <div className="flex flex-col gap-2" key={video.id}>
          <h2 className="text-md text-gray-500 font-semibold">Модуль {video.id}</h2>
          <div className="w-[100%] md:w-[500px]">
            <Suspense fallback={<p>Loading video...</p>}>
              <Video src={video.src} />
            </Suspense>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
};

export default VideoPage;
