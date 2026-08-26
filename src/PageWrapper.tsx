import { motion } from "framer-motion";
import type { ReactNode } from "react";

const variants = {
  initial: { y: "100%", opacity: 0 },   // entra dal basso
  animate: { y: 0, opacity: 1 },        // posizione normale
  exit: { y: "-100%", opacity: 0 },     // esce verso l'alto
};

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children } : PageWrapperProps) {
  return (
       <motion.div id="content" variants={variants} initial="initial" animate="animate"  exit="exit" transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}>
          {children}
        </motion.div>
  );
}
