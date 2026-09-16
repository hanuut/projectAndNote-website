import React, { useRef, useState, useCallback } from 'react';

interface PerspectiveCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: 'violet' | 'gold' | 'mixed';
  onClick?: () => void;
}

export default function PerspectiveCard({
  children,
  className = '',
  tiltIntensity = 14,
  glowColor = 'mixed',
  onClick,
}: PerspectiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCoords({ x, y });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0.5, y: 0.5 });
  };

  const rotateX = isHovered ? (coords.y - 0.5) * -tiltIntensity : 0;
  const rotateY = isHovered ? (coords.x - 0.5) * tiltIntensity : 0;
  const mousePixelX = coords.x * (cardRef.current?.offsetWidth || 300);
  const mousePixelY = coords.y * (cardRef.current?.offsetHeight || 300);

  const glowGradients = {
    violet: `radial-gradient(550px circle at ${mousePixelX}px ${mousePixelY}px, rgba(168, 85, 247, 0.16), transparent 75%)`,
    gold: `radial-gradient(550px circle at ${mousePixelX}px ${mousePixelY}px, rgba(245, 197, 66, 0.16), transparent 75%)`,
    mixed: `radial-gradient(600px circle at ${mousePixelX}px ${mousePixelY}px, rgba(255, 255, 255, 0.09), rgba(168, 85, 247, 0.12) 35%, rgba(245, 197, 66, 0.08) 60%, transparent 80%)`,
  };

  return (
    <div
      className="perspective-1200 w-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        ref={cardRef}
        className={`relative rounded-[28px] fluid-glass transform-style-3d will-change-transform transition-transform duration-150 ease-out overflow-hidden ${className}`}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
        }}
      >
        {/* Specular Mouse Follower Sheen */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: glowGradients[glowColor],
          }}
        />

        {/* Specular Corner Rim Lighting */}
        <div className="absolute inset-0 rounded-[28px] pointer-events-none border border-white/10 z-10" />

        {/* Card Content with 3D Depth */}
        <div className="relative z-20 transform-style-3d h-full">
          {children}
        </div>
      </div>
    </div>
  );
}