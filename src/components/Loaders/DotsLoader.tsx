import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './LoadersStyle.css';

export const DotsLoader: React.FC = () => {
    const container1Ref = useRef<HTMLDivElement>(null);
    const container2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container1Ref.current && container2Ref.current) {
            gsap.fromTo(container1Ref.current.children, 
                { y: -40 },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: {
                        each: 0.2,
                        repeat: -1,
                        yoyo: true
                    },
                    ease: "power1.inOut"
                }
            );

            gsap.fromTo(container2Ref.current.children, 
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: {
                        each: 0.2,
                        repeat: -1,
                        yoyo: true
                    },
                    ease: "power1.inOut"
                }
            );
        }
    }, []);

    return (
        <div className="container">
            <div className="container1" ref={container1Ref}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="container2" ref={container2Ref}>
                <div className="dot shadow"></div>
                <div className="dot shadow"></div>
                <div className="dot shadow"></div>
            </div>
        </div>
    );
}

export default DotsLoader;
