
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Feather, Upload, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import { toast } from 'sonner';

const SubmitStory = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    email: '',
    storyContent: '',
    agreement: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    
    // This would be where you'd send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Your story has been submitted successfully!");
    
    // Reset form
    setFormData({
      title: '',
      author: '',
      email: '',
      storyContent: '',
      agreement: false
    });
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/community');
    }, 2000);
  };
  
  // Story prompts for inspiration
  const storyPrompts = [
    "A child discovers a hidden door in their grandmother's house...",
    "In a village where it rains every day, the sun finally appears...",
    "A mysterious shop appears in town, selling objects from people's memories...",
    "A forest spirit befriends a lost traveler...",
    "An old clocktower in the center of town suddenly starts running backwards..."
  ];
  
  const randomPrompt = storyPrompts[Math.floor(Math.random() * storyPrompts.length)];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative">
        <FloatingElements type="leaves" density="low" />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl text-ghibli-forest mb-2 text-center">
              Tell Your Tale
            </h1>
            <p className="text-center text-ghibli-forest/70 mb-12">
              Submit your original story for a chance to win $2,000 and see it transformed into a beautiful webcomic.
            </p>
            
            <div className="storybook-border">
              <div className="storybook-page">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-ghibli-forest mb-1 font-medium">
                      Story Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50"
                      placeholder="Enter your story title..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="author" className="block text-ghibli-forest mb-1 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50"
                        placeholder="Enter your name..."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-ghibli-forest mb-1 font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50"
                        placeholder="Enter your email..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="storyContent" className="block text-ghibli-forest mb-1 font-medium">
                      Your Story
                    </label>
                    <div className="relative">
                      <textarea
                        id="storyContent"
                        name="storyContent"
                        value={formData.storyContent}
                        onChange={handleChange}
                        required
                        className="w-full p-4 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-sunset/50 min-h-[300px]"
                        placeholder={`Start writing your story here...\n\nNeed inspiration? Try this: ${randomPrompt}`}
                      />
                      <div className="absolute bottom-3 right-3 text-ghibli-forest/50 text-sm flex items-center gap-1">
                        <Feather className="h-4 w-4" />
                        <span>
                          {formData.storyContent.length > 0 
                            ? `${formData.storyContent.split(/\s+/).filter(Boolean).length} words` 
                            : "0 words"}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-ghibli-sky/10 p-4 rounded-md flex items-start gap-3">
                    <Info className="h-5 w-5 text-ghibli-sky mt-0.5" />
                    <div className="text-sm text-ghibli-forest/80">
                      <p className="font-medium text-ghibli-forest">Story Guidelines:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Stories should be original and not previously published.</li>
                        <li>Maximum word count: 5,000 words.</li>
                        <li>All genres welcome, but content should be suitable for all ages.</li>
                        <li>Include a complete story with beginning, middle, and end.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-ghibli-earth/20">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleCheckbox}
                        className="mt-1"
                      />
                      <span className="text-sm text-ghibli-forest/80">
                        I agree to the <a href="#" className="text-ghibli-sunset hover:underline">terms and conditions</a>. 
                        I understand that by submitting this story, I grant Storyteller's Haven the right to publish 
                        and adapt my story if selected as a winner.
                      </span>
                    </label>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <button 
                      type="submit" 
                      className="hand-drawn-button rounded-md text-xl group"
                    >
                      <div className="flex items-center">
                        <Upload className="h-5 w-5 mr-2" />
                        Submit Story
                      </div>
                      <span className="absolute right-0 top-0 h-full w-12 -mr-3 transition-all opacity-0 group-hover:opacity-100">
                        ✨
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitStory;
