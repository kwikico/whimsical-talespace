
import React from 'react';
import { Star } from 'lucide-react';

interface FeaturedStoryProps {
  title: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({
  title,
  author,
  excerpt,
  imageUrl
}) => {
  return (
    <div className="storybook-border mb-16">
      <div className="storybook-page">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto rounded-md shadow-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-ghibli-sunset p-2 rounded-full shadow-md">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-handwritten text-3xl text-ghibli-forest mb-2">{title}</h2>
            <p className="text-ghibli-earth mb-4">by {author}</p>
            <p className="text-ghibli-forest/90 mb-6 leading-relaxed">
              {excerpt}
            </p>
            <button className="hand-drawn-button rounded-md">
              Read Full Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;
