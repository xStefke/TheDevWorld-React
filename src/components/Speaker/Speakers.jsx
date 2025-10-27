import SpeakerCard from "./SpeakerCard.jsx";
import {useState} from "react";
import SectionWrapper from "../SectionWrapper.jsx";
import {speakerData} from "../../data/speakerData.js";
import SpeakerModal from "./SpeakerModal.jsx";

export default function Speakers() {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    return (
        <SectionWrapper heading="Speakers" id="speakers">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                {speakerData.map((speaker) => (
                    <div key={speaker.id} onClick={() => setSelectedSpeaker(speaker)}>

                        <SpeakerCard key={speaker.id} img={speaker.img} name={speaker.name} role={speaker.role.en}/>
                    </div>
                ))}
            </div>
            <SpeakerModal isOpen={!!selectedSpeaker} speaker={selectedSpeaker}
                          onClose={() => setSelectedSpeaker(null)}/>
        </SectionWrapper>
    );
}
