"use client";

import { motion } from "framer-motion";
import type { PetLevels } from "@/lib/pet";

interface StreakPetProps extends PetLevels {
  className?: string;
}

// bodySize 1 (slim) – 5 (heavy) -> overall scale of the whole creature.
const BODY_SCALE: Record<number, number> = { 1: 0.78, 2: 0.89, 3: 1, 4: 1.13, 5: 1.26 };

// glowLevel 1 (dim) – 3 (glowing) -> brightness + drop-shadow halo strength.
const GLOW_STYLE: Record<number, { brightness: number; shadow: string }> = {
  1: { brightness: 0.85, shadow: "none" },
  2: { brightness: 1, shadow: "0 0 6px rgba(139, 203, 125, 0.35)" },
  3: { brightness: 1.12, shadow: "0 0 22px rgba(139, 203, 125, 0.85)" },
};

/**
 * A hand-coded SVG "streak pet" whose body visibly reflects real logged
 * intake (see lib/pet.ts): body width/height from overall calorie intake,
 * arm definition from protein, a belly bulge from fat, and a glow halo from
 * water. Color is always a fixed light green — only shape/glow change.
 */
export default function StreakPet({
  bodySize,
  muscleLevel,
  puffinessLevel,
  glowLevel,
  className,
}: StreakPetProps) {
  const scale = BODY_SCALE[bodySize] ?? 1;
  const muscleOpacity = (muscleLevel - 1) / 4; // 0 – 1
  const puffOpacity = (puffinessLevel - 1) / 4 * 0.6; // 0 – 0.6, kept subtle
  const puffWidth = 60 + (puffinessLevel - 1) * 6; // rx of the belly overlay
  const glow = GLOW_STYLE[glowLevel] ?? GLOW_STYLE[2];

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ filter: `brightness(${glow.brightness}) drop-shadow(${glow.shadow})` }}
      role="img"
      aria-label="Your streak pet"
    >
      <g transform={`translate(100 118) scale(${scale}) translate(-100 -118)`}>
        {/* Feet */}
        <ellipse cx={78} cy={168} rx={16} ry={9} fill="var(--primary-green)" opacity={0.9} />
        <ellipse cx={122} cy={168} rx={16} ry={9} fill="var(--primary-green)" opacity={0.9} />

        {/* Arms */}
        <circle cx={42} cy={122} r={17} fill="var(--secondary-green)" stroke="var(--primary-green)" strokeWidth={2} />
        <circle cx={158} cy={122} r={17} fill="var(--secondary-green)" stroke="var(--primary-green)" strokeWidth={2} />
        {/* Muscle definition highlight on each arm, from protein intake */}
        <path
          d="M35 116 A 10 10 0 0 1 49 116"
          fill="none"
          stroke="var(--primary-green)"
          strokeWidth={2.5}
          strokeLinecap="round"
          opacity={muscleOpacity}
        />
        <path
          d="M151 116 A 10 10 0 0 1 165 116"
          fill="none"
          stroke="var(--primary-green)"
          strokeWidth={2.5}
          strokeLinecap="round"
          opacity={muscleOpacity}
        />

        {/* Body */}
        <ellipse cx={100} cy={112} rx={55} ry={58} fill="var(--secondary-green)" stroke="var(--primary-green)" strokeWidth={2.5} />

        {/* Belly puffiness overlay, from fat intake */}
        <ellipse cx={100} cy={140} rx={puffWidth} ry={30} fill="var(--secondary-green)" opacity={puffOpacity} />

        {/* Face */}
        <circle cx={82} cy={102} r={5.5} fill="#2b2b2b" />
        <circle cx={118} cy={102} r={5.5} fill="#2b2b2b" />
        <path
          d="M84 122 Q100 134 116 122"
          fill="none"
          stroke="#2b2b2b"
          strokeWidth={3}
          strokeLinecap="round"
        />

        {/* Cheeks */}
        <circle cx={68} cy={114} r={6} fill="#F6A6A6" opacity={0.55} />
        <circle cx={132} cy={114} r={6} fill="#F6A6A6" opacity={0.55} />
      </g>
    </motion.svg>
  );
}
