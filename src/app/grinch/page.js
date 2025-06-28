'use client';

import Header from '@/components/Header';
import GrinchVoiceGenerator from '@/components/Grinch/GrinchVoiceGenerator';
import GrinchSEOSection from '@/components/Grinch/GrinchSEOSection';
import Footer from '@/components/Footer';

export default function VoiceOfTheGrinch() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Voice of the Grinch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic voice of the Grinch instantly with our advanced Grinch voice generator and voice changer.
            </p>
          </div>
          
          {/* Integrated Grinch Voice Generator */}
          <GrinchVoiceGenerator />
        </div>
      </section>

      {/* Grinch SEO Content Section */}
      <GrinchSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}