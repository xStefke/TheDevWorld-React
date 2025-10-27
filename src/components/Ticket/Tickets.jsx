import SectionWrapper from "../SectionWrapper.jsx";
import TicketCard from "./TicketCard.jsx";
import {tickets} from "../../data/ticketData.js";

export default function Tickets() {
    return (
        <SectionWrapper heading="TICKETS">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                {tickets.map((ticket, i) => (
                    <TicketCard key={i} {...ticket} />
                ))}
            </div>
        </SectionWrapper>
    );
}