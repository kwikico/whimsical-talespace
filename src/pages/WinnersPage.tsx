
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import { Award, Calendar, Star } from 'lucide-react';

const WinnersPage = () => {
  // Sample data for winning stories
  const winners = [
    {
      month: "June 2023",
      title: "The River's Memory",
      author: "Hana Yoshida",
      excerpt: "In a town built alongside a winding river, the waters hold the memories of all who have ever lived there. When a drought threatens to dry the river, a young girl must journey to its source to save not just the water, but the town's entire history...",
      imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
    },
    {
      month: "May 2023",
      title: "The Garden of Forgotten Things",
      author: "Takashi Mori",
      excerpt: "Behind a small cottage at the edge of town grows a garden where lost objects appear overnight. The elderly gardener has tended to it for decades, reuniting people with their missing treasures. But when she falls ill, the responsibility falls to her reluctant grandson, who discovers the garden holds more than just misplaced items...",
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative">
        <FloatingElements type="lanterns" density="medium" />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex justify-center items-center bg-ghibli-sunset/20 w-20 h-20 rounded-full mb-6">
              <Award className="h-10 w-10 text-ghibli-sunset" />
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl text-ghibli-forest mb-2">
              Legends of the Chosen
            </h1>
            <p className="text-ghibli-forest/70 max-w-2xl mx-auto">
              Meet our contest winners and explore their extraordinary stories brought to life through our collaborative illustration process.
            </p>
          </div>
          
          <div className="space-y-32">
            {winners.map((winner, index) => (
              <div key={index} className="relative">
                {/* Month indicator */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-white px-6 py-2 rounded-full shadow-md border border-ghibli-earth/20 flex items-center">
                    <Calendar className="h-5 w-5 text-ghibli-forest mr-2" />
                    <span className="text-ghibli-forest font-medium">{winner.month}</span>
                  </div>
                </div>
                
                <div className="storybook-border">
                  <div className="storybook-page">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2 flex flex-col">
                        <div className="relative mb-4">
                          <div className="absolute -top-4 -left-4 bg-ghibli-sunset text-white px-4 py-1 rounded-full shadow-md flex items-center z-10">
                            <Star className="h-4 w-4 mr-1" />
                            <span className="font-medium">Winner</span>
                          </div>
                          <img 
                            src={winner.imageUrl}
                            alt={winner.title}
                            className="w-full rounded-md shadow-md"
                          />
                        </div>
                        
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <h2 className="font-handwritten text-3xl text-ghibli-forest mb-2">
                              {winner.title}
                            </h2>
                            <p className="text-ghibli-earth mb-4">by {winner.author}</p>
                          </div>
                          
                          <div className="bg-white/50 border border-ghibli-earth/20 rounded-md p-4 mb-4">
                            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">
                              Author's Note
                            </h3>
                            <p className="text-ghibli-forest/80 italic text-sm">
                              "I was inspired by the changing seasons and how they remind us that nothing, not even our sorrows, lasts forever. I wanted to create a story that feels like a warm embrace on a cold day."
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-1/2">
                        <div className="prose max-w-none text-ghibli-forest/90">
                          <p className="leading-relaxed mb-6">
                            {winner.excerpt}
                          </p>
                          
                          <p className="leading-relaxed mb-6">
                            What made this story special was how it captured the essence of human connection with nature, weaving together themes of memory, community, and the quiet magic found in everyday life.
                          </p>
                          
                          <div className="bg-white/50 border border-ghibli-earth/20 rounded-md p-4 mb-4">
                            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">
                              Judge's Comments
                            </h3>
                            <p className="text-ghibli-forest/80 text-sm">
                              "This story possessed a quiet magic that stayed with us long after reading. The author created a world that feels both fantastical and familiar, with characters whose struggles and triumphs resonated deeply."
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
                          <button className="hand-drawn-button rounded-md">
                            Read Full Story & View Illustrations
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <p className="text-ghibli-forest/70 mb-6">
              Will your story be featured here next month?
            </p>
            <button 
              className="hand-drawn-button rounded-md group"
              onClick={() => window.location.href = '/submit'}
            >
              Submit Your Story Now
              <span className="absolute right-0 top-0 h-full w-12 -mr-3 transition-all opacity-0 group-hover:opacity-100">
                ✨
              </span>
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WinnersPage;
