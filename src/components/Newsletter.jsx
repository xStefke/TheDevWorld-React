export default function Newsletter() {
    return (
      <div className="p-18 flex flex-col items-center justify-center">
        <h2 className="font-bebas text-[48px] lg:text-[64px] text-white text-center">
          NEWSLETTER
        </h2>
        <h3 className="text-white text-center text-[18px] lg:text-[24px] font-semibold -mt-2">
          Stay in the loop - get updates!
        </h3>
        <form
          action=""
          className="flex flex-col items-center justify-center w-[350px] mt-5 lg:mt-10"
        >
          <input
            type="email"
            className="w-full rounded-3xl h-10 pl-5 bg-white"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="bg-(--primary-color) text-white rounded-[100px] transition-all duration-300 ease-in-out border border-solid border-(--primary-color)  hover:bg-transparent hover:border text-center cursor-pointer w-full px-2 py-1 mt-4 text-[24px] lg:text-[32px] font-bebas"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    );
}