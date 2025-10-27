import {useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Info from "./components/Info/Info.jsx";
import About from "./components/About.jsx";
import Speakers from "./components/Speaker/Speakers.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import AboutOrganizer from "./components/AboutOrganizer.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Sponsors from "./components/Sponsor/Sponsors.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Tickets from "./components/Ticket/Tickets.jsx";
import Faq from "./components/FAQ/Faq.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar/>
            <Hero/>
            <Info/>
            <About/>
            <Speakers/>
            <Schedule/>
            <AboutOrganizer/>
            <Gallery/>
            <Sponsors/>
            <Newsletter/>
            <Tickets/>
            <Faq/>
            <Feedback/>
            <Footer/>
        </>
    );
}

export default App;
