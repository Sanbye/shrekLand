import React from 'react';

const EyeCircle = ({rotation, id}) => {
    return (
        <div className={`circle deg-${rotation}-${id}`}>
            <img src="img/redDot.png" alt="part of an eye"/>
        </div>
    );
};

export default EyeCircle;