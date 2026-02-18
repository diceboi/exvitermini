"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
    text: string;
    duration?: number;
    delay?: number;
    className?: string;
    trigger: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

export default function ScrambleText({ text, duration = 0.5, delay = 0, className, trigger }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (!trigger) {
            setDisplayText("");
            return;
        }

        let interval: NodeJS.Timeout;
        let startTime = Date.now();
        let timeout: NodeJS.Timeout;

        // Start with random characters
        const startScramble = () => {
            interval = setInterval(() => {
                const progress = (Date.now() - startTime) / (duration * 1000);

                if (progress >= 1) {
                    clearInterval(interval);
                    setDisplayText(text);
                    return;
                }

                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " ";
                            // If we are far enough in the animation, reveal the character
                            if (index < text.length * progress) {
                                return char;
                            }
                            // Otherwise return a random character
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );
            }, 30);
        };

        if (delay > 0) {
            timeout = setTimeout(() => {
                startTime = Date.now();
                startScramble();
            }, delay * 1000);
        } else {
            startScramble();
        }


        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, duration, delay, trigger]);

    return <span className={className}>{displayText}</span>;
}
