import React, { useContext, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MenuStyle.css';
import { DataContext } from '../../contexts/DataContext';

export const Menu: React.FC = () => {
    const t1 = useRef<gsap.core.Timeline>();
    const context = useContext(DataContext);

    const handleMouseEnter = () => {
        context?.setCursorHoverType("text");
    };

    const handleMouseLeave = () => {
        context?.setCursorHoverType("default");
    };

    const openLink = (url: string) => {
        return () => {
          window.open(url, '_blank');
        };
    };

    useEffect(() => {
        const timeline = gsap.timeline({ paused: true });

        if (context?.app.app.isPhone) {
            timeline
                .to(".nav-container", { duration: 0.3, left: 0, ease: "expo.inOut" })
                .from(".menu > div", { duration: 0.1, y: 100, opacity: 0, ease: "expo.inOut", stagger: 0.1, delay: 0.05 })
                .from(".socials-mobile span", { duration: 0.1, y: 100, opacity: 0, ease: "expo.inOut", stagger: 0.1 })
                .to(".menu > div", { duration: 0.5, opacity: 1, ease: "expo.out", stagger: 0.1 })
                .to(".socials-mobile span", { duration: 0.5, opacity: 1, ease: "expo.out", stagger: 0.1 })
        } else {
            timeline
                .to(".nav-container", { duration: 0.3, left: 0, ease: "expo.inOut" })
                .from(".menu > div", { duration: 0.1, y: 100, opacity: 0, ease: "expo.inOut", stagger: 0.1, delay: 0.05 })
                .from(".socials span", { duration: 0.1, y: 100, opacity: 0, ease: "expo.inOut", stagger: 0.1 })
                .to(".menu > div", { duration: 0.5, opacity: 1, ease: "expo.out", stagger: 0.1 })
                .to(".socials span", { duration: 0.5, opacity: 1, ease: "expo.out", stagger: 0.1 })
        }

        t1.current = timeline;

        t1.current.reverse();
    }, []);

    const toggleMenu = () => {
        if (t1.current) {
            t1.current.reversed(!t1.current.reversed());
        }
    };

    return (
        <>
            <div className='menu-open' onClick={toggleMenu}>menu</div>
            <button className="name-button">
                <span className="first-name">Robin </span>
                <span className="last-name">Bezak</span>
            </button>
            <div className='nav-container'>
                <div className='menu-close' onClick={toggleMenu}>close</div>
                <nav className="menu">
                    <div className="menu__item" style={{ paddingBottom: context?.app.app.isPhone ? '20px' : '0px' }}>
                        <a className="menu__item-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</a>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Home - Home - Home - Home - Home - Home - Home</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item" style={{ paddingBottom: context?.app.app.isPhone ? '20px' : '0px' }}>
                        <a className="menu__item-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Showcase</a>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Showcase - Showcase - Showcase - Showcase - Showcase - Showcase - Showcase</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item" style={{ paddingBottom: context?.app.app.isPhone ? '20px' : '0px' }}>
                        <a className="menu__item-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About</a>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>About - About - About - About - About - About - About</span>
                            </div>
                        </div>
                    </div>
                    <div className="menu__item" style={{ paddingBottom: context?.app.app.isPhone ? '20px' : '0px' }}>
                        <a className="menu__item-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact</a>
                        <div className="marquee">
                            <div className="marquee__inner">
                                <span>Contact - Contact - Contact - Contact - Contact - Contact - Contact</span>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`${context?.app.app.isPhone ? 'socials-mobile' : 'socials'}`}>
                    <span onClick={openLink('https://www.facebook.com/roby.bezak/')}>facebook</span>
                    <span onClick={openLink('https://www.instagram.com/robin.bezak/')}>instagram</span>
                </div>
            </div>
        </>
    );
}

export default Menu;
