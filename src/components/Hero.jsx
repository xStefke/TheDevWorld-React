// Hero.jsx (tvoj dizajn, samo responsive)
import heroImg from '../img/hero.jpg';
import BuyTicket from "./BuyTicket.jsx";

export default function Hero() {
    return (
        <div id="hero-section"
             className="bg-cover bg-center bg-no-repeat h-[95vh] relative z-[1] text-white flex items-center bg-fixed font-bebas"
             style={{backgroundImage: `url(${heroImg})`}}>

            {/* Overlay ostaje tvoj */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-[#000000af] bg-gradient-to-b from-black/0 to-[#0b0016] z-[1]"></div>

            <div className="container flex flex-col z-[5] mx-auto max-w-7xl px-4">
                <h1 className="text-amber-400 text-[40px] sm:text-[50px] md:text-[64px]">
                    THEDEVWORLD 2025
                </h1>

                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] mt-3">
                    Where the world’s top developers unite to build the future <br className="hidden sm:block"/>
                    one line of code at a time.
                </h3>

                <h3 className="text-[18px] sm:text-[24px] md:text-[32px] mt-3">
                    NIS · 8-11 November
                </h3>

                <BuyTicket className="w-[200px] sm:w-[250px] md:w-[300px] px-4 py-3 mt-4 text-[24px] md:text-[32px]">
                    GET YOUR TICKET
                </BuyTicket>
            </div>
        </div>
    );
}
