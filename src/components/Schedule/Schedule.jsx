import SectionWrapper from "../SectionWrapper.jsx";
import {useState} from "react";
import ScheduleList from "./ScheduleList.jsx";
import scheduleData from "../../data/scheduleData.js";

export default function Schedule() {
    const [activeDay, setActiveDay] = useState(1);

    const baseClass =
        "rounded-[100px] py-2 w-full lg:px-20 text-white transition-all duration-300 cursor-pointer select-none";

    return (
        <SectionWrapper heading="SCHEDULE" id="schedule">
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className="flex flex-col text-center lg:flex-row items-center lg:justify-center gap-3 lg:max-w-[75%] lg:mx-auto">
                    {[1, 2, 3].map(day => (
                        <button
                            key={day}
                            className={`${baseClass} ${
                                activeDay === day ? "bg-[#FFBD00]" : "bg-[#2D223C]"
                            }`}
                            onClick={() => setActiveDay(day)}
                        >
                            Day {day}
                        </button>
                    ))}
                </div>

                <div className="bg-[#2D223C] w-full lg:max-w-[75%] mx-auto rounded-[50px] mt-3 overflow-hidden">
                    <ScheduleList data={scheduleData[`day${activeDay}`]}/>
                </div>
            </div>
        </SectionWrapper>
    );
}
