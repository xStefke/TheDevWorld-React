export default function BuyTicket({children, className = ''}) {
    const defaultClasses = 'bg-[#FFBD00] text-white rounded-[100px] transition-all duration-300 ease-in-out border border-solid border-[#FFBD00]  hover:bg-transparent hover:border text-center cursor-pointer';
    return (
        <a href=""
           className={`${defaultClasses} ${className} `}>{children}</a>
    );
}