import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ViewportRuler: React.FC = () => {
    const [dims, setDims] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const updateDims = () => {
            setDims({ w: window.innerWidth, h: window.innerHeight });
        };
        updateDims();
        window.addEventListener('resize', updateDims);
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    return (
        <div 
            className="viewport-ruler glass outfit" 
            style={{ 
                position: 'fixed', 
                bottom: '1.25rem', 
                left: '1.25rem', 
                padding: '0.4rem 0.8rem', 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                color: 'var(--text-secondary)', 
                zIndex: 999, 
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid var(--card-border)',
                borderRadius: '0.5rem',
                letterSpacing: '0.08em',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
            }}
        >
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-secondary)', boxShadow: '0 0 8px var(--accent-secondary)' }}></span>
            <span>{dims.w}px &times; {dims.h}px</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ textTransform: 'uppercase', fontSize: '0.65rem' }}>RESPONSIVE GRID</span>
        </div>
    );
};

const CursorFollower: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 120, damping: 22, mass: 0.4 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const [isHovered, setIsHovered] = useState(false);
    const [hoverText, setHoverText] = useState('');

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Subtract half of the cursor height/width to center it
            const size = isHovered ? 64 : 32;
            mouseX.set(e.clientX - size / 2);
            mouseY.set(e.clientY - size / 2);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' || 
                target.closest('a') || 
                target.closest('button') || 
                target.closest('.project-card') || 
                target.closest('.social-link') ||
                target.closest('.theme-toggle');

            if (isInteractive) {
                setIsHovered(true);
                if (target.closest('.project-card')) {
                    setHoverText('VIEW');
                } else if (target.closest('.social-link') || target.tagName === 'A') {
                    setHoverText('LINK');
                } else {
                    setHoverText('');
                }
            } else {
                setIsHovered(false);
                setHoverText('');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isHovered]);

    // Hiding on mobile viewports / touch screens
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const mobileCheck = /android|ipad|iphone|ipod/i.test(userAgent);
        setIsMobile(mobileCheck || window.innerWidth <= 768);
    }, []);

    if (isMobile) return <ViewportRuler />;

    return (
        <>
            <ViewportRuler />
            <motion.div
                style={{
                    position: 'fixed',
                    left: cursorX,
                    top: cursorY,
                    width: isHovered ? 64 : 32,
                    height: isHovered ? 64 : 32,
                    borderRadius: '50%',
                    border: isHovered ? '2px solid var(--accent-secondary)' : '2px solid var(--accent-primary)',
                    background: isHovered ? 'rgba(6, 182, 212, 0.05)' : 'transparent',
                    backdropFilter: isHovered ? 'blur(4px)' : 'none',
                    boxShadow: isHovered 
                        ? '0 0 20px rgba(6, 182, 212, 0.3)' 
                        : '0 0 10px rgba(139, 92, 246, 0.1)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                animate={{
                    scale: isHovered ? 1.15 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
                {hoverText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            fontSize: '9px',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            color: 'var(--accent-secondary)',
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        {hoverText}
                    </motion.span>
                )}
            </motion.div>
        </>
    );
};

export default CursorFollower;
