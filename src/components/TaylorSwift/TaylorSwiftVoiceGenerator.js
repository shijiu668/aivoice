'use client';

import { useState, useRef } from 'react';

export default function TaylorSwiftVoiceGenerator() {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState(null);
  const [error, setError] = useState('');
  const audioRef = useRef(null);

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError('Please enter some text for Taylor Swift AI voice generation');
      return;
    }

    setIsGenerating(true);
    setError('');

    try {
      const requestBody = {
        text: text.trim(),
        celebrityId: 13, // Taylor Swift's ID (需要在celebrities.js中添加)
        language: 'en',
        cleanup_voice: true
      };

      const response = await fetch('/api/generate-voice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to generate Taylor Swift AI voice';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          const errorText = await response.text();
          console.log('Error response text:', errorText);
        }
        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      setGeneratedAudio(audioUrl);
      
    } catch (err) {
      setError('Failed to generate Taylor Swift AI voice. Please try again. Error: ' + err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (generatedAudio) {
      const link = document.createElement('a');
      link.href = generatedAudio;
      link.download = 'taylor-swift.wav';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      {/* Main Generator Layout */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left Side - Text Input and Generation */}
          <div className="lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Generate Taylor Swift AI Voice
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-3">
                  Enter text for Taylor Swift voice generator:
                </label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter the text you want Taylor Swift AI voice to speak..."
                  className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500"
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

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !text.trim()}
                className="w-full py-4 bg-pink-600 text-white rounded-xl font-semibold text-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating Taylor Swift Voice...</span>
                  </>
                ) : (
                  <span>Generate Taylor Swift Voice</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Taylor Swift Photo */}
          <div className="lg:pl-12 mt-8 lg:mt-0">
            <div className="text-center">
              <img 
                src="/avatars/taylor-swift.jpg" 
                alt="Taylor Swift AI Voice Generator"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl mx-auto"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-6">Taylor Swift</h3>
              <p className="text-lg text-gray-600 mt-2">Singer & Songwriter</p>
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-pink-100 rounded-full">
                <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                <span className="text-pink-800 font-medium">AI Voice Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Audio Section */}
      {generatedAudio && (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/50">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Taylor Swift AI Voice is Ready!
          </h3>
          <div className="flex flex-col items-center space-y-4">
            <audio
              ref={audioRef}
              src={generatedAudio}
              controls
              className="w-full max-w-md"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-all duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                <span>Download Taylor Swift Voice</span>
              </button>
              <button
                onClick={() => {
                  setGeneratedAudio(null);
                  setError('');
                }}
                className="px-6 py-3 bg-gray-500 text-white rounded-xl font-medium hover:bg-gray-600 transition-all duration-200"
              >
                Generate New Voice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}