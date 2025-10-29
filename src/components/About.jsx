import BuyTicket from "./BuyTicket.jsx";
import SectionWrapper from "./SectionWrapper.jsx";

export default function About() {
  const pClass = "text-[#91887E] p-0 m-0 leading-relaxed max-w-[600px]";
  return (
    <SectionWrapper heading="ABOUT CONFERENCE" id="about">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* LEFT */}
          <div className="flex flex-col justify-between md:w-1/2 font-bebas">
            <h2 className="text-white text-[38px] md:text-[48px] lg:text-[64px]">
              WELCOME TO{" "}
              <span className="text-(--primary-color)">THEDEVWORLD</span>{" "}
              CONFERENCE
            </h2>

            <BuyTicket className="text-[24px] lg:text-[32px] py-2 lg:py-3 px-[35px] w-full md:w-[75%] mt-6 md:mt-0">
              GET YOUR TICKET
            </BuyTicket>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-white md:w-1/2">
            <p className={pClass}>
              TheDevWorld is not just another tech event — it’s a hub where
              developers, designers, and technology enthusiasts come together to
              share ideas, learn from experts, and build connections that shape
              the future of the tech industry.
            </p>
            <p className={pClass}>
              Organized by VTS Apps Team, this conference aims to bridge the gap
              between students, professionals, and industry leaders through a
              series of keynote talks, hands-on workshops, and panel
              discussions. Whether you’re a seasoned developer or just stepping
              into the world of technology, TheDevWorld offers a unique
              opportunity to expand your knowledge, sharpen your skills, and
              become part of a vibrant tech community.
            </p>
            <p className={pClass}>
              With a focus on innovation, collaboration, and real-world impact,
              TheDevWorld is the place where ideas turn into action.
            </p>

            <div className="flex justify-between pt-4">
              <div className="flex flex-col">
                <h3 className="text-[#FF60CE] text-[32px] lg:text-[48px] font-bebas">
                  03
                </h3>
                <p className={pClass}>DayEvent</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#FF60CE] text-[32px] lg:text-[48px] font-bebas">
                  15+
                </h3>
                <p className={pClass}>Speakers</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#FF60CE] text-[32px] lg:text-[48px] font-bebas">
                  20+
                </h3>
                <p className={pClass}>Sponsors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
