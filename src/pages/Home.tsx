import Hero from "../components/sections/Hero";
import Checkin from "../components/sections/Checkin";
import Navbar from "../components/layout/Navbar";
import Playlist from "../components/sections/Playlist";
import Galeria from "../components/sections/Galeria";
import Footer from "../components/layout/Footer";
import Agenda from "../components/sections/Agenda";
import Testimonials from "../components/sections/Testimonials";

export function Home() {
    return (
        <div className="min-h-screen bg-">
            <Navbar />
            <Hero />
            <Agenda />
            <Checkin />
            <Testimonials />
            <Playlist />
            <Galeria />
            <Footer />
        </div>
    );
}
