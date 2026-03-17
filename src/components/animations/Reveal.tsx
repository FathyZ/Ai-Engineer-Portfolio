
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
}

export const Reveal = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }} 
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};