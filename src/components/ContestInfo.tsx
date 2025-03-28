
import React from 'react';
import { Award, Calendar, Edit, Eye } from 'lucide-react';

const ContestInfo = () => {
  return (
    <div className="py-16 bg-ghibli-sky/10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-ghibli-forest mb-12">
          How The <span className="font-handwritten text-ghibli-sunset">Magic</span> Happens
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ghibli-sky/20 rounded-full mb-4">
              <Edit className="h-8 w-8 text-ghibli-sky" />
            </div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">Write</h3>
            <p className="text-ghibli-forest/80">
              Submit your original story, script, or concept. Be creative and let your imagination run wild!
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ghibli-sunset/20 rounded-full mb-4">
              <Eye className="h-8 w-8 text-ghibli-sunset" />
            </div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">Share</h3>
            <p className="text-ghibli-forest/80">
              Community members read and vote on their favorite stories, helping the best ones rise to the top.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ghibli-forest/20 rounded-full mb-4">
              <Award className="h-8 w-8 text-ghibli-forest" />
            </div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">Win</h3>
            <p className="text-ghibli-forest/80">
              Winners receive a $2,000 cash prize and see their stories adapted into beautiful webcomics.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ghibli-magic/20 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-ghibli-magic" />
            </div>
            <h3 className="font-handwritten text-xl text-ghibli-forest mb-2">Timeline</h3>
            <p className="text-ghibli-forest/80">
              Submissions open until August 31st. Voting begins September 1st. Winners announced October 15th.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="hand-drawn-button rounded-md">
            Read Contest Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContestInfo;
