export default function ScheduleItem({speaker}) {
    return (
        <li className="flex flex-col lg:flex-row justify-between items-center gap-4 px-5 py-7 border-b border-[#ffffff46] hover:bg-[#45345d] last:border-none">

            {speaker.img && (
                <img
                    src={speaker.img}
                    alt={speaker.speaker}
                    className="w-[76px] h-[76px] rounded-full object-cover"
                />
            )}

            <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:gap-10">
                <div className="text-center lg:text-left">
                    <h6 className="text-[22px] lg:text-[24px] text-white font-semibold">{speaker.topic}</h6>
                    <p className="text-[#91887E] text-[20px] lg:text-[24px]">{speaker.speaker}</p>
                </div>

                <h6 className="text-[20px] lg:text-[24px] text-white lg:ml-auto">
                    {speaker.time}
                </h6>
            </div>
        </li>
    );
}
