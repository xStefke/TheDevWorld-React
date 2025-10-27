import {useState} from "react";

export default function FaqItem({question, answer}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white py-4 px-4 last:border-b-0">
            <button className="w-full flex justify-between items-center text-left" onClick={() => setOpen(!open)}>
                <h5 className="text-white text-[20px] font-semibold">{question}</h5>
                <span>
                    ➕
                </span>
            </button>
            <div
                className={` transition-all duration-300 overflow-hidden ${open ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                <p className="text-yellow-300 text-[16px]">{answer}</p>
            </div>
        </div>
    );
}