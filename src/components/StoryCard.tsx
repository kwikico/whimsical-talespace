
import React from 'react';
import { Heart } from 'lucide-react';

interface StoryCardProps {
  title: string;
  author: string;
  excerpt: string;
  likes: number;
  imageUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({
  title,
  author,
  excerpt,
  likes,
  imageUrl
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center">
            <Heart className="h-4 w-4 text-white mr-1" />
            <span className="text-white text-sm">{likes}</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-handwritten text-xl text-ghibli-forest font-semibold mb-1 story-link inline-block">
          {title}
        </h3>
        <p className="text-ghibli-earth text-sm mb-2">by {author}</p>
        <p className="text-ghibli-forest/80 text-sm line-clamp-3">
          {excerpt}
        </p>
      </div>
      
      <div className="px-4 pb-4">
        <button className="text-ghibli-sunset hover:text-ghibli-forest transition-colors story-link font-handwritten">
          Read More
        </button>
      </div>
    </div>
  );
};

export default StoryCard;
