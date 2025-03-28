
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingElements from './FloatingElements';
import JapaneseElements from './JapaneseElements';

// Time-based themes for the hero section
type TimeTheme = 'dawn' | 'day' | 'sunset' | 'night';

const Hero = () => {
  const navigate = useNavigate();
  const [timeTheme, setTimeTheme] = useState<TimeTheme>('day');
  
  // Simulate time-based transitions for the hero section
  useEffect(() => {
    // For demo purposes, we'll cycle through themes every few seconds
    // In production, this could be tied to actual local time
    const themes: TimeTheme[] = ['dawn', 'day', 'sunset', 'night'];
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % themes.length;
      setTimeTheme(themes[currentIndex]);
    }, 12000); // Change every 12 seconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Get theme-specific styles and elements
  const getThemeStyles = () => {
    switch(timeTheme) {
      case 'dawn':
        return {
          bgGradient: 'from-ghibli-sky/30 via-ghibli-pastel/20 to-ghibli-cream',
          textColor: 'text-ghibli-forest',
          floatingType: 'clouds',
          textEffect: 'The day begins with new stories...'
        };
      case 'day':
        return {
          bgGradient: 'from-ghibli-sky/20 via-ghibli-cream to-ghibli-cream',
          textColor: 'text-ghibli-forest',
          floatingType: 'clouds',
          textEffect: 'Share your adventures in the daylight...'
        };
      case 'sunset':
        return {
          bgGradient: 'from-ghibli-sunset/30 via-ghibli-village/20 to-ghibli-cream',
          textColor: 'text-ghibli-forest',
          floatingType: 'leaves',
          textEffect: 'As the sun sets, imagination grows...'
        };
      case 'night':
        return {
          bgGradient: 'from-indigo-900/30 via-ghibli-magic/20 to-ghibli-cream',
          textColor: 'text-ghibli-forest',
          floatingType: 'lanterns',
          textEffect: 'Night brings dreams to life...'
        };
    }
  };
  
  const themeStyles = getThemeStyles();
  
  return (
    <div className={`relative min-h-[650px] flex items-center py-20 overflow-hidden transition-colors duration-3000 bg-gradient-to-b ${themeStyles.bgGradient}`}>
      <FloatingElements type={themeStyles.floatingType as 'clouds' | 'leaves' | 'lanterns'} density="medium" />
      
      {/* Japanese decorative elements based on theme */}
      {timeTheme === 'dawn' && (
        <>
          <JapaneseElements type="torii" position="bottom-left" size="large" opacity={0.7} />
          <JapaneseElements type="mountain" position="bottom-right" size="large" opacity={0.4} />
        </>
      )}
      
      {timeTheme === 'day' && (
        <>
          <JapaneseElements type="sakura" position="top-right" size="medium" opacity={0.6} />
          <JapaneseElements type="sakura" position="bottom-left" size="small" opacity={0.6} />
          <JapaneseElements type="pagoda" position="bottom-right" size="medium" opacity={0.4} />
        </>
      )}
      
      {timeTheme === 'sunset' && (
        <>
          <JapaneseElements type="wave" position="bottom-left" size="medium" opacity={0.5} />
          <JapaneseElements type="torii" position="bottom-right" size="medium" opacity={0.6} color="#FF7043" />
        </>
      )}
      
      {timeTheme === 'night' && (
        <>
          <JapaneseElements type="mountain" position="bottom-left" size="large" opacity={0.3} color="#2C3E50" />
          <JapaneseElements type="pagoda" position="bottom-right" size="small" opacity={0.5} color="#34495E" />
        </>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="overflow-hidden mb-2">
            <p className="font-handwritten text-lg text-ghibli-sunset animate-fade-in">
              {themeStyles.textEffect}
            </p>
          </div>
          
          <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold ${themeStyles.textColor} mb-6 leading-tight animate-fade-in`}>
            Share Your Story, <br />
            <span className="text-ghibli-sunset font-handwritten">Bring It To Life</span>
          </h1>
          
          <p className={`text-lg md:text-xl ${themeStyles.textColor}/80 mb-8 max-w-2xl mx-auto animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Submit your original story for a chance to win a $2,000 prize and see your tale transformed into a beautiful collaborative webcomic.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => navigate('/submit')}
              className="hand-drawn-button rounded-md text-xl font-handwritten group"
            >
              Submit Your Story
              <span className="absolute right-0 top-0 h-full w-12 -mr-3 transition-all opacity-0 group-hover:opacity-100">
                ✨
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/community')}
              className="px-6 py-3 bg-transparent border-2 border-ghibli-forest text-ghibli-forest rounded-md text-xl font-handwritten hover:bg-ghibli-forest/10 transition-colors"
            >
              Explore Stories
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ghibli-cream to-transparent"></div>
    </div>
  );
};

export default Hero;
