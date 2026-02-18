"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa6";

export default function DirectionalCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for movement
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const rotate = useMotionValue(0);
    const rotateSpring = useSpring(rotate, { damping: 20, stiffness: 300 });

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            // Update position directly without triggering re-renders
            cursorX.set(e.clientX - 24); // Center the cursor (width/2)
            cursorY.set(e.clientY - 24); // Center the cursor (height/2)

            // Calculate center of the screen
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Calculate angle to center
            const angle = Math.atan2(centerY - e.clientY, centerX - e.clientX) * (180 / Math.PI);

            // Add 90 degrees because the arrow icon points up by default
            rotate.set(angle + 90);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.style.cursor = 'auto'; // Restore default cursor
        };
    }, [cursorX, cursorY, rotate]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[99999] hidden lg:flex items-center justify-center border border-white/20 bg-black"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                rotate: rotateSpring
            }}
        >
            <FaArrowUp className="text-white text-xl" />
        </motion.div>
    );
}
