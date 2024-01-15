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
    if (context?.app.app.isPhone) {
      t2.current = gsap.timeline({ paused: false })
        .addLabel('start', '-=0.9')
        .from(".span-row-right", 0.8, {
          right: "150%",
          ease: "expo.inOut",
        }, 'start')
        .from(".span-row-left", 0.8, {
          left: "150%",
          ease: "expo.inOut",
        }, 'start')
        .addLabel('end', '+=0.8')
        .to(".span-row-right", 0.8, {
          right: 0,
          ease: "expo.inOut",
        }, 'end')
        .to(".span-row-left", 0.8, {
          left: 0,
          ease: "expo.inOut",
        }, 'end');

    } else {
      t1.current = gsap.timeline({ paused: false })
        .to(".row1", 0.8, {
          right: 0,
          opacity: 1,
          ease: "expo.inOut",
        }, "+=0.5")
        .to(".row2", 0.8, {
          left: 0,
          opacity: 1,
          ease: "expo.inOut",
        }, "-=0.5")
        .to(".row3", 0.8, {
          right: 0,
          opacity: 1,
          ease: "expo.inOut",
        }, "-=0.5")
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