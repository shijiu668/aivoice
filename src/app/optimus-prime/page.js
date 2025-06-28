'use client';

import Header from '@/components/Header';
import OptimusVoiceGenerator from '@/components/Optimus/OptimusVoiceGenerator';
import OptimusSEOSection from '@/components/Optimus/OptimusSEOSection';
import Footer from '@/components/Footer';

export default function OptimusPrimeVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Optimus Prime Voice
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Optimus Prime voice and voice of Optimus Prime instantly with our advanced Transformers voice generator.
            </p>
          </div>
          
          {/* Integrated Optimus Voice Generator */}
          <OptimusVoiceGenerator />
        </div>
      </section>

      {/* Optimus SEO Content Section */}
      <OptimusSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}