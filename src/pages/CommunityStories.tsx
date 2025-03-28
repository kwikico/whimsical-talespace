
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import FloatingElements from '../components/FloatingElements';
import { Search, Filter } from 'lucide-react';

const CommunityStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  
  // Sample data for story cards
  const allStories = [
    {
      title: "The Clockmaker's Daughter",
      author: "Akira Nishimura",
      excerpt: "In a town where time flows differently, a clockmaker crafts a mechanical daughter with a heart that beats to the rhythm of human emotions...",
      likes: 243,
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "fantasy"
    },
    {
      title: "The Last Lantern Festival",
      author: "Mei Zhang",
      excerpt: "Every year, the village by the sea releases lanterns to guide lost souls home. But this year, as the last lantern is about to be lit, a storm approaches...",
      likes: 187,
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "drama"
    },
    {
      title: "The Traveling Tea House",
      author: "Hiroshi Watanabe",
      excerpt: "A magical tea house appears in different towns on different days, serving brews that reveal forgotten memories to those who need them most...",
      likes: 159,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "fantasy"
    },
    {
      title: "The Wind Reader",
      author: "Yuna Kim",
      excerpt: "In a coastal town plagued by storms, a young girl discovers she can hear messages in the wind, warnings of dangers to come...",
      likes: 132,
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "adventure"
    },
    {
      title: "The Paper Crane Wishes",
      author: "Hana Tanaka",
      excerpt: "An elderly man teaches neighborhood children to fold paper cranes, each one carrying a wish. But the children don't know the true magic behind his origami...",
      likes: 119,
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "drama"
    },
    {
      title: "The Star Collector",
      author: "Kaito Nakamura",
      excerpt: "A young astronomer builds a telescope that can capture falling stars. But each star she collects comes with a story and a wish that must be fulfilled...",
      likes: 98,
      imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80",
      genre: "adventure"
    }
  ];
  
  // Filter stories based on search term and selected genre
  const filteredStories = allStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || story.genre === selectedGenre;
    
    return matchesSearch && matchesGenre;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative">
        <FloatingElements type="clouds" density="low" />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <h1 className="font-serif text-3xl md:text-4xl text-ghibli-forest mb-2 text-center">
            The Library of Dreams
          </h1>
          <p className="text-center text-ghibli-forest/70 mb-12 max-w-2xl mx-auto">
            Explore stories submitted by our community. Vote for your favorites to help them win the monthly contest.
          </p>
          
          <div className="mb-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <input 
                  type="text"
                  placeholder="Search stories by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pl-10 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ghibli-earth/60" />
              </div>
              
              <div className="relative">
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="appearance-none w-full p-3 pl-10 pr-10 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50"
                >
                  <option value="all">All Genres</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="adventure">Adventure</option>
                  <option value="drama">Drama</option>
                </select>
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-ghibli-earth/60" />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="h-5 w-5 text-ghibli-earth/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story, index) => (
                <StoryCard 
                  key={index}
                  title={story.title}
                  author={story.author}
                  excerpt={story.excerpt}
                  likes={story.likes}
                  imageUrl={story.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="font-handwritten text-2xl text-ghibli-forest mb-2">No stories found</h3>
              <p className="text-ghibli-forest/70">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityStories;
