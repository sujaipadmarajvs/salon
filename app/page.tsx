import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppChat from "@/components/WhatsAppChat";
import ScrollToTop from "@/components/ScrollToTop";
import GalleryPreview from "@/components/GalleryPreview";
import BrandMarquee from "@/components/BrandMarquee";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <BrandMarquee />
                <Services />
                <GalleryPreview />
                <Testimonials />
                <Contact />
            </main>
            <WhatsAppChat />
            <ScrollToTop />
        </>
    );
}
