import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";
import ChromaGrid from "@/components/ChromaGrid";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <ChromaGrid />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppChat />
            <ScrollToTop />
        </>
    );
}
