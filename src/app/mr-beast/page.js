'use client';

import Header from '@/components/Header';
import MrBeastVoiceGenerator from '@/components/MrBeast/MrBeastVoiceGenerator';
import MrBeastSEOSection from '@/components/MrBeast/MrBeastSEOSection';
import Footer from '@/components/Footer';

export default function MrBeastAIVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Mr Beast AI Voice
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Mr Beast AI voice and MrBeast AI voice instantly with our advanced voice generator and text to speech technology.
            </p>
          </div>
          
          {/* Integrated MrBeast Voice Generator */}
          <MrBeastVoiceGenerator />
        </div>
      </section>

      {/* MrBeast SEO Content Section */}
      <MrBeastSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}