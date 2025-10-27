import SectionWrapper from "./SectionWrapper.jsx";
import organizerLogo from "../img/org-logo.png";

export default function AboutOrganizer() {
    return (
        <SectionWrapper heading="ABOUT THE ORGANIZER">
            <div className="flex max-w-7xl mx-auto flex-col lg:flex-row gap-5">
                <div className="flex flex-1/2 items-center justify-center">
                    <img src={organizerLogo} alt=""/>
                </div>
                <div className="flex-1/2">
                    <p className="text-[#91887E] mb-3">
                        <strong>VTS Apps Team</strong> is a team of passionate students from the Academy of Applied
                        Technical Sciences Niš, led by <strong>Dr. Slavimir Stošović</strong>. For years, this team has
                        been a hub for talented individuals specializing in software development, competitive
                        programming, and hackathon innovation.
                    </p>
                    <p className="text-[#91887E] mb-3">
                        Through numerous competitions, projects, and community-driven initiatives, VTS Apps Team
                        empowers students to transform ideas into real-world solutions, promoting teamwork, creativity,
                        and technical excellence.
                    </p>
                    <p className="text-[#91887E] mb-3">
                        This conference is organized by VTS Apps Team with the mission to connect aspiring developers,
                        industry experts, and tech enthusiasts under one roof, fostering a community of collaboration
                        and innovation.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}