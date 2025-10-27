import SectionWrapper from "../SectionWrapper.jsx";
import {faqData} from "../../data/faqData.js";
import FaqItem from "./FaqItem.jsx";

export default function Faq() {
    return (
        <SectionWrapper heading="FAQ">
            <div
                className="max-w-7xl mx-auto bg-gradient-to-br from-[#1E0033] to-[#000000] rounded-4xl border border-white">
                {faqData.map((faq, i) => (
                    <FaqItem key={i} {...faq} />
                ))}
            </div>
        </SectionWrapper>
    );
}