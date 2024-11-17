// src/components/sections/Recommendations.tsx
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { recommendationsData } from '../../data/recommendationsData';
import { Recommendation } from '../../types';
import React from 'react';

const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => (
  <div className="bg-white rounded-lg p-6 shadow-soft hover:shadow-medium 
                  transition-all duration-300 min-w-[350px] max-w-[450px] mx-4
                  border border-primary-50 hover:border-primary-100 group">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        {/* Updated quote icon to #1A73E8 */}
        <Quote className="w-8 h-8 text-[#1A73E8] opacity-70" />
      </div>
      <div className="flex-grow">
        <p className="text-neutral-850 mb-4 overflow-hidden 
                     transition-all duration-300 max-h-[80px] 
                     group-hover:max-h-[500px]">
          {/* Updated quote marks to #1A73E8 */}
          <span className="text-[#1A73E8]">"</span>
          {recommendation.text}
          <span className="text-[#1A73E8]">"</span>
        </p>
        <div className="flex items-center gap-4">
          <div>
            <h4 className="font-heading font-semibold text-neutral-850">
              {recommendation.name}
            </h4>
            <p className="text-sm text-neutral-850/80">
              {recommendation.role}
            </p>
            <p className="text-sm text-neutral-850/60 mt-1">
              {recommendation.relationship}
            </p>
            <p className="text-xs text-neutral-850/50 mt-1">
              {recommendation.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  
  const MarqueeGroup: React.FC<{ recommendations: Recommendation[] }> = ({ recommendations }) => (
    <div className="flex">
      {recommendations.map((recommendation) => (
        <RecommendationCard key={recommendation.id} recommendation={recommendation} />
      ))}
    </div>
  );
  
  const Recommendations: React.FC = () => {
    const duplicatedRecommendations = [...recommendationsData, ...recommendationsData];
  
    return (
      <section id="recommendations" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A73E8]">
            Recommendations
            </h2>
            <p className="text-neutral-850/70 max-w-2xl mx-auto">
              What my colleagues say about working with me
            </p>
          </motion.div>
  
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 
                          bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 
                          bg-gradient-to-l from-white to-transparent z-10" />
  
            {/* First row */}
            <div className="mb-8 overflow-hidden">
              <div className="animate-marquee hover:[animation-play-state:paused]">
                <MarqueeGroup recommendations={duplicatedRecommendations} />
              </div>
            </div>
  
            {/* Second row */}
            <div className="overflow-hidden">
              <div className="animate-marquee-reverse hover:[animation-play-state:paused]">
                <MarqueeGroup recommendations={duplicatedRecommendations.reverse()} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Recommendations;