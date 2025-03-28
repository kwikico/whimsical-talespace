
import React from 'react';
import { Sparkles, FileText, Palette, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingElements from './FloatingElements';

const HiringSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <FloatingElements type="lanterns" density="low" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="storybook-border">
          <div className="storybook-page">
            <div className="text-center mb-8">
              <div className="inline-flex justify-center items-center bg-ghibli-magic/30 w-20 h-20 rounded-full mb-4">
                <Sparkles className="h-10 w-10 text-ghibli-magic" />
              </div>
              
              <h2 className="font-handwritten text-3xl md:text-4xl text-ghibli-forest mb-2">
                ✨ We're Hiring AI Storytellers & Prompt Engineers! ✨
              </h2>
              <p className="text-ghibli-forest/80 max-w-2xl mx-auto">
                Join our team of creative minds who use AI tools to craft magical narratives 
                and bring them to life through stunning visuals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Opportunity Card 1 */}
              <div className="bg-white/70 rounded-lg p-6 shadow-md border border-ghibli-earth/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-ghibli-sky/20 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-ghibli-sky" />
                  </div>
                  <h3 className="font-handwritten text-xl text-ghibli-forest">Premium AI Tools</h3>
                </div>
                <p className="text-ghibli-forest/80 text-sm">
                  Gain access to cutting-edge AI storytelling tools to enhance your creative process.
                </p>
              </div>
              
              {/* Opportunity Card 2 */}
              <div className="bg-white/70 rounded-lg p-6 shadow-md border border-ghibli-earth/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-ghibli-sunset/20 p-3 rounded-full mr-4">
                    <Palette className="h-6 w-6 text-ghibli-sunset" />
                  </div>
                  <h3 className="font-handwritten text-xl text-ghibli-forest">Paid Projects</h3>
                </div>
                <p className="text-ghibli-forest/80 text-sm">
                  Work on commissioned stories and get paid for your creative AI prompting skills.
                </p>
              </div>
              
              {/* Opportunity Card 3 */}
              <div className="bg-white/70 rounded-lg p-6 shadow-md border border-ghibli-earth/20 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-ghibli-magic/20 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-ghibli-magic" />
                  </div>
                  <h3 className="font-handwritten text-xl text-ghibli-forest">Collaborative World</h3>
                </div>
                <p className="text-ghibli-forest/80 text-sm">
                  Contribute to our Ghibli-inspired webcomic world and shape its evolving narrative.
                </p>
              </div>
            </div>
            
            <div className="bg-ghibli-sky/10 p-6 rounded-lg border border-ghibli-sky/30 mb-8">
              <h4 className="font-handwritten text-xl text-ghibli-forest mb-3">What We're Looking For:</h4>
              <ul className="space-y-2 text-ghibli-forest/80">
                <li className="flex items-start">
                  <span className="text-ghibli-sunset mr-2">✓</span>
                  <span>Experience creating AI-generated storylines with consistent quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ghibli-sunset mr-2">✓</span>
                  <span>Ability to produce 5-10 scene narratives with a cohesive plot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ghibli-sunset mr-2">✓</span>
                  <span>Understanding of Ghibli-style storytelling and visual aesthetics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ghibli-sunset mr-2">✓</span>
                  <span>Creative approach to AI prompt engineering and story development</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <button 
                className="hand-drawn-button rounded-md group"
                onClick={() => navigate('/apply')}
              >
                Apply Now - Show Us Your Stories
                <span className="absolute right-0 top-0 h-full w-12 -mr-3 transition-all opacity-0 group-hover:opacity-100">
                  ✨
                </span>
              </button>
              <p className="mt-4 text-sm text-ghibli-forest/60 italic">
                Submit your AI-generated short stories, and you might be our next hired creator!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
