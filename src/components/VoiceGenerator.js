'use client';

import { useState, useRef } from 'react';
import { celebrities } from '@/utils/celebrities';

export default function VoiceGenerator() {
    const [selectedCelebrity, setSelectedCelebrity] = useState(celebrities[0]);
    const [text, setText] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedAudio, setGeneratedAudio] = useState(null);
    const [error, setError] = useState('');
    const audioRef = useRef(null);

    const handleGenerate = async () => {
        if (!text.trim()) {
            setError('Please enter some text to generate voice');
            return;
        }

        setIsGenerating(true);
        setError('');

        try {
            const response = await fetch('/api/generate-voice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: text.trim(),
                    celebrityId: selectedCelebrity.id,
                    language: 'en',
                    cleanup_voice: true
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to generate voice');
            }

            const blob = await response.blob();
            const audioUrl = URL.createObjectURL(blob);
            setGeneratedAudio(audioUrl);
        } catch (err) {
            setError('Failed to generate voice. Please try again.');
            console.error('Error generating voice:', err);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <section id="generator" className="py-20 bg-apple-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Generate AI Voice Now
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select your favorite celebrity voice and enter the text you want them to say.
                        Our advanced AI voice generator will create realistic speech in seconds.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left side - Celebrity Selection */}
                        <div className="lg:col-span-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Choose Voice</h3>
                            <div className="space-y-3">
                                {celebrities.map((celebrity) => (
                                    <div
                                        key={celebrity.id}
                                        onClick={() => setSelectedCelebrity(celebrity)}
                                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${selectedCelebrity.id === celebrity.id
                                            ? 'bg-apple-blue text-white shadow-lg'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={celebrity.avatar}
                                                alt={celebrity.name}
                                                className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                                            />
                                            <div className="flex-1">
                                                <h4 className="font-medium text-lg">{celebrity.name}</h4>
                                                <p className={`text-sm ${selectedCelebrity.id === celebrity.id ? 'text-white/80' : 'text-gray-500'
                                                    }`}>
                                                    {celebrity.description}
                                                </p>
                                            </div>
                                            <div className={`w-3 h-3 rounded-full ${selectedCelebrity.id === celebrity.id ? 'bg-white' : 'bg-apple-blue'
                                                }`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side - Text Input and Generation */}
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Enter Your Text</h3>

                            <div className="space-y-6">
                                <div>
                                    <textarea
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        placeholder="Enter the text you want the AI voice to speak..."
                                        className="w-full h-80 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-apple-blue focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
                                        maxLength={500}
                                    />
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm text-gray-500">
                                            {text.length}/500 characters
                                        </span>
                                        {error && (
                                            <span className="text-sm text-red-500">{error}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    {!generatedAudio ? (
                                        <button
                                            onClick={handleGenerate}
                                            disabled={isGenerating || !text.trim()}
                                            className="w-full py-3 bg-apple-blue text-white rounded-xl font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
                                        >
                                            {isGenerating ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span>Generating...</span>
                                                </>
                                            ) : (
                                                <span>Generate Voice</span>
                                            )}
                                        </button>
                                    ) : (
                                        <div className="flex items-center space-x-4 w-full">
                                            <audio
                                                ref={audioRef}
                                                src={generatedAudio}
                                                controls
                                                className="flex-1 h-12"
                                            />
                                            <button
                                                onClick={() => {
                                                    setGeneratedAudio(null);
                                                    setError('');
                                                }}
                                                className="px-6 py-3 bg-gray-500 text-white rounded-xl font-medium hover:bg-gray-600 transition-all duration-200"
                                            >
                                                Generate New
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}