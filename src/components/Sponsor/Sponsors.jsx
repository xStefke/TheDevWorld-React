import SectionWrapper from "../SectionWrapper.jsx";
import {sponsorImages} from "../../data/galleryImages.js";
import SponsorCard from "./SponsorCard.jsx";

export default function Sponsors() {
    return (
        <SectionWrapper heading="SPONSORS">
            <div className="grid lg:grid-cols-4 grid-cols-2 max-w-7xl mx-auto">
                {sponsorImages.map((image, index) => (
                    <SponsorCard key={index} img={image}/>
                ))}
            </div>
        </SectionWrapper>
    );
}