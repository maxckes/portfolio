import React, { useState, useEffect, useRef } from 'react';
import firespark from '../assets/firespark.mov';

const KalkiMultilingualTitle = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [letterStates, setLetterStates] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [showParticles, setShowParticles] = useState({});
  
  // Language sequences for each letter with authentic scripts (11 languages each - added Telugu)
  const letterSequences = [
    {
      letter: 'E',
      morphSequence: ['ఎ', 'ए', 'எ', 'এ', 'ਏ', 'ಎ', 'എ', 'એ', 'ଏ', 'ε', 'E'],
      colors: [
        '#FFD700', // gold
        '#FFB347', // copper
        '#FF8C42', // bronze
        '#FF6B00', // orange
        '#FF4500', // deep orange
        '#B22222', // deep red
        '#8B4513', // brown
        '#654321', // dark bronze
        '#FFB347', // copper again
        '#FFD700', // gold again
        '#d1ab09'  // <-- English letter color
      ]
    },
    {
      letter: 'K',
      morphSequence: ['క', 'क', 'க', 'ক', 'ਕ', 'ಕ', 'ക', 'ક', 'କ', 'κ', 'K'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    },
    {
      letter: 'A',
      morphSequence: ['అ', 'अ', 'அ', 'অ', 'ਅ', 'ಅ', 'അ', 'અ', 'ଅ', 'α', 'A'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    },
    {
      letter: 'R',
      morphSequence: ['ర', 'र', 'ர', 'র', 'ਰ', 'ರ', 'ര', 'ર', 'ର', 'ρ', 'R'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    },
    {
      letter: 'S',
      morphSequence: ['స', 'स', 'ச', 'স', 'ਸ', 'ಸ', 'സ', 'સ', 'ସ', 'σ', 'S'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    },
    {
      letter: 'H',
      morphSequence: ['హ', 'ह', 'ஹ', 'হ', 'ਹ', 'ಹ', 'ഹ', 'હ', 'ହ', 'η', 'H'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    },
    {
      letter: 'A',
      morphSequence: ['అ', 'अ', 'அ', 'অ', 'ਅ', 'ಅ', 'അ', 'અ', 'ଅ', 'α', 'A'],
      colors: [
        '#FFD700', '#FFB347', '#FF8C42', '#FF6B00', '#FF4500',
        '#B22222', '#8B4513', '#654321', '#FFB347', '#FFD700', '#d1ab09'
      ]
    }
  ];

  const particleRefs = useRef([]);

  useEffect(() => {
    const animateSequence = async () => {
      // Reset states
      setCurrentLetterIndex(-1);
      setLetterStates({});
      setIsComplete(false);
      setShowParticles({});
      
      // Animate each letter from left to right (K-A-L-K-I)
      for (let i = 0; i < letterSequences.length; i++) {
        setCurrentLetterIndex(i);
        
        // Phase 1: Initial appear (0.2s) - Blur pop-in
        setLetterStates(prev => ({
          ...prev,
          [i]: { phase: 'appearing', morphIndex: -1, isBlurred: true }
        }));
        
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Phase 2: Language morph sequence (1.1s total, 0.1s each for 11 languages)
        setLetterStates(prev => ({
          ...prev,
          [i]: { phase: 'morphing', morphIndex: 0, isBlurred: false }
        }));
        
        // Cycle through language morphs (11 languages)
        for (let morphIndex = 0; morphIndex < letterSequences[i].morphSequence.length - 1; morphIndex++) {
          setLetterStates(prev => ({
            ...prev,
            [i]: { ...prev[i], morphIndex, isTransitioning: true }
          }));
          
          await new Promise(resolve => setTimeout(resolve, 50));
          
          setLetterStates(prev => ({
            ...prev,
            [i]: { ...prev[i], isTransitioning: false }
          }));
          
          await new Promise(resolve => setTimeout(resolve, 50));
        }
        
        // Phase 3: Settle to final letter (0.3s) - Glow, scale bounce, particle burst
        setLetterStates(prev => ({
          ...prev,
          [i]: { 
            phase: 'settling', 
            morphIndex: letterSequences[i].morphSequence.length - 1,
            isTransitioning: false,
            isSettling: true
          }
        }));
        
        // Trigger particle burst
        setShowParticles(prev => ({ ...prev, [i]: true }));
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Final state
        setLetterStates(prev => ({
          ...prev,
          [i]: { phase: 'complete', morphIndex: letterSequences[i].morphSequence.length - 1, isSettling: false }
        }));
        
        // Delay between letters (0.3s)
        if (i < letterSequences.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
      
      // Mark complete
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsComplete(true);
    };

    animateSequence();
  }, []);

  const LetterComponent = ({ letterData, index }) => {
    const state = letterStates[index] || { phase: 'hidden', morphIndex: -1 };
    const isVisible = index <= currentLetterIndex;
    
    if (!isVisible) return <div className="w-20 h-24 mx-1" />;
    
    const currentChar = state.morphIndex >= 0 
      ? letterData.morphSequence[state.morphIndex] 
      : letterData.morphSequence[0];
    
    const currentColor = state.morphIndex >= 0 
      ? letterData.colors[state.morphIndex] 
      : letterData.colors[0];

    const getTransformClasses = () => {
      if (state.phase === 'appearing') {
        return 'scale-50 opacity-0';
      }
      if (state.isTransitioning) {
        return 'scale-125';
      }
      if (state.isSettling) {
        return 'scale-110';
      }
      if (state.phase === 'complete') {
        return 'scale-100';
      }
      return 'scale-100';
    };

    const getBlurClasses = () => {
      if (state.isBlurred || state.phase === 'appearing') {
        return 'blur-sm';
      }
      if (state.isTransitioning) {
        return 'blur-[1px]';
      }
      return 'blur-0';
    };

    return (
      <div className="relative w-20 h-24 mx-1 flex items-center justify-center">
        {/* Main letter with 3D metallic effect */}
        <div
          className={`
            text-8xl transition-all duration-100 ease-out
            ${getTransformClasses()}
            ${getBlurClasses()}
            ${state.phase === 'appearing' ? 'animate-pulse' : ''}
          `}
          style={{
            fontFamily: '"Orbitron", "Exo 2", "Rajdhani", "Russo One", "Audiowide", "Electrolize", "Noto Sans Telugu", "Noto Sans Devanagari", Impact, Arial, sans-serif',
            fontWeight: '900',
            fontSize: '6rem',
            background: state.morphIndex === letterData.morphSequence.length - 1 
              ? `#d1ab09`
              : `linear-gradient(45deg, ${currentColor}, #FFD700, ${currentColor})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            
            filter: 'none',
            transform: state.isSettling ? 'scale(1.15)' : 'scale(1)',
            letterSpacing: '0.1em',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            fontStretch: 'expanded'
          }}
        >
          {currentChar}
        </div>

        {/* Camera shake effect */}
        {state.phase === 'appearing' && (
          <div className="absolute inset-0 animate-pulse">
            <div className="w-full h-full bg-white opacity-10 rounded-lg" />
          </div>
        )}

        {/* Particle burst effect - fire sparks */}
        {showParticles[index] && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-ping"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  backgroundColor: ['#FF4500', '#FF6347', '#DC143C', '#B22222', '#FFD700'][Math.floor(Math.random() * 5)],
                  top: `${10 + Math.random() * 80}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${i * 40}ms`,
                  animationDuration: '1200ms',
                  opacity: 0.6 + Math.random() * 0.4
                }}
              />
            ))}
          </div>
        )}

        {/* Glow burst for settling - remove or minimize */}
        {state.isSettling && (
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{
              backgroundColor: currentColor,
              filter: 'blur(15px)'
            }}
          />
        )}
      </div>
    );
  };

  const restartAnimation = () => {
    setCurrentLetterIndex(-1);
    setLetterStates({});
    setIsComplete(false);
    setShowParticles({});
  };

  return (
    <>
      {/* Import Google Fonts for futuristic styling + Telugu fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Russo+One&family=Audiowide&family=Electrolize:wght@400&family=Noto+Sans+Telugu:wght@400;700;900&family=Noto+Sans+Devanagari:wght@400;700;900&display=swap" rel="stylesheet" />
      <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={firespark}

          // If using Vite or Create React App, you may need: src={process.env.PUBLIC_URL + '/assets/firespark.mov'}
        />
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
        {/* Video Background */}
        
        {/* Metallic background with fire/ember effects */}
        <div className="absolute inset-0 z-10">
          {/* Fire embers/sparks */}
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: ['#FF4500', '#FF6347', '#DC143C', '#B22222', '#8B0000', '#FFD700'][Math.floor(Math.random() * 6)],
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                opacity: 0.2 + Math.random() * 0.5
              }}
            />
          ))}
          
          {/* Fire glow effects - minimize opacity */}
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" />
          
          {/* Flickering fire effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/15 via-transparent to-orange-900/10 animate-pulse" />
          
          {/* Additional metallic sheen */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 via-transparent to-red-600/5" />
        </div>

        {/* Main title container - Centered */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Letter container - dynamically centered based on visible letters */}
          <div className="flex items-center justify-center w-full transition-all duration-300 ease-out">
            <div 
              className="flex items-center justify-center transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${(letterSequences.length - (currentLetterIndex + 1)) * 40}px)`
              }}
            >
              {letterSequences.map((letterData, index) => (
                <LetterComponent
                  key={index}
                  letterData={letterData}
                  index={index}
                />
              ))}
            </div>
          </div>

        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-out forwards;
          }
        `}</style>
      </div>
    </>
  );
};

export default KalkiMultilingualTitle;