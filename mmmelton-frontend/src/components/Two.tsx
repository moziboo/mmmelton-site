import React from 'react';

const Two: React.FC = () => {
    const renderItems = () => {
        const elements = [];
        for (let i = 0; i < 15; i++) {
            elements.push(<div key={i} className="p-6 mb-1 w-full border border-dashed border-gray-800 text-center"><p>two</p></div>);
        }
        return elements;
    };
    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default Two;