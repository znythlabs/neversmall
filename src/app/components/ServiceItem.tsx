"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";

interface ServiceItemProps {
    name: string;
    desc: string;
    image: string;
}

export default function ServiceItem({ name, desc, image }: ServiceItemProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        // Get mouse position relative to the container block
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
    };

    return (
        <div
            className="service-item"
            aria-label={`Service: ${name}`}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="service-item__bg" aria-hidden="true"></div>
            <div className="service-item__content">
                <h3 className="service-item__title">{name}</h3>
                <p className="service-item__desc">{desc}</p>
            </div>
            <div
                className="service-item__image"
                aria-hidden="true"
                style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered
                        ? `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0) scale(1) rotate(-4deg)`
                        : `translate3d(calc(${position.x}px - 50%), calc(${position.y}px - 50%), 0) scale(0.9) rotate(0deg)`
                }}
            >
                <Image
                    src={image}
                    alt={`${name}`}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
        </div>
    );
}
