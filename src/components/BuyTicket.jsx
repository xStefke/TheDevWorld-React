export default function BuyTicket({ children, className = "" }) {
  const defaultClasses =
    "bg-(--primary-color) text-white rounded-[100px] transition-all duration-300 ease-in-out border border-solid border-(--primary-color)  hover:bg-transparent hover:border text-center cursor-pointer";
  return (
    <button className={`${defaultClasses} ${className} `}>{children}</button>
  );
}
