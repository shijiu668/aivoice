'use client';

import Header from '@/components/Header';
import SiriVoiceGenerator from '@/components/Siri/SiriVoiceGenerator';
import SiriSEOSection from '@/components/Siri/SiriSEOSection';
import Footer from '@/components/Footer';

export default function SiriVoiceModifier() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Siri Voice Modifier
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Siri voice instantly with our advanced Siri voice modifier and Siri voice generator.
            </p>
          </div>
          
          {/* Integrated Siri Voice Generator */}
          <SiriVoiceGenerator />
        </div>
      </section>

      {/* Siri SEO Content Section */}
      <SiriSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}