'use client';

import Header from '@/components/Header';
import IceSpiceVoiceGenerator from '@/components/IceSpice/IceSpiceVoiceGenerator';
import IceSpiceSEOSection from '@/components/IceSpice/IceSpiceSEOSection';
import Footer from '@/components/Footer';

export default function IceSpiceAI() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Integrated Generator */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ice Spice AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Enter any text and make Ice Spice say your words instantly with our advanced AI voice generator.
            </p>
          </div>
          
          {/* Integrated Ice Spice Voice Generator */}
          <IceSpiceVoiceGenerator />
        </div>
      </section>

      {/* Ice Spice SEO Content Section */}
      <IceSpiceSEOSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}