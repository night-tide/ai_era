"use client";

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const creativeWords = [
    'Design',
    'Animate',
    'Draw',
    'Tell Stories',
    'Create',
    'Build',
    'Imagine',
    'Compose',
    'Illustrate',
    'Craft',
    'Write',
    'Paint',
    'Film',
    'Code',
    'Photograph',
    'Sculpt',
    'Edit',
    'Direct',
    'Produce',
    'Collaborate',
    'Innovate',
    'Express',
    'Visualize',
    'Prototype',
    'Stream',
    'Podcast',
    'Model',
    'Render',
    'Mix',
    'Record',
    'Perform',
    'Dance',
    'Sing',
    'Act',
    'Sketch',
    'Concept',
    'Brainstorm', 
    'Ideate',
    'Transform',
    'Experiment',
    'Explore',
    'Develop',
    'Launch',
    // 'Brand',
    // 'Market',
    'Publish',
    'Share',
    'Inspire',
    'Teach',
    'Learn'
  ];

  useEffect(() => {
    // Trigger fade-in animation on component mount
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % creativeWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [creativeWords.length]);

  return (
    <main className="container">
      {/* Main Text Content */}
      <div>
        {/* Animated Creative Text */}
        <div className={`creative-text-container fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '0.2s' }}>
          <span className={`creative-text ${isVisible ? 'visible' : 'hidden'}`}>
            {creativeWords[currentWordIndex]}
          </span>
        </div>
        
        <h1 className={`main-text glow fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '0.4s' }}>
          Sharper. Faster. Smarter.
        </h1>
        
        {/* Large Gradient Logo */}
        <div className={`gradient-logo-container fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '0.6s' }}>
          <Image 
            src="/Logo_Gradient.png" 
            alt="Logo Gradient" 
            width={200} 
            height={200}
            className="gradient-logo"
            priority
          />
        </div>
        
        <p className={`sub-text fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '0.8s' }}>
          Designed for creators by creators.
        </p>
        <p className={`waitlist-text hover-pop fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '1.0s', marginTop: '4rem' }} data-text="Waitlist soon">
          Waitlist soon
        </p>
        
        {/* Copyright Notice */}
        <div className={`copyright-notice fade-in ${isLoaded ? 'loaded' : ''}`} style={{ animationDelay: '1.2s' }}>
          © 2025 NightTide, Inc. All rights reserved.
        </div>
      </div>
    </main>
  )
}
