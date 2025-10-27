export default function SpeakerCard({img, name, role}) {
    return (
        <div className="flex flex-col mb-5 h-full">
            <img src={img} alt="" className="rounded-[10px] h-[300px] w-full object-cover"/>
            <div className="flex flex-col mt-3 flex-1">
                <h3 className="text-[#FFBD00] text-[28px]">{name}</h3>
                <p className="text-[#91887E] text-[16px] ">{role}</p>
            </div>

        </div>
    );
}