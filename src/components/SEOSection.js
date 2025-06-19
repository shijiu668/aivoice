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
                        Advanced Celebrity AI Voice Generator Technology
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                                Revolutionary AI Celebrity Voice Generator
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our cutting-edge celebrity AI voice generator utilizes advanced artificial intelligence to create incredibly realistic celebrity voices.
                                This innovative AI celebrity voice generator technology transforms any text into authentic celebrity speech that captures the unique
                                vocal characteristics of your favorite stars. Whether you need a celebrity voice generator for entertainment, content creation,
                                or professional projects, our celebrity voice AI delivers unmatched quality and realism.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                The celebrity AI voice generator employs sophisticated neural networks trained on extensive celebrity voice datasets to ensure
                                each generated voice maintains the distinctive tone, accent, and speaking patterns of the original celebrity. This makes our
                                AI voice generator celebrity solution the perfect choice for creators seeking high-quality celebrity voice synthesis.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl p-8 text-white">
                                <h4 className="text-xl font-semibold mb-4">Celebrity Voice Features</h4>
                                <ul className="space-y-2">
                                    <li>🎭 Authentic celebrity AI voices</li>
                                    <li>⚡ Instant celebrity voice generation</li>
                                    <li>🔊 High-quality celebrity voice output</li>
                                    <li>📱 Free celebrity AI voice generator</li>
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
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                            How Our Celebrity Voice Changer Works
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Select Celebrity Voice</h3>
                                <p className="text-gray-600">
                                    Choose from our extensive collection of celebrity AI voices. Our free celebrity AI voice generator supports
                                    multiple famous personalities, each meticulously crafted using advanced celebrity voice AI technology.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Input Your Text</h3>
                                <p className="text-gray-600">
                                    Enter your desired text into our celebrity voice generator. The AI celebrity voice system automatically
                                    optimizes the content for the best celebrity voice changer results.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Generate Celebrity Voice</h3>
                                <p className="text-gray-600">
                                    Our celebrity AI voice generator processes your request instantly, creating authentic celebrity voices
                                    that perfectly capture each star's unique vocal signature.
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
                        Free Celebrity AI Voice Generator Applications
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Content Creation with Celebrity AI Voices
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Content creators worldwide use our free celebrity AI voice generator to produce engaging videos, podcasts, and social media content.
                                The celebrity voice generator online free platform enables creators to add authentic celebrity narration to their projects without
                                expensive voice actor fees. Our AI voice celebrity technology has revolutionized how creators approach celebrity voice content.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Entertainment companies leverage our celebrity AI voice generator for animated films, video games, and interactive media.
                                The free AI celebrity voice generator allows for consistent celebrity voice quality across long-form content, enabling creators
                                to maintain celebrity AI voices even when original celebrities are unavailable.
                            </p>

                            <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                                Professional Celebrity Voice Applications
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Businesses utilize our celebrity voice changer for marketing campaigns, advertisements, and branded content.
                                The AI celebrity voice generator free platform helps companies create memorable celebrity voice experiences that
                                resonate with audiences. Educational institutions use celebrity AI voices to make learning more engaging and accessible.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-6">
                                <h4 className="text-xl font-semibold mb-4 text-gray-900">Celebrity Voice Industries</h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Marketing & Celebrity Voice Advertising</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Entertainment & Celebrity AI Content</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Education with Celebrity Voices</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Gaming & Celebrity AI Characters</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>Audiobook Celebrity Narration</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-6">
                                <h4 className="text-xl font-semibold mb-4 text-gray-900">Celebrity Voice Benefits</h4>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span>Free celebrity voice generation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span>Instant celebrity AI voice creation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span>Professional celebrity voice quality</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                        <span>24/7 celebrity voice availability</span>
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
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Advanced Celebrity Voice Changer Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">High-Quality Celebrity Voices</h3>
                                <p className="text-sm text-white/80">Our celebrity AI voice generator achieves 95%+ accuracy in celebrity voice replication</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Multiple Celebrity AI Voices</h3>
                                <p className="text-sm text-white/80">Access dozens of celebrity voices in our free celebrity AI voice generator</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Real-time Celebrity Voice Processing</h3>
                                <p className="text-sm text-white/80">Generate celebrity voices instantly with our optimized celebrity voice changer</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold mb-2">Premium Celebrity Voice Quality</h3>
                                <p className="text-sm text-white/80">Studio-quality celebrity voice output from our AI celebrity voice generator</p>
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
                        The Future of Celebrity AI Voice Generation
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Next-Generation Celebrity Voice AI Technology
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                The field of celebrity AI voice generation continues to evolve rapidly, with our celebrity voice generator leading innovation in celebrity voice AI.
                                Future developments in AI celebrity voice generator technology will include enhanced emotional expression, multi-language celebrity voices,
                                and even more realistic celebrity voice synthesis. Our celebrity voice changer will soon support real-time celebrity voice transformation,
                                allowing users to speak in celebrity AI voices during live conversations.
                            </p>

                            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                Expanding Celebrity Voice Applications
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                As celebrity AI voice generator technology becomes more sophisticated, we anticipate broader adoption of celebrity voice AI across industries.
                                The free celebrity AI voice generator will become essential for accessibility, helping individuals communicate using celebrity voices.
                                Additionally, our AI celebrity voice generator will expand to include historical figures, fictional characters, and custom celebrity voice creation.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="text-center p-4 bg-blue-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Celebrity Voice Realism</h4>
                                    <p className="text-sm text-gray-600">Advanced neural networks for even more realistic celebrity voice generation</p>
                                </div>
                                <div className="text-center p-4 bg-green-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Global Celebrity Voices</h4>
                                    <p className="text-sm text-gray-600">Support for international celebrity voices in our celebrity AI voice generator</p>
                                </div>
                                <div className="text-center p-4 bg-purple-50 rounded-xl">
                                    <h4 className="font-semibold text-gray-900 mb-2">Custom Celebrity Voices</h4>
                                    <p className="text-sm text-gray-600">Create personalized celebrity voices with our advanced celebrity voice changer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 6 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-1000 ${isVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="text-center bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Why Choose Our Celebrity AI Voice Generator?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Our celebrity AI voice generator stands out as the premier choice for professional celebrity voice synthesis.
                            With cutting-edge AI celebrity voice generator technology and an intuitive celebrity voice changer interface,
                            we deliver unmatched celebrity voice quality and user experience.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Celebrity Voice Quality</h3>
                                <p className="text-gray-600">Industry-leading celebrity AI voice generator with studio-quality celebrity voice output</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Celebrity Voice Generation</h3>
                                <p className="text-gray-600">Intuitive celebrity voice changer interface for all skill levels and free celebrity AI voice access</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-900">Extensive Celebrity Voice Library</h3>
                                <p className="text-gray-600">Comprehensive collection of celebrity AI voices in our free celebrity voice generator online platform</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 7 - Celebrity Voice Generator Comparison */}
                {/* Section 7 - Celebrity Voice Generator Comparison */}
                <div
                    ref={addToRefs}
                    className={`mb-16 transform transition-all duration-1000 delay-1200 ${isVisible[6] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                        Celebrity Voice Generator vs Traditional Voice Acting
                    </h2>
                    <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-2xl p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                    Traditional Celebrity Voice Hiring
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✕</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">High Costs</h4>
                                            <p className="text-gray-600 text-sm">Celebrity voice actors charge thousands of dollars per project</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✕</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Limited Availability</h4>
                                            <p className="text-gray-600 text-sm">Celebrity schedules often conflict with project timelines</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✕</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Complex Contracts</h4>
                                            <p className="text-gray-600 text-sm">Legal agreements and licensing can take weeks to finalize</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold mb-6 text-gray-900 mt-8">
                                    Celebrity Voice Generator Benefits
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Free Celebrity AI Voice Generator</h4>
                                            <p className="text-gray-600 text-sm">Access celebrity voices without expensive licensing fees</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Instant Celebrity Voice Generation</h4>
                                            <p className="text-gray-600 text-sm">Generate celebrity AI voices in seconds, available 24/7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                                            <span className="text-white text-xs">✓</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Unlimited Revisions</h4>
                                            <p className="text-gray-600 text-sm">Perfect your celebrity voice content with unlimited regenerations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                                    Celebrity Voice Generator Use Cases
                                </h3>

                                <h4 className="text-lg font-semibold mb-3 text-gray-900">Content Creation</h4>
                                <p className="text-gray-600 mb-4 text-sm">
                                    YouTubers and content creators use our celebrity AI voice generator to add star power to their videos.
                                    The free celebrity voice generator enables creators to produce professional celebrity voice content without budget constraints.
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-gray-900">Marketing Campaigns</h4>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Businesses leverage celebrity voice AI for advertising campaigns, creating memorable brand experiences
                                    with authentic celebrity voices generated by our AI celebrity voice generator.
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-gray-900">Educational Content</h4>
                                <p className="text-gray-600 mb-4 text-sm">
                                    Educational platforms use celebrity voice changers to make learning more engaging,
                                    with historical figures and famous personalities narrating educational content through our celebrity AI voice technology.
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-gray-900">Entertainment Projects</h4>
                                <p className="text-gray-600 text-sm">
                                    Game developers and filmmakers utilize our celebrity voice generator online free platform
                                    to add celebrity voices to characters, reducing production costs while maintaining professional quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 8 - FAQ */}
                <div
                    ref={addToRefs}
                    className={`transform transition-all duration-1000 delay-1400 ${isVisible[7] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
                            Frequently Asked Questions About Celebrity AI Voice Generator
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Is the celebrity AI voice generator really free?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Yes! Our free celebrity AI voice generator allows you to create authentic celebrity voices without any cost.
                                        You can access multiple celebrity AI voices and generate unlimited celebrity voice content using our
                                        celebrity voice generator online free platform.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        How accurate are the celebrity voices generated?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Our celebrity AI voice generator achieves over 95% accuracy in replicating celebrity voices.
                                        The AI celebrity voice technology uses advanced neural networks to capture the unique vocal characteristics,
                                        tone, and speaking patterns of each celebrity voice.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Which celebrity voices are available?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Our celebrity voice generator includes a wide range of celebrity AI voices from actors, politicians,
                                        entertainers, and public figures. The free celebrity AI voice generator library is constantly expanding
                                        with new celebrity voices added regularly.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Can I use celebrity voices for commercial projects?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Our celebrity voice changer is designed for educational, entertainment, and creative purposes.
                                        For commercial use of celebrity AI voices, please review our terms of service and consider
                                        the legal implications of using celebrity voices in commercial content.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        How long does celebrity voice generation take?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Our AI celebrity voice generator produces celebrity voices in just seconds!
                                        The advanced celebrity voice AI technology processes your text instantly,
                                        delivering high-quality celebrity voice output faster than traditional voice recording methods.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        What text length can I convert to celebrity voices?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        The celebrity AI voice generator supports various text lengths, from short phrases to longer passages.
                                        Our free celebrity voice generator optimizes celebrity voice quality regardless of text length,
                                        ensuring consistent celebrity AI voice performance.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Do I need to sign up to use the celebrity voice generator?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        No registration required! You can start using our free celebrity AI voice generator immediately.
                                        Simply select your preferred celebrity voice, enter your text, and generate authentic celebrity voices
                                        with our celebrity voice changer technology.
                                    </p>
                                </div>

                                <div className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                        Can I download the generated celebrity voices?
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Yes! Once our celebrity AI voice generator creates your celebrity voice, you can download the audio file
                                        in high quality. The celebrity voice generator online free platform provides instant download access
                                        for all generated celebrity AI voices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}