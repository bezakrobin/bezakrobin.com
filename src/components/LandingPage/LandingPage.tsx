import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './LandingPageStyle.css';
import { DataContext } from '../../contexts/DataContext';

const LandingPage: React.FC = () => {
  const t1 = useRef<gsap.core.Timeline>();
  const t2 = useRef<gsap.core.Timeline>();
  const context = useContext(DataContext);

  const handleMouseEnter = () => {
    context?.setCursorHoverType("text");
  };

  const handleMouseLeave = () => {
    context?.setCursorHoverType("default");
  };

  useEffect(() => {
    const timeline = gsap.timeline({ paused: false });

    if (context?.app.app.isPhone) {
      timeline
          .from('.span-row-right', { duration: 0.5, right: '150%', ease: 'expo.inOut'})
          .from('.span-row-left', { duration: 0.5, left: '150%', ease: 'expo.inOut'})
          .to('.span-row-right', { duration: 0.3, right: 0, ease: 'expo.inOut'})
          .to('.span-row-left', { duration: 0.3, left: 0, ease: 'expo.inOut'})
    } else {
      timeline
          .to('.row1', { duration: 0.3, right: 0, opacity: 1, ease: 'expo.inOut', delay: 1})
          .to('.row2', { duration: 0.3, left: 0, opacity: 1, ease: 'expo.inOut'})
          .to('.row3', { duration: 0.3, right: 0, opacity: 1, ease: 'expo.inOut'})
    }
  }, [context?.app.app.isPhone]);

  return (
    <div className="landing-container">
      <div className="main-title">
        <div className="title-row row1">
          <span className="title-large span-row-right text-with-border" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>BUILDING</span>
          <span className="title-large span-row-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>BRIDGES</span>
        </div>
        <div className="title-row row2">
          <span className={['title-large', 'span-row-right', context?.app.app.isPhone ? 'text-with-border' : ' '].join(' ')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>BETWEEN</span>
          <span className={['title-large', 'span-row-left', context?.app.app.isPhone ? ' ' : 'text-with-border'].join(' ')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>IDEAS</span>
        </div>
        <div className="title-row row3">
          <span className="title-large span-row-right text-with-border" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>AND</span>
          <span className="title-large span-row-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>REALITY</span>
        </div>
      </div>
      <p className="subtitle" style={{ marginTop: '5%' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>"Crafting code into user experiences"</p>
    </div>
  );
};

export default LandingPage;