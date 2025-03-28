
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingElements from '../components/FloatingElements';
import { toast } from 'sonner';

const ApplyPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    portfolio: '',
    sampleStory: '',
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
    console.log("Application submitted:", formData);
    
    // Show success message
    toast.success("Your application has been submitted successfully!");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      experience: '',
      portfolio: '',
      sampleStory: '',
      agreement: false
    });
    
    // Redirect after a delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow relative">
        <FloatingElements type="lanterns" density="medium" />
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl text-ghibli-forest mb-2 text-center">
              Join Our AI Storytelling Team
            </h1>
            <p className="text-center text-ghibli-forest/70 mb-12">
              Apply to become part of our creative collective using AI to craft magical narratives.
            </p>
            
            <div className="storybook-border">
              <div className="storybook-page">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-ghibli-forest mb-1 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-magic/50"
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
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-magic/50"
                      placeholder="Enter your email..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-ghibli-forest mb-1 font-medium">
                      AI Storytelling Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-magic/50 min-h-[100px]"
                      placeholder="Tell us about your experience with AI storytelling tools and prompt engineering..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block text-ghibli-forest mb-1 font-medium">
                      Portfolio or Examples (URLs)
                    </label>
                    <textarea
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-magic/50 min-h-[80px]"
                      placeholder="Share links to your previous work or AI-generated stories..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sampleStory" className="block text-ghibli-forest mb-1 font-medium">
                      Sample AI-Generated Story Concept
                    </label>
                    <textarea
                      id="sampleStory"
                      name="sampleStory"
                      value={formData.sampleStory}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-ghibli-earth/30 rounded-md bg-white/80 focus:outline-none focus:ring-2 focus:ring-ghibli-magic/50 min-h-[200px]"
                      placeholder="Share a brief sample of an AI-generated story concept or scene (500 words max)..."
                    />
                  </div>
                  
                  <div className="bg-ghibli-sky/10 p-4 rounded-md flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-ghibli-sky mt-0.5" />
                    <div className="text-sm text-ghibli-forest/80">
                      <p className="font-medium text-ghibli-forest">What Happens Next:</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Our team will review your application within 5-7 business days.</li>
                        <li>Selected applicants will be invited to an online interview.</li>
                        <li>Successful candidates will gain access to our AI storytelling tools.</li>
                        <li>Top performers will be offered paid projects and ongoing collaboration.</li>
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
                        I agree to the <a href="#" className="text-ghibli-magic hover:underline">terms and conditions</a>. 
                        I understand that my submitted story concepts may be used for evaluation purposes only and will not be 
                        published without my explicit consent.
                      </span>
                    </label>
                  </div>
                  
                  <div className="flex justify-center pt-4">
                    <button 
                      type="submit" 
                      className="hand-drawn-button rounded-md text-xl group"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 mr-2" />
                        Submit Application
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

export default ApplyPage;
