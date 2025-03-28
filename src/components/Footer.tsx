
import React from 'react';
import { Heart, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-ghibli-earth/30 bg-ghibli-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-4">Storyteller's Haven</h3>
            <p className="text-sm text-ghibli-forest/80 mb-4">
              A Ghibli-inspired platform where imagination comes to life. Submit your stories and win a chance to see them transformed into beautiful illustrations.
            </p>
            <div className="flex items-center text-sm text-ghibli-forest/80">
              <Heart className="h-4 w-4 mr-2 text-ghibli-pastel" />
              <span>Created with love for storytellers everywhere</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/submit" className="text-ghibli-forest hover:text-ghibli-sunset transition-colors story-link">Submit Your Story</a>
              </li>
              <li>
                <a href="/community" className="text-ghibli-forest hover:text-ghibli-sunset transition-colors story-link">Browse Stories</a>
              </li>
              <li>
                <a href="/winners" className="text-ghibli-forest hover:text-ghibli-sunset transition-colors story-link">Past Winners</a>
              </li>
              <li>
                <a href="#" className="text-ghibli-forest hover:text-ghibli-sunset transition-colors story-link">Contest Rules</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-4">Contact Us</h3>
            <a 
              href="mailto:stories@storytellershaven.com" 
              className="flex items-center text-ghibli-forest hover:text-ghibli-sunset transition-colors mb-4"
            >
              <Mail className="h-4 w-4 mr-2" />
              <span className="story-link">stories@storytellershaven.com</span>
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-ghibli-forest hover:text-ghibli-sunset transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-ghibli-earth/20 text-center text-sm text-ghibli-forest/70">
          <p>© {new Date().getFullYear()} Storyteller's Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
