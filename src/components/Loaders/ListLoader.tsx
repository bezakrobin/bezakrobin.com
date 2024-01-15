import React, { useEffect } from 'react';
import gsap from 'gsap';
import './LoadersStyle.css';

export const ListLoader: React.FC = () => {


    useEffect(() => {
        gsap.to(".container", {
            yPercent: -100,
            stagger: {
              each: 0.15
            },
            ease: "power4.out",
            duration: 0.5,
          });
    }, []);

    return (
        <>
            <div className="container gray"></div>
            <div className="container darkblue"></div>
            <div className="container gray"></div>
            <div className="container darkblue"></div>
            <div className="container gray"></div>
        </>
    );
}

export default ListLoader;
