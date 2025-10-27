import ScheduleItem from "./ScheduleItem.jsx";

export default function ScheduleList({data}) {
    return (
        <ul>
            {data.map((item, index) => (
                <ScheduleItem key={index} speaker={item}/>
            ))}
        </ul>
    );
}
