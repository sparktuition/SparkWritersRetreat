import React from 'react'
import { Volume2, TreePine, Clock, GraduationCap, Sparkles } from 'lucide-react';
import './RetreatWhy.css'

const RetreatWhy: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Silence',
      icon: Volume2,
      description: 'The precious gift of quietude where your inner voice can finally be heard clearly and powerfully',
    },
    {
      id: 2,
      title: 'Nature',
      icon: TreePine,
      description: 'The Himalayas provide endless inspiration, grounding your creativity in beauty and timeless wisdom',
    },
    {
      id: 3,
      title: 'Uninterrupted Time',
      icon: Clock,
      description: 'Luxurious stretches of time free from distractions, dedicated entirely to your creative vision',
    },
    {
      id: 4,
      title: 'Expert Mentorship',
      icon: GraduationCap,
      description: 'Guidance from accomplished authors who genuinely understand your journey and aspirations',
    },
    {
      id: 5,
      title: 'True Inspiration',
      icon: Sparkles,
      description: 'An environment designed to unlock your deepest creativity and transform your writing forever',
    },
  ]

  return (
    <section className="retreat-why retreat-section">
      <div className="retreat-why-inner retreat-inner">
        <h2 className="why-title">Why Spark Writers' Retreat?</h2>

        <p className="why-subtitle">
          Because creativity thrives in the perfect alchemy of silence, nature, time, guidance, and inspiration.
        </p>

        <div className="features-grid">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default RetreatWhy
