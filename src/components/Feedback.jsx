export default function Feedback() {
    const inputClass = "bg-white rounded-[25px] px-4 h-10 focus:outline-none focus:ring-2 focus:ring-[#FFBD00] ";
    return (
        <div className="py-14">
            <div className="max-w-7xl mx-auto border border-[#FFBD00] bg-[#2D223C] rounded-[25px] p-6">
                <h2 className="font-bebas text-[48px] lg:text-[64px] text-white text-center">GIVE US FEEDBACK</h2>
                <form action="" className="flex flex-col items-center">
                    <div className="flex justify-between w-full gap-5">
                        <input type="text" placeholder="First Name" className={`${inputClass} w-1/2`}/>
                        <input type="text" placeholder="Last Name" className={`${inputClass} w-1/2`}/>
                    </div>
                    <input type="email" placeholder="Email address" className={`${inputClass} w-full mt-3`}/>
                    <textarea placeholder="Your Message" className={`${inputClass} w-full mt-3 h-[150px] py-4`}/>
                    <button type="submit"
                            className="bg-[#FFBD00] text-white rounded-[100px] transition-all duration-300 ease-in-out border border-solid border-[#FFBD00]  hover:bg-transparent hover:border text-center cursor-pointer w-full py-2 mt-3 font-bebas text-[32px]">SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
}