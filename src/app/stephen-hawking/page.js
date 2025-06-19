'use client';

import Header from '@/components/Header';
import HawkingVoiceGenerator from '@/components/Hawking/HawkingVoiceGenerator';
import HawkingSEOSection from '@/components/Hawking/HawkingSEOSection';
import Footer from '@/components/Footer';

export default function StephenHawkingVoiceGenerator() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Stephen Hawking Voice Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Stephen Hawking voice instantly with our advanced text to speech technology.
            </p>
          </div>
          
          {/* Integrated Hawking Voice Generator */}
          <HawkingVoiceGenerator />
        </div>
      </section>

      {/* Hawking SEO Content Section */}
      <HawkingSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}