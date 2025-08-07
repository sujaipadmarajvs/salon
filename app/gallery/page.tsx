import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

const GalleryPage = () => {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-babu-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Our Gallery
            </h1>
            <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our beautiful salon space and see the amazing transformations we create for our clients every day.
            </p>
          </div>
        </section>

        {/* Gallery Component */}
        <Gallery />

        {/* Additional Gallery Sections */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-babu-primary mb-4">
                Before & After Transformations
              </h2>
              <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the incredible transformations our expert stylists create. Each client leaves feeling confident and beautiful.
              </p>
            </div>

            {/* Before/After Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-babu-accent-1 to-babu-accent-2 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">Before/After {item}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-babu-primary mb-2">Hair Transformation</h3>
                    <p className="text-gray-600">Complete makeover with styling and coloring</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-babu-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied clients who have experienced the BA-BU difference
            </p>
            <a
              href="/#contact"
              className="bg-babu-teal hover:bg-babu-teal-dark text-white px-8 py-4 rounded-full font-semibold transition-colors inline-block"
            >
              Book Your Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;