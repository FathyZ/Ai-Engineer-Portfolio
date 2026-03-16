import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

const Marquee = ({ 
  children, 
  duration , 
  direction , 
  pauseOnHover  
}: MarqueeProps) => {
  const moveX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: moveX }}
        transition={{
          ease: "linear",
          duration: duration,
          repeat: Infinity,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >

        <div className="flex">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;