import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...props }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    {...props}
  >
    {children}
  </motion.div>
);

export const Overline = ({ children, light = false, className = "" }) => (
  <span
    className={`inline-block text-xs uppercase tracking-[0.28em] font-medium ${
      light ? "text-white/70" : "text-origem-green"
    } ${className}`}
  >
    {children}
  </span>
);
