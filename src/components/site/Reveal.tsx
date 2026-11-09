"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

const variants = (dir: Direction, delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: dir === "up" ? 24 : 0,
    x: dir === "left" ? 24 : dir === "right" ? -24 : 0,
  },
  visible: { opacity: 1, y: 0, x: 0, transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
});

export function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  dir?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={variants(dir, delay)}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
