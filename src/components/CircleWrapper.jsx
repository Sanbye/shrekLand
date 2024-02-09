import React from 'react';
import EyeCircle from './EyeCircle';

const CircleWrapper = ({ size, step, id }) => {

    const generateCSSClasses = (step) => {
        let classes = '';
    
        for (let i = 0; i < 360; i += step) {
            classes += `
                .deg-${i}-${id} {
                    transform: rotate(${i}deg) translate(${size}px) rotate(-${i}deg);
                }
            `;
        }
    
        return classes;
    }

    const applyCSSClasses = () => {
        const styleTag = document.createElement('style');
        styleTag.textContent = generateCSSClasses(step);
        document.head.appendChild(styleTag);
    };    
    
    applyCSSClasses();

    const circles = [];

    for (let rotation = 0; rotation < 360; rotation += step) {
        circles.push(<EyeCircle key={rotation} rotation={rotation} id={id}/>);
    }

    return (
        <>
            <div className={`circle-layer${id} rotate${id}`}>
                {circles}
            </div>
        </>
    );
};

export default CircleWrapper;