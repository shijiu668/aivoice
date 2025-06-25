'use client';

import Header from '@/components/Header';
import TaylorSwiftVoiceGenerator from '@/components/TaylorSwift/TaylorSwiftVoiceGenerator';
import TaylorSwiftSEOSection from '@/components/TaylorSwift/TaylorSwiftSEOSection';
import Footer from '@/components/Footer';

export default function TaylorSwiftAIVoice() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Taylor Swift AI Voice
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Generate authentic Taylor Swift AI voice instantly with our advanced Taylor Swift voice generator.
            </p>
          </div>
          
          {/* Integrated Taylor Swift Voice Generator */}
          <TaylorSwiftVoiceGenerator />
        </div>
      </section>

      {/* Taylor Swift SEO Content Section */}
      <TaylorSwiftSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}