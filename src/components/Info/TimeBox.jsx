export default function TimeBox({label, id, value}) {
    return (
        <div className="flex flex-col items-center">
            <h2 id={id} className="font-bebas text-[42px] lg:text-[64px] ">{value}</h2>
            <p>{label}</p>
        </div>
    );
}
