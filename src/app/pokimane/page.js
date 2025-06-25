'use client';

import Header from '@/components/Header';
import PokimaneVoiceGenerator from '@/components/Pokimane/PokimaneVoiceGenerator';
import PokiraneSEOSection from '@/components/Pokimane/PokiraneSEOSection';
import Footer from '@/components/Footer';

export default function PokimaneAIVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Pokimane AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Pokimane AI voice instantly with our advanced Pokimane voice generator.
            </p>
          </div>
          
          {/* Integrated Pokimane Voice Generator */}
          <PokimaneVoiceGenerator />
        </div>
      </section>

      {/* Pokimane SEO Content Section */}
      <PokiraneSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}