import React from 'react';

const TypingAnimation: React.FC = () => {
    return (
        <div className="typing-animation flex  items-center">
            <div className="dots-container bg-gray-200 rounded-full p-1 flex">
                <div className="dot bg-[#86BB71] rounded-full w-3 h-3 m-1 typing-pulse"></div>
                <div className="dot bg-[#86BB71] bg-opacity-50 rounded-full w-3 h-3 m-1 typing-pulse"></div>
                <div className="dot bg-[#86BB71] bg-opacity-25 rounded-full w-3 h-3 m-1 typing-pulse"></div>
            </div>
        </div>
    );
}

export default TypingAnimation;
