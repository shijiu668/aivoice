'use client';

import { useEffect, useRef, useState } from 'react';

export default function SEOSection() {
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
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 1 */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 ${isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
                        Revolutionary AI Voice Generator Technology
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                Advanced AI Celebrity Voice Generator
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our cutting-edge AI voice generator harnesses the power of artificial intelligence to create incredibly realistic celebrity voices.
                                This revolutionary AI celebrity voice generator technology allows you to transform any text into speech that sounds exactly like your favorite celebrities.
                                Whether you need an AI voice changer for creative projects or professional applications, our platform delivers unparalleled quality and authenticity.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                The AI voice generator utilizes advanced neural networks trained on extensive voice datasets to ensure each generated voice maintains the unique characteristics,
                                tone, and speaking patterns of the original celebrity. This makes our AI voice generator the perfect solution for content creators,
                                marketers, and entertainment professionals seeking high-quality voice synthesis.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
                                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                                <ul className="space-y-2">
                                    <li>✨ Instant AI voice generation</li>
                                    <li>🎭 Multiple celebrity voices</li>
                                    <li>🔊 High-quality audio output</li>
                                    <li>📱 Mobile-friendly interface</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-apple-gray rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                            How Our AI Voice Changer Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Select Voice</h3>
                                <p className="text-gray-600">
                                    Choose from our collection of celebrity voices. Our AI voice generator supports multiple personalities,
                                    each carefully crafted to match the original speaker's unique vocal characteristics.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Enter Text</h3>
                                <p className="text-gray-600">
                                    Input your desired text into our AI voice changer. The system can handle various text lengths and
                                    automatically optimizes the content for the best voice generation results.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-apple-blue rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Generate Audio</h3>
                                <p className="text-gray-600">
                                    Our AI voice generator processes your request and creates high-quality audio that perfectly captures
                                    the selected celebrity's voice, ready for immediate download and use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Applications of AI Voice Generator Technology
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Content Creation and Entertainment
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                The AI voice generator has revolutionized content creation across multiple industries. Content creators use our AI celebrity voice generator
                                to produce engaging videos, podcasts, and social media content. The AI voice changer enables creators to add celebrity narration to their projects
                                without the need for expensive voice actors or complex recording sessions.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Entertainment companies leverage our AI voice generator for animated films, video games, and interactive media. The technology allows for
                                consistent voice quality across long-form content and enables creators to maintain character voices even when original actors are unavailable.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                                Educational and Training Applications
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Educational institutions utilize our AI voice changer to create engaging learning materials. The AI celebrity voice generator helps make
                                educational content more appealing to students by featuring familiar voices. Language learning applications particularly benefit from
                                the AI voice generator's ability to demonstrate proper pronunciation and intonation patterns.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-6">
                                <h4 className="text-xl font-semibold mb-4 text-gray-900">Industry Applications</h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
                                        <span>Marketing and Advertising</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
                                        <span>E-learning Platforms</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
                                        <span>Audiobook Production</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
                                        <span>Gaming and Animation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-apple-blue rounded-full"></span>
                                        <span>Accessibility Solutions</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6">
                                <h4 className="text-xl font-semibold mb-4 text-gray-900">Benefits</h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Cost-effective voice production</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Instant voice generation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Consistent voice quality</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>24/7 availability</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Advanced Features of Our AI Voice Changer
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">High Accuracy</h3>
                                <p className="text-sm text-white/80">Our AI voice generator achieves 95%+ accuracy in voice replication</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Multiple Voices</h3>
                                <p className="text-sm text-white/80">Access dozens of celebrity voices in our AI celebrity voice generator</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Real-time Processing</h3>
                                <p className="text-sm text-white/80">Generate voices instantly with our optimized AI voice changer</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Premium Quality</h3>
                                <p className="text-sm text-white/80">Studio-quality audio output from our AI voice generator</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 5 */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 delay-800 ${isVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        The Future of AI Voice Generation
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Next-Generation AI Celebrity Voice Generator Technology
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The field of AI voice generation continues to evolve rapidly, with our AI voice generator leading the charge in innovation.
                                Future developments in AI celebrity voice generator technology will include enhanced emotional expression, multi-language support,
                                and even more realistic voice synthesis. Our AI voice changer will soon support real-time voice transformation,
                                allowing users to speak in celebrity voices during live conversations and streaming.
                            </p>

                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Expanding Applications and Accessibility
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                As AI voice generator technology becomes more sophisticated, we anticipate broader adoption across industries.
                                The AI voice changer will become an essential tool for accessibility, helping individuals with speech impairments
                                communicate more effectively. Additionally, our AI celebrity voice generator will expand to include historical figures,
                                fictional characters, and custom voice creation capabilities.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-4 bg-blue-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Realism</h4>
                                    <p className="text-sm text-gray-600">Advanced neural networks for even more realistic voice generation</p>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Global Languages</h4>
                                    <p className="text-sm text-gray-600">Support for 100+ languages in our AI voice generator</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Custom Voices</h4>
                                    <p className="text-sm text-gray-600">Create personalized voices with our AI voice changer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div
                    ref={addToRefs}
                    className={`transform transition-all duration-1000 delay-1000 ${isVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="text-center bg-apple-gray rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Why Choose Our AI Voice Generator?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Our AI voice generator stands out as the premier choice for professional voice synthesis.
                            With cutting-edge AI celebrity voice generator technology and an intuitive AI voice changer interface,
                            we deliver unmatched quality and user experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
                                <p className="text-gray-600">Industry-leading AI voice generator with studio-quality output</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy to Use</h3>
                                <p className="text-gray-600">Intuitive AI voice changer interface for all skill levels</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Celebrity Voices</h3>
                                <p className="text-gray-600">Extensive library in our AI celebrity voice generator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}