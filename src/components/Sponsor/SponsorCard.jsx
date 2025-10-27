export default function SponsorCard({img}) {
    return (
        <div
            className="flex justify-center items-center p-12 border border-[#b1aaa2] bg-gradient-to-tr from-[#1E0033] to-black">
            <img src={img} alt=""
                 className="w-full opacity-50 transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-100"/>
        </div>
    );
}