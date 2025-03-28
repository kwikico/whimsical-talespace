
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingElements from './FloatingElements';

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
      <FloatingElements type="clouds" density="medium" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ghibli-forest mb-6 leading-tight animate-fade-in">
            Share Your Story, <br />
            <span className="text-ghibli-sunset font-handwritten">Bring It To Life</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ghibli-forest/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
