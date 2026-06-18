import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const NeuralNetwork: React.FC = () => {
    const nodes = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1
    }));

    // Define some connections between nodes
    const connections = nodes.slice(0, 15).map((node, i) => ({
        from: node,
        to: nodes[(i + 5) % nodes.length]
    }));

    return (
        <div className="neural-network absolute-inset">
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="var(--accent-secondary)" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {connections.map((conn, i) => (
                    <motion.line
                        key={i}
                        x1={`${conn.from.x}%`}
                        y1={`${conn.from.y}%`}
                        x2={`${conn.to.x}%`}
                        y2={`${conn.to.y}%`}
                        stroke="url(#line-gradient)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    />
                ))}
            </svg>
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="neural-node"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: node.size,
                        height: node.size,
                    }}
                    animate={{
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

const Background: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const [ripples, setRipples] = React.useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleGlobalClick = (e: MouseEvent) => {
            const newRipple = {
                id: Date.now() + Math.random(),
                x: e.clientX,
                y: e.clientY
            };
            setRipples(prev => [...prev.slice(-8), newRipple]);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleGlobalClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleGlobalClick);
        };
    }, [mouseX, mouseY]);

    const particles = Array.from({ length: 15 });

    return (
        <div className="fixed-background">
            <div className="bg-grid absolute-inset"></div>

            <NeuralNetwork />

            {/* Click Ripples */}
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    initial={{
                        position: 'fixed',
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        border: '2px solid var(--accent-primary)',
                        boxShadow: '0 0 15px var(--accent-primary)',
                        transform: 'translate(-50%, -50%)',
                        pointerEvents: 'none',
                        zIndex: 9999,
                        opacity: 0.8
                    }}
                    animate={{
                        width: 100,
                        height: 100,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                />
            ))}

            <motion.div
                className="mouse-spotlight"
                style={{
                    left: springX,
                    top: springY,
                }}
            />

            <div className="spotlight absolute-inset"></div>
            <div className="noise-overlay"></div>

            {/* Particles and Orbs below */}
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
        </div>
    );
};

export default Background;
