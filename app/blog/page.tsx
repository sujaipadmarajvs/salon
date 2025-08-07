import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const Blog = () => {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-babu-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
              Beauty Blog
            </h1>
            <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest beauty trends, tips, and insights from our expert stylists.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-serif font-bold text-babu-primary mb-8">Featured Article</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="aspect-video md:aspect-square relative">
                      <Image
                        src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Featured blog post"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>January 15, 2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>BA-BU Team</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-babu-primary mb-4">
                      The Ultimate Guide to Bridal Beauty Preparation
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Planning your wedding beauty timeline can be overwhelming. Our comprehensive guide breaks down 
                      everything you need to know about preparing for your special day, from skincare routines to 
                      final touch-ups.
                    </p>
                    <Link
                      href="/blog/bridal-beauty-guide"
                      className="inline-flex items-center space-x-2 text-babu-teal hover:text-babu-teal-dark font-semibold transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold text-babu-primary mb-12 text-center">Latest Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteConfig.blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image || 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-babu-primary mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 text-babu-teal hover:text-babu-teal-dark font-semibold transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beauty Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-babu-primary mb-4">
                Quick Beauty Tips
              </h2>
              <div className="w-20 h-1 bg-babu-accent-2 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Expert tips from our professional stylists to help you look and feel your best every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  tip: "Deep condition your hair weekly for healthy, shiny locks",
                  category: "Hair Care"
                },
                {
                  tip: "Always use SPF, even indoors, to protect your skin",
                  category: "Skin Care"
                },
                {
                  tip: "Invest in quality makeup brushes for better application",
                  category: "Makeup"
                },
                {
                  tip: "Trim your hair every 6-8 weeks to prevent split ends",
                  category: "Hair Care"
                }
              ].map((item, index) => (
                <div key={index} className="bg-babu-primary text-white p-6 rounded-2xl">
                  <div className="text-babu-accent-2 text-sm font-semibold mb-2">{item.category}</div>
                  <p className="leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-babu-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest beauty tips, trends, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-babu-primary focus:outline-none focus:ring-2 focus:ring-babu-accent-2"
              />
              <button className="bg-babu-teal hover:bg-babu-teal-dark px-8 py-3 rounded-full font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;