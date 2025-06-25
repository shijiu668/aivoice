'use client';

import Header from '@/components/Header';
import MorganFreemanVoiceGenerator from '@/components/MorganFreeman/MorganFreemanVoiceGenerator';
import MorganFreemanSEOSection from '@/components/MorganFreeman/MorganFreemanSEOSection';
import Footer from '@/components/Footer';

export default function MorganFreemanVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Morgan Freeman Voice
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Enter any text and make Morgan Freeman say your words instantly with our advanced voice generator.
            </p>
          </div>
          
          {/* Integrated Morgan Freeman Voice Generator */}
          <MorganFreemanVoiceGenerator />
        </div>
      </section>

      {/* Morgan Freeman SEO Content Section */}
      <MorganFreemanSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}