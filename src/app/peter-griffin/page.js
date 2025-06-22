'use client';

import Header from '@/components/Header';
import PeterVoiceGenerator from '@/components/Peter/PeterVoiceGenerator';
import PeterSEOSection from '@/components/Peter/PeterSEOSection';
import Footer from '@/components/Footer';

export default function PeterGriffinAIVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Peter Griffin AI Voice Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Peter Griffin AI voice instantly with our advanced Family Guy voice generator.
            </p>
          </div>
          
          {/* Integrated Peter Voice Generator */}
          <PeterVoiceGenerator />
        </div>
      </section>

      {/* Peter SEO Content Section */}
      <PeterSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}