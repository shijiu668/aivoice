'use client';

import Header from '@/components/Header';
import VoiceGenerator from '@/components/VoiceGenerator';
import SEOSection from '@/components/SEOSection';
import Footer from '@/components/Footer';

export default function Home() {
  const scrollToGenerator = () => {
    document.getElementById('generator').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              AI Celebrity Voice Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              Type your text and hear celebrities say anything you want instantly.
              Make Trump, Obama, Stephen Hawking, SpongeBob, and more speak your words with our free AI celebrity voice generator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={scrollToGenerator}
                className="px-8 py-4 bg-apple-blue text-white rounded-2xl font-semibold text-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try Generator Now
              </button>
              <button className="px-8 py-4 bg-white text-apple-blue border-2 border-apple-blue rounded-2xl font-semibold text-lg hover:bg-apple-blue hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-apple-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Instant Generation</h3>
                <p className="text-gray-600">Generate celebrity voices in seconds with our AI voice generator</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Celebrity Voices</h3>
                <p className="text-gray-600">Choose from a wide selection of famous celebrity voices</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">High Quality</h3>
                <p className="text-gray-600">Professional-grade audio output with crystal clear quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Generator Section */}
      <VoiceGenerator />

      {/* SEO Content Section */}
      <SEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}