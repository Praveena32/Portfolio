import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const Background: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothly track mouse movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Generate some subtle random particles
    const particles = Array.from({ length: 15 });

    return (
        <div className="fixed-background">
            <div className="bg-grid absolute-inset"></div>

            {/* Interactive Spotlight */}
            <motion.div
                className="mouse-spotlight"
                style={{
                    left: springX,
                    top: springY,
                }}
            />

            <div className="spotlight absolute-inset"></div>
            <div className="noise-overlay"></div>

            {/* Decorative Particles */}
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="particle"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        opacity: Math.random() * 0.5
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [null, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 10
                    }}
                    style={{
                        width: Math.random() * 3 + 1,
                        height: Math.random() * 3 + 1,
                    }}
                />
            ))}

            {/* Animated Orbs */}
            <motion.div
                animate={{
                    x: [0, 150, -50, 0],
                    y: [0, 80, 150, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-1"
            />
            <motion.div
                animate={{
                    x: [0, -100, 100, 0],
                    y: [0, 150, -50, 0],
                    scale: [1, 1.1, 1.2, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-2"
            />
            <motion.div
                animate={{
                    x: [0, 120, -120, 0],
                    y: [0, -100, 80, 0],
                    scale: [1, 1.3, 0.8, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="orb orb-3"
            />
        </div>
    );
};

export default Background;
