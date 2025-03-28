
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Feather, Users, Award } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 bg-ghibli-cream border-b border-ghibli-earth/30 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center mb-4 md:mb-0">
            <Book className="h-6 w-6 text-ghibli-forest mr-2" />
            <span className="font-handwritten text-2xl text-ghibli-forest">Storyteller's Haven</span>
          </Link>
          
          <ul className="flex flex-wrap items-center gap-6 md:gap-10">
            <li>
              <Link to="/" className="flex items-center text-ghibli-forest hover:text-ghibli-sunset transition-colors group">
                <Book className="h-5 w-5 mr-1 group-hover:animate-sway" />
                <span className="story-link">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/submit" className="flex items-center text-ghibli-forest hover:text-ghibli-sunset transition-colors group">
                <Feather className="h-5 w-5 mr-1 group-hover:animate-sway" />
                <span className="story-link">Submit Story</span>
              </Link>
            </li>
            <li>
              <Link to="/community" className="flex items-center text-ghibli-forest hover:text-ghibli-sunset transition-colors group">
                <Users className="h-5 w-5 mr-1 group-hover:animate-sway" />
                <span className="story-link">Community</span>
              </Link>
            </li>
            <li>
              <Link to="/winners" className="flex items-center text-ghibli-forest hover:text-ghibli-sunset transition-colors group">
                <Award className="h-5 w-5 mr-1 group-hover:animate-sway" />
                <span className="story-link">Winners</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
