/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorEffect() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const innerSpringConfig = { damping: 25, stiffness: 500 };
  const cursorXSpringInner = useSpring(cursorX, innerSpringConfig);
  const cursorYSpringInner = useSpring(cursorY, innerSpringConfig);

  useEffect(() => {
    // Check if device is touch-based or screen is too small
    const checkDevice = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(hasTouch || window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.style.cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile, cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Glow Halo */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-red-950/40 bg-red-950/5 pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovering ? 2.2 : 1,
          borderColor: isHovering ? 'rgba(239, 68, 68, 0.4)' : 'rgba(153, 27, 27, 0.2)',
          backgroundColor: isHovering ? 'rgba(239, 68, 68, 0.05)' : 'rgba(153, 27, 27, 0.02)',
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
      />
      {/* Inner Pinpoint Core */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-red-600 pointer-events-none z-50"
        style={{
          x: cursorXSpringInner,
          y: cursorYSpringInner,
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
}
