
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedStory from '../components/FeaturedStory';
import StoryCard from '../components/StoryCard';
import ContestInfo from '../components/ContestInfo';
import HiringSection from '../components/HiringSection';
import Footer from '../components/Footer';

const Index = () => {
  // Sample data for featured story
  const featuredStory = {
    title: "The Whispering Forest",
    author: "Miyuki Tanaka",
    excerpt: "When young Hana discovers a hidden path behind her grandmother's garden, she finds herself in a forest where the trees speak in hushed tones. What begins as a curious adventure soon becomes a quest to save the forest from a mysterious blight that threatens to silence the whispers forever...",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
  };
  
  // Sample data for story cards
  const storyCards = [
    {
      title: "The Clockmaker's Daughter",
      author: "Akira Nishimura",
      excerpt: "In a town where time flows differently, a clockmaker crafts a mechanical daughter with a heart that beats to the rhythm of human emotions...",
      likes: 243,
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
    },
    {
      title: "The Last Lantern Festival",
      author: "Mei Zhang",
      excerpt: "Every year, the village by the sea releases lanterns to guide lost souls home. But this year, as the last lantern is about to be lit, a storm approaches...",
      likes: 187,
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
    },
    {
      title: "The Traveling Tea House",
      author: "Hiroshi Watanabe",
      excerpt: "A magical tea house appears in different towns on different days, serving brews that reveal forgotten memories to those who need them most...",
      likes: 159,
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-ghibli-forest mb-2">
              Featured Story
            </h2>
            <p className="text-center text-ghibli-forest/70 mb-12 max-w-2xl mx-auto">
              Every month we select an outstanding story to feature. This story receives special attention from our illustrators and community.
            </p>
            
            <FeaturedStory {...featuredStory} />
          </div>
        </section>
        
        <ContestInfo />
        
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-center text-ghibli-forest mb-2">
              Community Stories
            </h2>
            <p className="text-center text-ghibli-forest/70 mb-12 max-w-2xl mx-auto">
              Explore recent submissions from our community of storytellers. Vote for your favorites to help them win!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {storyCards.map((story, index) => (
                <StoryCard key={index} {...story} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button 
                className="px-6 py-3 bg-transparent border-2 border-ghibli-forest text-ghibli-forest rounded-md text-xl font-handwritten hover:bg-ghibli-forest/10 transition-colors"
              >
                View All Stories
              </button>
            </div>
          </div>
        </section>
        
        <HiringSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
