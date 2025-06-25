'use client';

import { useEffect, useRef, useState } from 'react';

export default function MorganFreemanSEOSection() {
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
                        Advanced Morgan Freeman Voice Generator Technology
                    </h2>

                    <div className="bg-gray-50 rounded-3xl p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-amber-600">Revolutionary Morgan Freeman AI Voice Technology</h3>
                                <p className="text-gray-700 mb-6">
                                    Our cutting-edge morgan freeman voice generator utilizes advanced artificial intelligence to create incredibly realistic
                                    morgan freeman voice content. This innovative morgan freeman ai voice technology transforms any text into authentic
                                    voice of arthur morgan that captures the unique vocal characteristics of the legendary actor and narrator. Whether you need a
                                    morgan freeman voice over for documentaries or creative purposes, our ai morgan freeman voice delivers unmatched quality.
                                </p>
                                <p className="text-gray-700">
                                    The arthur morgan voice system employs sophisticated neural networks trained on extensive Morgan Freeman voice datasets
                                    to ensure each generated morgan freeman's voice maintains the distinctive tone, cadence, and gravitas.
                                    This makes our voice generator morgan freeman the perfect solution for creators seeking professional narration synthesis.
                                </p>
                            </div>
                            <div className="bg-amber-50 rounded-2xl p-8">
                                <h3 className="text-xl font-bold mb-6 text-amber-800">Morgan Freeman Voice Features</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Authentic morgan freeman voice</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Professional morgan freeman voiceover</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Instant arthur morgan ai voice generation</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                        <span className="text-gray-800 font-medium">Free morgan freeman voice generator</span>
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
                                How Morgan Freeman Voice AI Technology Works
                            </h2>
                            <h3 className="text-xl font-semibold mb-4 text-orange-600">Morgan Freeman Generator Voice Process</h3>
                            <p className="text-gray-600 mb-6">
                                Our morgan freeman generator voice uses advanced neural networks to analyze and replicate the distinctive characteristics
                                of who voices arthur morgan and the legendary actor's narration style. The morgan freeman ai voice generator system processes
                                your input text and applies Morgan Freeman's unique speaking characteristics, including his deep resonant tone, measured pace,
                                and authoritative delivery for authentic ai voice generator morgan freeman results.
                            </p>

                            <h3 className="text-xl font-semibold mb-4 text-orange-600">Morgan Freeman Voice AI Technology</h3>
                            <p className="text-gray-600">
                                The morgan freeman voice ai platform captures signature elements including Morgan Freeman's distinctive vocal depth,
                                characteristic pauses, and authoritative narration style. Our ai morgan freeman voice generator free system ensures each
                                voice of arthur morgan output maintains the gravitas and wisdom that made Morgan Freeman's voice legendary in Hollywood.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 1: Text Analysis</h4>
                                <p className="text-gray-600 text-sm">Morgan freeman voice generator analyzes input text for optimal narration synthesis</p>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 2: Voice Processing</h4>
                                <p className="text-gray-600 text-sm">Morgan freeman ai voice technology applies authentic narration characteristics</p>
                            </div>
                            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
                                <h4 className="font-bold text-gray-900 mb-2">Step 3: Audio Generation</h4>
                                <p className="text-gray-600 text-sm">Generate high-quality morgan freeman voice output instantly</p>
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
                        Morgan Freeman Voice Applications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-amber-600">Documentary Narration</h3>
                            <p className="text-gray-600 mb-4">
                                Documentary makers use our morgan freeman voice over for professional narration projects.
                                The morgan freeman ai voice helps create compelling documentaries with authentic narrative authority.
                            </p>
                            <div className="text-sm text-amber-600 font-medium">• Professional documentary narration</div>
                            <div className="text-sm text-amber-600 font-medium">• Educational content with morgan freeman voice</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-orange-600">Video Content</h3>
                            <p className="text-gray-600 mb-4">
                                Content creators utilize our voice generator morgan freeman for YouTube videos and online content.
                                The ai morgan freeman voice enables creators to add legendary narration to their projects.
                            </p>
                            <div className="text-sm text-orange-600 font-medium">• YouTube video narration</div>
                            <div className="text-sm text-orange-600 font-medium">• Educational content creation</div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold mb-4 text-yellow-600">Commercial Projects</h3>
                            <p className="text-gray-600 mb-4">
                                Businesses leverage our morgan freeman voiceover for advertising and corporate content.
                                The arthur morgan voice technology enables professional voice-over work with legendary authority.
                            </p>
                            <div className="text-sm text-yellow-600 font-medium">• Corporate presentations</div>
                            <div className="text-sm text-yellow-600 font-medium">• Advertisement voice-over</div>
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div
                    ref={addToRefs}
                    className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                >
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Morgan Freeman Voice Generator Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎬</span>
                                </div>
                                <h3 className="font-bold mb-2">Legendary Voice</h3>
                                <p className="text-white/90 text-sm">Authentic morgan freeman voice generator with Hollywood-quality narration</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="font-bold mb-2">Instant Generation</h3>
                                <p className="text-white/90 text-sm">Generate morgan freeman voice content in seconds with our AI generator</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="font-bold mb-2">Voice Accuracy</h3>
                                <p className="text-white/90 text-sm">Precise morgan freeman ai voice replication with legendary authenticity</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🆓</span>
                                </div>
                                <h3 className="font-bold mb-2">Free Access</h3>
                                <p className="text-white/90 text-sm">Use our free morgan freeman voice generator without registration</p>
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
                        Understanding Morgan Freeman's Voice Characteristics
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-amber-600">What Makes Morgan Freeman's Voice Unique</h3>
                            <p className="text-gray-600">
                                Morgan Freeman's voice is instantly recognizable for its deep resonance, measured pace, and authoritative gravitas.
                                Our morgan freeman voice generator captures these authentic elements of his legendary narration style, including his distinctive
                                vocal depth, characteristic pauses, and the wisdom-filled delivery that made Morgan Freeman one of the most sought-after
                                narrators in Hollywood history.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-800">Morgan Freeman Text to Speech Analysis</h3>
                            <p className="text-gray-600">
                                The morgan freeman text to speech replicates his natural narration characteristics, providing authentic voice-over synthesis
                                for documentary and entertainment applications. Our morgan freeman ai voice text to speech technology ensures each
                                ai voice generator morgan freeman output maintains the commanding presence and narrative authority that made
                                Morgan Freeman's voice legendary across generations of film and television.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-700">Deep, resonant vocal tone and timbre</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-700">Measured pace and thoughtful delivery</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-700">Authoritative and wise narrative presence</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                    <span className="text-gray-700">Distinctive pauses and emphasis patterns</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-orange-600">Popular Morgan Freeman Voice Applications</h3>
                            <div className="space-y-4">
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Documentary Narration</h4>
                                    <p className="text-gray-600 text-sm">Use morgan freeman voice for professional documentary voice-over</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Educational Content</h4>
                                    <p className="text-gray-600 text-sm">Create engaging morgan freeman ai voice content for learning materials</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Commercial Voice-Over</h4>
                                    <p className="text-gray-600 text-sm">Generate professional arthur morgan voice for business presentations</p>
                                </div>
                                <div className="border-l-4 border-orange-400 pl-4">
                                    <h4 className="font-semibold text-gray-900">Entertainment Projects</h4>
                                    <p className="text-gray-600 text-sm">Professional morgan freeman voiceover for creative endeavors</p>
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
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Arthur Morgan Voice vs Traditional Narration
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-red-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-red-600">Traditional Voice-Over Services</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✕</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Expensive Costs</h4>
                                        <p className="text-gray-600 text-sm">Professional Morgan Freeman impersonators charge premium rates for voice-over work</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✕</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Limited Availability</h4>
                                        <p className="text-gray-600 text-sm">Finding quality Morgan Freeman voice actors with scheduling constraints</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✕</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Inconsistent Quality</h4>
                                        <p className="text-gray-600 text-sm">Variable morgan freeman voice quality between different voice actors</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-green-600">Morgan Freeman Voice Generator</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Completely Free</h4>
                                        <p className="text-gray-600 text-sm">Free morgan freeman voice generator with unlimited usage</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">24/7 Availability</h4>
                                        <p className="text-gray-600 text-sm">Generate morgan freeman ai voice content instantly, anytime</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                                        <span className="text-white text-xs">✓</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Consistent Quality</h4>
                                        <p className="text-gray-600 text-sm">Reliable morgan freeman voice quality with every generation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}