export default function InfoCard({heading2, heading3}) {
    return (
        <div className="w-1/2 lg:w-1/4 px-2 mt-3 lg:mt-0">
            <div
                className="bg-[#2D223C] text-white py-[30px] px-[50px] sm:px-[30px] md:px-[40px] lg:px-[50px] flex flex-col items-center justify-center rounded-3xl">
                <h2 className="text-[48px] lg:text-[64px] font-bebas">{heading2}</h2>
                <h3 className="text-[24px] lg:text-[32px] font-bebas">{heading3}</h3>
            </div>
        </div>
    );
}