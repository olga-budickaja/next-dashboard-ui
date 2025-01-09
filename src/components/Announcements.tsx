const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Анонси</h2>
        <span className="text-xs text-gray-400">Дивитись всі</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-buddaSkyLight rounded-xl p-4 mt-1'>
          <div className='flex items-center justify-between'>
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-xl px-1 py-1">01.02.2025</span>
          </div>
          <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero qui voluptates nihil neque at nisi, distinctio voluptatum expedita earum,</p>
        </div>
        <div className='bg-buddaPurpleLight rounded-xl p-4 mt-1'>
          <div className='flex items-center justify-between'>
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-xl px-1 py-1">01.02.2025</span>
          </div>
          <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero qui voluptates nihil neque at nisi, distinctio voluptatum expedita earum,</p>
        </div>
        <div className='bg-buddaYellowLight rounded-xl p-4 mt-1'>
          <div className='flex items-center justify-between'>
            <h2 className="font-medium">Lorem ipsum dolor.</h2>
            <span className="text-sm text-gray-400 bg-white rounded-xl px-1 py-1">01.02.2025</span>
          </div>
          <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero qui voluptates nihil neque at nisi, distinctio voluptatum expedita earum,</p>
        </div>
      </div>

    </div>
  );
};

export default Announcements;
