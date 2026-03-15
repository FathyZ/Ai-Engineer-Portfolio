import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const ringX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.getAttribute('data-hover') === 'true';
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
  <>
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-9999"
      animate={{
        width: isHovered ? 11 : 6,
        height: isHovered ? 11 : 6,
        backgroundColor: "#f59e0b", 
        boxShadow: "0px 0px 0px rgba(245, 158, 11, 0)",
      }}
      style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
    />

    {/* Trailing Ring - Always Gold, but expands and thickens on hover */}
    <motion.div
      className="fixed top-0 left-0 border rounded-full pointer-events-none z-9998"
      animate={{
        width: 32,
        height:  32,
        borderColor: "#f59e0b",
        opacity:  1 , 
        borderWidth:  1,
        mixBlendMode: "difference", 
      }}
      style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
    />
  </>
);
};

export default CustomCursor;