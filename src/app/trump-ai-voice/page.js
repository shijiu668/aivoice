'use client';

import Header from '@/components/Header';
import TrumpVoiceGenerator from '@/components/Trump/TrumpVoiceGenerator';
import TrumpSEOSection from '@/components/Trump/TrumpSEOSection';
import Footer from '@/components/Footer';

export default function TrumpAIVoice() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section with Integrated Generator */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                            Trump AI Voice
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                            Generate authentic Donald Trump AI voice instantly with our advanced Trump voice generator.
                        </p>
                    </div>

                    {/* Integrated Trump Voice Generator */}
                    <TrumpVoiceGenerator />
                </div>
            </section>

            {/* Trump SEO Content Section */}
            <TrumpSEOSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}