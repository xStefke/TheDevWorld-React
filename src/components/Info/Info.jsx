import {useEffect, useState} from "react";
import InfoCard from "./InfoCard.jsx";
import TimeBox from "./TimeBox.jsx";
import BuyTicket from "../BuyTicket.jsx";

export default function Info() {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
    });

    useEffect(() => {
        const targetDate = new Date("2025-11-08T08:00:00");
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference <= 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({
                days: days.toString().padStart(2, "0"),
                hours: hours.toString().padStart(2, "0"),
                minutes: minutes.toString().padStart(2, "0"),
                seconds: seconds.toString().padStart(2, "0"),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="p-14">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <InfoCard heading2="15,000+" heading3="DEVELOPERS"/>
                    <InfoCard heading2="5,000+" heading3="COMPANIES"/>
                    <InfoCard heading2="500+" heading3="SPEAKERS"/>
                    <InfoCard heading2="10,000+" heading3="IDEAS"/>
                    {/* Full width card */}
                    <div className="w-full px-4">
                        <div
                            className="bg-[#2D223C] text-white p-8 rounded-3xl mt-6 flex flex-col lg:flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <h3 className="text-2xl mb-4 text-center font-bebas lg:text-[32px] text-[20px]">
                                    Code, connect, and be inspired — secure your spot at TheDevWorld 2025.
                                </h3>
                                <div className="flex justify-between mb-6 ">
                                    <TimeBox label="Days" id="days" value={timeLeft.days}/>
                                    <TimeBox label="Hours" id="hours" value={timeLeft.hours}/>
                                    <TimeBox label="Minutes" id="minutes" value={timeLeft.minutes}/>
                                    <TimeBox label="Seconds" id="seconds" value={timeLeft.seconds}/>
                                </div>
                            </div>
                            <BuyTicket className="px-9 py-4 font-bebas lg:text-[32px] md:text-[24px] text-[24px] ">GET
                                YOUR
                                TICKET</BuyTicket>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}