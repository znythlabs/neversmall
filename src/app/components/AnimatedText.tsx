import React from 'react';

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
    return (
        <span className={`animated-text ${className || ""}`}>
            <span className="sr-only">{text}</span>
            <span className="animated-link__inner" aria-hidden="true">
                <span className="span-mother">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            style={{ transition: `${Math.min(0.2 + (index * 0.1), 0.7)}s` }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </span>
                <span className="span-mother2">
                    {text.split("").map((char, index) => (
                        <span
                            key={index}
                            style={{ transition: `${Math.min(0.2 + (index * 0.1), 0.7)}s` }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </span>
            </span>
        </span>
    );
};

export default AnimatedText;
