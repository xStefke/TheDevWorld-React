import BuyTicket from "../BuyTicket.jsx";

export default function TicketCard({title, price, features}) {
    return (
        <div className="bg-[#2D223C] rounded-4xl p-6">
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-bebas text-[24px] lg:text-[32px] m-0 text-white">{title}</h3>
                <span className="text-[64px] text-[#FF60CE] font-bebas">{price}</span>
            </div>
            <hr className="border-gray-700 my-4"/>
            <ul className="space-y-3">
                {features.map((item, i) => (
                    <li key={i}
                        className={`flex items-center gap-2 ${item.included ? "text-white" : "text-gray-500"}`}>
                        {item.included ? "✅" : "❌"}
                        {item.text}
                    </li>
                ))}
            </ul>
            <hr className="border-gray-700 my-4"/>
            <BuyTicket className="block py-2 font-bebas text-[32px] w-full">BUY NOW</BuyTicket>
        </div>
    );
}