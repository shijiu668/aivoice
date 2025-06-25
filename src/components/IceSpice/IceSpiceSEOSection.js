'use client';

import { useEffect, useRef, useState } from 'react';

export default function IceSpiceSEOSection() {
    const [isVisible, setIsVisible] = useState({});
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [index]: true }));
                    }
                },
                { threshold: 0.1 }
            );

            if (ref) {
                observer.observe(ref);
            }

            return observer;
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 1 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 ${isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
                        Advanced Ice Spice AI Voice Generator Technology
                    </h2>

                    <div className="bg-gray-50 rounded-3xl p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-pink-600">Revolutionary Ice Spice AI Voice Technology</h3>
                                <p className="text-gray-700 mb-6">
                                    Our cutting-edge ice spice ai generator utilizes advanced artificial intelligence to create incredibly realistic
                                    ice spice ai voice content. This innovative voice spice technology transforms any text into authentic
                                    ice spice voice that captures the unique vocal characteristics of the popular rapper and artist. Whether you need an
                                    ice spice voice ai for entertainment or creative purposes, our ice spice ai voice generator delivers unmatched quality.
                                </p>
                                <p className="text-gray-700">
                                    The ice spice voice changer employs sophisticated neural networks trained on extensive Ice Spice voice datasets
                                    to ensure each generated ai ice spice voice maintains the distinctive tone, accent, and rap delivery style.
                                    This makes our voicespice platform the perfect solution for creators seeking professional Ice Spice voice synthesis.
                                </p>
                            </div>
                            <div className="bg-pink-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6 text-pink-800">Ice Spice Voice Features</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Authentic ice spice ai voice</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Advanced voice spice technology</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Instant ice spice voice generation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Professional ai ice spice voice output</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-200 ${isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">
                                How Ice Spice Voice AI Technology Works
                            </h2>
                            <h3 className="text-xl font-semibold mb-4 text-purple-600">Ice Spice Voice Changer Process</h3>
                            <p className="text-gray-600 mb-6">
                                Our ice spice voice changer uses advanced neural networks to analyze and replicate the distinctive characteristics
                                of Ice Spice's rap style and vocal delivery. The ice spice ai voice system processes your input text and applies
                                Ice Spice's unique speaking characteristics, including her distinctive accent, rhythm, and vocal inflections for authentic
                                ice spice voice ai results.
                            </p>

                            <h3 className="text-xl font-semibold mb-4 text-purple-600">VoiceSpice AI Technology</h3>
                            <p className="text-gray-600">
                                The voicespice platform captures signature elements including Ice Spice's Bronx accent, characteristic rap flow,
                                and distinctive vocal patterns. Our ice spice ai ensures each ai ice spice voice output maintains the rapper's
                                authentic style and modern hip-hop delivery.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-pink-50 rounded-xl p-6 border-l-4 border-pink-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 1: Text Analysis</h4>
                                <p className="text-gray-600 text-sm">Ice spice ai analyzes your input text for optimal voice generation</p>
                            </div>
                            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 2: Voice Processing</h4>
                                <p className="text-gray-600 text-sm">Ice spice ai voice technology applies authentic rap speech patterns</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 3: Audio Generation</h4>
                                <p className="text-gray-600 text-sm">Generate high-quality ice spice voice output instantly</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Ice Spice AI Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-pink-600">Music Production</h3>
                            <p className="text-gray-600 mb-4">
                                Music producers use our ice spice ai voice for creating demo tracks and rap content.
                                The ice spice voice ai helps generate authentic rap verses with professional voice spice quality.
                            </p>
                            <div className="text-sm text-pink-600 font-medium">• Demo track production with ice spice voice</div>
                            <div className="text-sm text-pink-600 font-medium">• Rap content creation using voicespice</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-purple-600">Entertainment Content</h3>
                            <p className="text-gray-600 mb-4">
                                Content creators utilize our ice spice voice changer for entertainment videos and viral content.
                                The ai ice spice voice enables creators to add authentic rap vocals to their projects.
                            </p>
                            <div className="text-sm text-purple-600 font-medium">• YouTube entertainment with ice spice ai</div>
                            <div className="text-sm text-purple-600 font-medium">• Viral content using ice spice voice ai</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-blue-600">Social Media Content</h3>
                            <p className="text-gray-600 mb-4">
                                Social media influencers leverage our ice spice ai voice for TikTok and Instagram content.
                                The voice spice technology enables engaging social media posts with authentic Ice Spice vocals.
                            </p>
                            <div className="text-sm text-blue-600 font-medium">• TikTok videos with ice spice voice</div>
                            <div className="text-sm text-blue-600 font-medium">• Instagram content using ai ice spice voice</div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Ice Spice Voice Generator Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎤</span>
                                </div>
                                <h3 className="font-bold mb-2">Rap Voice</h3>
                                <p className="text-white/90 text-sm">Authentic ice spice ai voice with rap authenticity and flow</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-bold mb-2">Instant Generation</h3>
                                <p className="text-white/90 text-sm">Generate ice spice voice content in seconds with our voice spice AI</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎵</span>
                                </div>
                                <h3 className="font-bold mb-2">Artist Accuracy</h3>
                                <p className="text-white/90 text-sm">Precise ice spice ai voice replication with hip-hop authenticity</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🆓</span>
                                </div>
                                <h3 className="font-bold mb-2">Free Access</h3>
                                <p className="text-white/90 text-sm">Use our ice spice voice changer without registration or fees</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Understanding Ice Spice Voice Characteristics
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-pink-600">What Makes Ice Spice Voice Unique</h3>
                            <p className="text-gray-600">
                                Ice Spice's voice is instantly recognizable for its distinctive Bronx accent, confident delivery, and modern rap flow.
                                Our ice spice ai captures these authentic elements of her vocal style, including her characteristic pronunciation,
                                rhythm patterns, and the unique vocal inflections that made Ice Spice a breakout star in hip-hop.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800">Ice Spice AI Voice Analysis</h3>
                            <p className="text-gray-600">
                                The ice spice voice ai replicates her natural rap characteristics, providing authentic hip-hop voice synthesis
                                for entertainment and creative applications. Our voicespice technology ensures each ai ice spice voice output
                                maintains the confident energy and modern style that made Ice Spice's voice so distinctive in contemporary rap music.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-gray-700">Distinctive Bronx accent and pronunciation</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-gray-700">Modern rap flow and rhythm patterns</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-gray-700">Confident and energetic delivery</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                    <span className="text-gray-700">Characteristic vocal inflections and style</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-purple-600">Popular Ice Spice Voice Applications</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-purple-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Music Production</h4>
                                    <p className="text-gray-600 text-sm">Use ice spice ai voice for rap demos and music creation</p>
                                </div>
                                <div className="border-l-4 border-purple-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Social Media Content</h4>
                                    <p className="text-gray-600 text-sm">Create engaging ice spice voice ai content for TikTok and Instagram</p>
                                </div>
                                <div className="border-l-4 border-purple-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Entertainment Videos</h4>
                                    <p className="text-gray-600 text-sm">Generate entertaining ai ice spice voice for viral content</p>
                                </div>
                                <div className="border-l-4 border-purple-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Creative Projects</h4>
                                    <p className="text-gray-600 text-sm">Professional voice spice for creative and artistic endeavors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6 - FAQ */}
                <div
                    ref={addToRefs}
                    className={`transform transition-all duration-1000 delay-1000 ${isVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Ice Spice AI Voice Generator FAQ
                    </h2>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                How accurate is the ice spice ai voice generator?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our ice spice ai voice generator achieves 95%+ accuracy in replicating Ice Spice's voice patterns,
                                accent, and rap delivery through advanced ice spice voice ai technology.
                            </p>
                        </div>

                        <div className="bg-pink-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                Is the ice spice voice changer free to use?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Yes! Our ice spice ai allows unlimited voice spice generation
                                without registration, payment, or hidden fees. Generate ice spice voice content instantly.
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                Can I download the generated ice spice ai voice?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Absolutely! Our ice spice voice ai provides high-quality audio downloads.
                                Save your Ice Spice voice content for offline use in your music and entertainment projects.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                What makes your voicespice technology special?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our ice spice voice changer uses cutting-edge neural networks specifically trained
                                on Ice Spice voice data, ensuring authentic ai ice spice voice that captures her unique rap characteristics.
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                How long does ice spice voice generation take?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our ice spice ai voice generator produces Ice Spice voice content in just seconds!
                                The advanced voice spice technology processes text instantly for immediate results.
                            </p>
                        </div>

                        <div className="bg-yellow-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">
                                Can I use ice spice ai voice for music production?
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our ice spice ai voice generator is designed for entertainment, creative, and demo purposes.
                                For commercial music production, please review our terms of service regarding artist voice usage and copyright considerations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}